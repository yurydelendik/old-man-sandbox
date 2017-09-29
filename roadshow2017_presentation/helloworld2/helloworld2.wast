(module
  (memory (export "memory") 200 200)
  (data (i32.const 0) "Hello, world\00")
  (import $print "sys" "print" (param i32))
  (func (export "main")
    (call $print
      (i32.const 0)
    )
  )
)
