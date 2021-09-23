/**
 * Find an HTML Element with the given `slot` name attribute, if it exists.
 * This traverses the HTML Collection and can be used before the elements
 * are attached to the DOM.
 * This is especially useful in the `componentWillMount` lifecycle events for performance reasons
 */
export declare const getSlotByName: (root?: Element | null | undefined) => (slotName: string) => Element | undefined;
