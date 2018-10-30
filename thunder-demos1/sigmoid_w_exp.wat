(module
  (func (export "sigmoid") (param $x f64) (result f64)
    f64.const 1
    f64.const 1
    get_local $x
    f64.neg
    call $exp
    f64.add
    f64.div
  )

  (func $exp (param f64) (result f64)
    (local i32 i64 i32 i32 f64 f64 f64)
    get_global 0
    i32.const 16
    i32.sub
    tee_local 1
    set_global 0
    get_local 0
    i64.reinterpret/f64
    tee_local 2
    i64.const 63
    i64.shr_u
    i32.wrap/i64
    set_local 3
    block  ;; label = @1
      block  ;; label = @2
        block  ;; label = @3
          block  ;; label = @4
            block  ;; label = @5
              block  ;; label = @6
                block  ;; label = @7
                  block  ;; label = @8
                    block  ;; label = @9
                      block  ;; label = @10
                        get_local 2
                        i64.const 32
                        i64.shr_u
                        i32.wrap/i64
                        i32.const 2147483647
                        i32.and
                        tee_local 4
                        i32.const 1082532651
                        i32.lt_u
                        br_if 0 (;@10;)
                        get_local 2
                        i64.const 9223372036854775807
                        i64.and
                        i64.const 9218868437227405312
                        i64.le_u
                        br_if 1 (;@9;)
                        get_local 1
                        i32.const 16
                        i32.add
                        set_global 0
                        get_local 0
                        return
                      end
                      get_local 4
                      i32.const 1071001155
                      i32.lt_u
                      br_if 1 (;@8;)
                      get_local 4
                      i32.const 1072734898
                      i32.ge_u
                      br_if 3 (;@6;)
                      get_local 3
                      i32.const 1
                      i32.xor
                      get_local 3
                      i32.sub
                      set_local 4
                      br 6 (;@3;)
                    end
                    get_local 0
                    f64.const 0x1.62e42fefa39efp+9 (;=709.783;)
                    f64.gt
                    i32.const 1
                    i32.xor
                    br_if 1 (;@7;)
                    get_local 1
                    i32.const 16
                    i32.add
                    set_global 0
                    get_local 0
                    f64.const 0x1p+1023 (;=8.98847e+307;)
                    f64.mul
                    return
                  end
                  get_local 4
                  i32.const 1043333120
                  i32.le_u
                  br_if 2 (;@5;)
                  i32.const 0
                  set_local 4
                  f64.const 0x0p+0 (;=0;)
                  set_local 5
                  get_local 0
                  set_local 6
                  br 5 (;@2;)
                end
                get_local 0
                f64.const -0x1.6232bdd7abcd2p+9 (;=-708.396;)
                f64.lt
                i32.const 1
                i32.xor
                br_if 0 (;@6;)
                get_local 1
                f64.const -0x1p-149 (;=-1.4013e-45;)
                get_local 0
                f64.div
                f32.demote/f64
                f32.store offset=12
                f64.const 0x0p+0 (;=0;)
                set_local 7
                get_local 0
                f64.const -0x1.74910d52d3051p+9 (;=-745.133;)
                f64.lt
                br_if 5 (;@1;)
              end
              get_local 0
              f64.const 0x1.71547652b82fep+0 (;=1.4427;)
              f64.mul
              get_local 3
              i32.const 3
              i32.shl
              i32.const 1024
              i32.add
              f64.load
              f64.add
              tee_local 7
              f64.abs
              f64.const 0x1p+31 (;=2.14748e+09;)
              f64.lt
              br_if 1 (;@4;)
              i32.const -2147483648
              set_local 4
              br 2 (;@3;)
            end
            get_local 1
            get_local 0
            f64.const 0x1p+1023 (;=8.98847e+307;)
            f64.add
            f64.store
            get_local 1
            i32.const 16
            i32.add
            set_global 0
            get_local 0
            f64.const 0x1p+0 (;=1;)
            f64.add
            return
          end
          get_local 7
          i32.trunc_s/f64
          set_local 4
        end
        get_local 0
        get_local 4
        f64.convert_s/i32
        tee_local 7
        f64.const -0x1.62e42feep-1 (;=-0.693147;)
        f64.mul
        f64.add
        tee_local 0
        get_local 7
        f64.const 0x1.a39ef35793c76p-33 (;=1.90821e-10;)
        f64.mul
        tee_local 5
        f64.sub
        set_local 6
      end
      get_local 0
      get_local 6
      get_local 6
      get_local 6
      get_local 6
      f64.mul
      tee_local 7
      get_local 7
      get_local 7
      get_local 7
      get_local 7
      f64.const 0x1.6376972bea4dp-25 (;=4.13814e-08;)
      f64.mul
      f64.const -0x1.bbd41c5d26bf1p-20 (;=-1.65339e-06;)
      f64.add
      f64.mul
      f64.const 0x1.1566aaf25de2cp-14 (;=6.61376e-05;)
      f64.add
      f64.mul
      f64.const -0x1.6c16c16bebd93p-9 (;=-0.00277778;)
      f64.add
      f64.mul
      f64.const 0x1.555555555553ep-3 (;=0.166667;)
      f64.add
      f64.mul
      f64.sub
      tee_local 7
      f64.mul
      f64.const 0x1p+1 (;=2;)
      get_local 7
      f64.sub
      f64.div
      get_local 5
      f64.sub
      f64.add
      f64.const 0x1p+0 (;=1;)
      f64.add
      set_local 7
      get_local 4
      i32.eqz
      br_if 0 (;@1;)
      get_local 7
      get_local 4
      call $scalbn
      set_local 7
    end
    get_local 1
    i32.const 16
    i32.add
    set_global 0
    get_local 7)
  (func $scalbn (param f64 i32) (result f64)
    (local i32)
    block  ;; label = @1
      block  ;; label = @2
        block  ;; label = @3
          block  ;; label = @4
            get_local 1
            i32.const 1024
            i32.lt_s
            br_if 0 (;@4;)
            get_local 0
            f64.const 0x1p+1023 (;=8.98847e+307;)
            f64.mul
            set_local 0
            get_local 1
            i32.const -1023
            i32.add
            tee_local 2
            i32.const 1024
            i32.lt_s
            br_if 1 (;@3;)
            get_local 1
            i32.const -2046
            i32.add
            tee_local 1
            i32.const 1023
            get_local 1
            i32.const 1023
            i32.lt_s
            select
            set_local 1
            get_local 0
            f64.const 0x1p+1023 (;=8.98847e+307;)
            f64.mul
            set_local 0
            br 3 (;@1;)
          end
          get_local 1
          i32.const -1023
          i32.gt_s
          br_if 2 (;@1;)
          get_local 0
          f64.const 0x1p-969 (;=2.00417e-292;)
          f64.mul
          set_local 0
          get_local 1
          i32.const 969
          i32.add
          tee_local 2
          i32.const -1023
          i32.gt_s
          br_if 1 (;@2;)
          get_local 1
          i32.const 1938
          i32.add
          tee_local 1
          i32.const -1022
          get_local 1
          i32.const -1022
          i32.gt_s
          select
          set_local 1
          get_local 0
          f64.const 0x1p-969 (;=2.00417e-292;)
          f64.mul
          set_local 0
          br 2 (;@1;)
        end
        get_local 2
        set_local 1
        br 1 (;@1;)
      end
      get_local 2
      set_local 1
    end
    get_local 0
    get_local 1
    i32.const 1023
    i32.add
    i64.extend_u/i32
    i64.const 52
    i64.shl
    f64.reinterpret/i64
    f64.mul)
  (memory (;0;) 2)
  (global (;0;) (mut i32) (i32.const 66576))
  (export "memory" (memory 0))
  (data (;0;) (i32.const 1024) "\00\00\00\00\00\00\e0?\00\00\00\00\00\00\e0\bf")

)
