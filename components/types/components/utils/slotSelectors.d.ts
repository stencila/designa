/**
 * Find an HTML Element with the given `slot` name attribute, if it exists.
 * This traverses the HTML Collection and can be used before the elements
 * are attached to the DOM.
 * This is especially useful in the `componentWillMount` lifecycle events for performance reasons
 *
 * Extra care needs to be taken if used with the `default`/unnamed slot as it can lead to false positives.
 * This is because any element that does not have an explicit `slot` attribute,
 * will return a value of `''` (empty string).
 */
export declare const getSlotByName: (root?: Element | null | undefined) => (slotName: string | string[]) => Element[];
