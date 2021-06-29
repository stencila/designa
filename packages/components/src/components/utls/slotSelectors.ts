/**
 * Find an HTML Element with the given `slot` name attribute, if it exists.
 * This traverses the HTML Collection and can be used before the elements
 * are attached to the DOM.
 * This is especially useful in the `componentWillMount` lifecycle events for performance reasons
 */
export const findSlotByName =
  (root: Element) =>
  (slotName: string): Element | undefined => {
    const children = Array.from(root.children)
    const el = children.find((child) => {
      return child.slot === slotName
    })

    if (el) {
      return el
    }

    return children.find((child) => findSlotByName(child)(slotName))
  }
