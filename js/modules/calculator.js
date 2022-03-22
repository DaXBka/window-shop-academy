import { animate } from './helpers';

export const calculator = (
    price = 100,
    {
        id = 'calc',
        selectTypeId = '#calc-type',
        selectMaterialId = '#calc-type-material',
        inputSizeId = '#calc-input',
        inputTotalId = '#calc-total',
    }
) => {
    const calculatorBlock = document.getElementById(id);

    try {
        if (!calculatorBlock) {
            throw new Error('Не вижу калькулятор');
        }
    } catch (e) {
        return;
    }

    const selectType = calculatorBlock.querySelector(selectTypeId);
    const selectMaterial = calculatorBlock.querySelector(selectMaterialId);
    const inputSize = calculatorBlock.querySelector(inputSizeId);
    const total = calculatorBlock.querySelector(inputTotalId);

    try {
        if (!(selectType && selectMaterial && inputSize && total)) {
            throw new Error('Не были найдены input / select для calculator.js');
        }
    } catch (e) {
        return;
    }

    const calculateTotalPrice = () => {
        const typeValue = +selectType.value;
        const materialValue = +selectMaterial.value || 1;

        let squareValue = 1;
        let totalValue = 0;

        if (inputSize.value && +inputSize.value > 0) {
            squareValue = +inputSize.value;
        }

        if (typeValue && inputSize.value) {
            totalValue = price * typeValue * materialValue * squareValue;
        }

        if (totalValue !== 0) {
            renderTotal(totalValue);
        } else {
            total.value = '';
        }
        total.classList.remove('active');
    };

    const renderTotal = num => {
        total.classList.remove('active');
        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                total.value = Math.floor(num * progress);
                if (progress === 1) {
                    total.classList.add('active');
                }
            },
        });
        total.value = num;
    };

    calculatorBlock.addEventListener('input', e => {
        if (e.target == selectType || e.target == selectMaterial || e.target == inputSize) {
            calculateTotalPrice();
        }
    });
};
