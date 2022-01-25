use wasm_bindgen::JsCast;
use wasm_bindgen::prelude::*;


pub fn now() -> f64 {
    // https://github.com/sebcrozet/instant/pull/12/commits/20dcbc0e9ff8098f6a6aa5ec31cea926b981b4bd
    js_sys::Reflect::get(&js_sys::global(), &JsValue::from_str("performance"))
        .expect("failed to get performance from global object")
        .unchecked_into::<web_sys::Performance>()
        .now()
}

