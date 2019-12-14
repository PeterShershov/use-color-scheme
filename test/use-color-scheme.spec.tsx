import expect from 'expect';
import React from 'react';
import { render } from 'react-dom';
import sinon, { spy } from 'sinon';
import { usePreferColorScheme } from '../src/use-prefer-color-scheme';
import { renderTestElement } from './render-test-element';

const TestComponent: React.FC = () => {
    const colorScheme = usePreferColorScheme();
    return <div>{colorScheme}</div>;
};

describe('use-color-scheme', () => {
    let container: HTMLDivElement;
    beforeEach(() => {
        container = renderTestElement({ id: 'test' });
        render(<TestComponent />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
    });

    it('returns `light` as initial value', () => {
        const matchMediaStub = sinon.stub();

        matchMediaStub.returns({
            addListener: spy(),
            matches: false,
            removeListener: spy()
        });

        window.matchMedia = matchMediaStub;
        expect(document.querySelector('#test')?.textContent).toBe('light');
    });

    it('returns `dark` as initial value', () => {
        const matchMediaStub = sinon.stub();

        matchMediaStub.returns({
            addListener: spy(),
            matches: true,
            removeListener: spy()
        });

        window.matchMedia = matchMediaStub;
        expect(document.querySelector('#test')?.textContent).toBe('light');
    });
});
