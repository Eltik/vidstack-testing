/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
export interface createElementConfig {
    element?: string,
    attributes?: { [key: string]: string },
    style?: { [key: string]: string },
    class?: string,
    id?: string,
    innerText?: string,
    innerHTML?: string,
    listeners?: { [key: string]: Function }
}

export interface menuItemConfig {
    open?: string,
    attributes?: { [key: string]: string },
    classes?: Array<string>,
    iconID?: string,
    hideArrow?: boolean,
    callback?: Function,
    selected?: boolean,
    highlightable?: boolean,
    id?: string,
    text?: string,
    html?: string,
    altText?: string,
    textBox?: boolean,
    numberBox?: boolean,
    slider?: boolean,
    sliderConfig?: sliderConfig;
    value?: string,
    onInput?: Function,
    toggle?: boolean,
    color?: boolean,
    on?: boolean,
    toggleOn?: Function,
    toggleOff?: Function,
    selectedValue?: string,
    valueDOM?: HTMLElement,
    triggerCallbackIfSelected?: boolean,
}

export interface sliderConfig {
    max: number,
    min: number,
    step: number
}

export interface menuSceneConfig {
    config?: menuItemConfig,
    id: string,
    selectableScene?: boolean,
    heading?: menuItemConfig,
    items: Array<menuItemConfig>,
    element?: HTMLElement
}