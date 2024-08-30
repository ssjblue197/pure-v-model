export default {
    name: 'vue-p-model',
    install: (app, _options) => {
        const wm = new WeakMap();
        app.directive("p-model", {
            beforeMount(el, binding, _vnode) {
                const eventName = (el.tagName === "P-SELECT" || el.tagName === "P-TABLE") ? "p-change" : "input";
                const inputHandler = function inputHandler(event) {
                    return (binding.instance[binding.value] = event.target.value);
                };

                wm.set(el, inputHandler);
                el.value = binding.value ?? "";
                el.addEventListener(eventName, inputHandler);
            },
            updated(el, binding) {
                el.value = binding.value ?? "";
            },
            unmounted(el, _binding) {
                const inputHandler = wm.get(el);
                el.removeEventListener(el, inputHandler);
            },
        });
    },
};
