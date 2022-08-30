export function clickOutside(node) {
    const handleClick = (event) => {
        if (!node.contains(event.target)) {
            node.dispatchEvent(new CustomEvent('out-click'));
        }
    };
    document.addEventListener('click', handleClick, true);
    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    };
}
//# sourceMappingURL=click-outside.js.map