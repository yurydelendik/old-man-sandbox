(module
  (import "Math" "exp"
    (func $exp (param f64) (result f64))
  )
  (func (export "sigmoid") (param $x f64) (result f64)
    f64.const 1
    f64.const 1
    get_local $x
    f64.neg
    call $exp
    f64.add
    f64.div
  )
)
