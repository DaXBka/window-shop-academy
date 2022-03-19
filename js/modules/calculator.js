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
            throw new Error('Не были найдены input / select для');
        }
    } catch (e) {
        return;
    }

    const calculateTotalPrice = () => {
        const typeValue = +selectType.value;
        const materialValue = +selectMaterial.value;

        let squareValue = 1;
        let totalValue = 0;

        if (inputSize.value && +inputSize.value > 0) {
            squareValue = +inputSize.value;
        }

        if (typeValue && materialValue) {
            totalValue = price * typeValue * materialValue * squareValue;
        }

        if (totalValue !== 0) {
            renderTotal(totalValue);
        } else {
            total.value = '';
        }
    };

    const renderTotal = num => {
        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                total.value = Math.floor(num * progress);
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
