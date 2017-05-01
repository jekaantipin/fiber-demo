// for (let i; i < dirtyComponents.length; i++) {
//     if (shouldComponentUpdate(newProps, newState)
//         dirtyComponents[i]._updateDOMProperties();
//     dirtyComponents[i]._updateDOMChildren();
// }
type ReactComponent = {
    shouldComponentUpdate: (newProps: Object, newState: Object) => {},
    updateDOMProperties: (newProps: Object, newState: Object) => {},
    updateDOMChildren: (newProps: Object, newState: Object, context:Object) => {}
};
const newProps = {};
const newState = {};


let dirtyComponents: ReactComponent[] = [];

const updateDOMComponent = (component) =>{
    if (shouldComponentUpdate(component)) {
        updateDOMProperties(component);
        component.children.forEach(updateDOMComponent);
    }
};

dirtyComponents.forEach(updateDOMComponent);

Window.prototype.requestIdleCallback = function(callback) {};


window.requestAnimationFrame(callback);
window.requestIdleCallback(callback);




const updateDOMComponent = (component) =>{
    if (shouldComponentUpdate(component)) {
        updateDOMProperties(component);
        component.children.forEach(updateDOMComponent);
    }
};

dirtyComponents.forEach(updateDOMComponent);
 
