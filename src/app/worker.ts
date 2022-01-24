import("../../pkg/wasm").then(module => {
    const res = module.action("Seven");
    console.log(`Wasm return: ${res}`);
})

