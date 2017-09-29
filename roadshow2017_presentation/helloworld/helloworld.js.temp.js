// EMSCRIPTEN_START_ASM

var asm = (function(global,env,buffer) {
"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.STACKTOP|0;var j=env.STACK_MAX|0;var k=env.tempDoublePtr|0;var l=env.ABORT|0;var m=env.cttz_i8|0;var n=env.___dso_handle|0;var o=0;var p=0;var q=0;var r=0;var s=global.NaN,t=global.Infinity;var u=0,v=0,w=0,x=0,y=0.0,z=0,A=0,B=0,C=0.0;var D=0;var E=0;var F=0;var G=0;var H=0;var I=0;var J=0;var K=0;var L=0;var M=0;var N=global.Math.floor;var O=global.Math.abs;var P=global.Math.sqrt;var Q=global.Math.pow;var R=global.Math.cos;var S=global.Math.sin;var T=global.Math.tan;var U=global.Math.acos;var V=global.Math.asin;var W=global.Math.atan;var X=global.Math.atan2;var Y=global.Math.exp;var Z=global.Math.log;var _=global.Math.ceil;var $=global.Math.imul;var aa=global.Math.min;var ba=global.Math.clz32;var ca=env.abort;var da=env.assert;var ea=env.invoke_iiiiiiii;var fa=env.invoke_iiii;var ga=env.invoke_viiiii;var ha=env.invoke_iiiiiid;var ia=env.invoke_vi;var ja=env.invoke_vii;var ka=env.invoke_iiiiiii;var la=env.invoke_iiiiid;var ma=env.invoke_ii;var na=env.invoke_viii;var oa=env.invoke_v;var pa=env.invoke_iiiiiiiii;var qa=env.invoke_iiiii;var ra=env.invoke_viiiiii;var sa=env.invoke_iii;var ta=env.invoke_iiiiii;var ua=env.invoke_viiii;var va=env._fabs;var wa=env._strftime;var xa=env._pthread_cond_wait;var ya=env._pthread_key_create;var za=env._abort;var Aa=env.___cxa_guard_acquire;var Ba=env.___setErrNo;var Ca=env.___assert_fail;var Da=env.___cxa_allocate_exception;var Ea=env.__ZSt18uncaught_exceptionv;var Fa=env.__isLeapYear;var Ga=env.___cxa_guard_release;var Ha=env.__addDays;var Ia=env._strftime_l;var Ja=env._emscripten_set_main_loop_timing;var Ka=env._sbrk;var La=env.___cxa_begin_catch;var Ma=env._emscripten_memcpy_big;var Na=env.___resumeException;var Oa=env.___cxa_find_matching_catch;var Pa=env._sysconf;var Qa=env._pthread_getspecific;var Ra=env.__arraySum;var Sa=env._pthread_self;var Ta=env._pthread_mutex_unlock;var Ua=env._pthread_once;var Va=env.___syscall54;var Wa=env.___unlock;var Xa=env._pthread_cleanup_pop;var Ya=env._pthread_cond_broadcast;var Za=env._emscripten_set_main_loop;var _a=env._pthread_setspecific;var $a=env.___cxa_atexit;var ab=env.___cxa_throw;var bb=env.___lock;var cb=env.___syscall6;var db=env._pthread_cleanup_push;var eb=env._time;var fb=env._pthread_mutex_lock;var gb=env._atexit;var hb=env.___syscall140;var ib=env.___syscall145;var jb=env.___syscall146;var kb=0.0;
// EMSCRIPTEN_START_FUNCS

function ke(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0;
 do if (a >>> 0 < 245) {
  o = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = o >>> 3;
  i = c[1534] | 0;
  d = i >>> a;
  if (d & 3) {
   a = (d & 1 ^ 1) + a | 0;
   e = a << 1;
   d = 6176 + (e << 2) | 0;
   e = 6176 + (e + 2 << 2) | 0;
   f = c[e >> 2] | 0;
   g = f + 8 | 0;
   h = c[g >> 2] | 0;
   do if ((d | 0) != (h | 0)) {
    if (h >>> 0 < (c[1538] | 0) >>> 0) za();
    b = h + 12 | 0;
    if ((c[b >> 2] | 0) == (f | 0)) {
     c[b >> 2] = d;
     c[e >> 2] = h;
     break;
    } else za();
   } else c[1534] = i & ~(1 << a); while (0);
   M = a << 3;
   c[f + 4 >> 2] = M | 3;
   M = f + (M | 4) | 0;
   c[M >> 2] = c[M >> 2] | 1;
   M = g;
   return M | 0;
  }
  h = c[1536] | 0;
  if (o >>> 0 > h >>> 0) {
   if (d) {
    e = 2 << a;
    e = d << a & (e | 0 - e);
    e = (e & 0 - e) + -1 | 0;
    j = e >>> 12 & 16;
    e = e >>> j;
    f = e >>> 5 & 8;
    e = e >>> f;
    g = e >>> 2 & 4;
    e = e >>> g;
    d = e >>> 1 & 2;
    e = e >>> d;
    a = e >>> 1 & 1;
    a = (f | j | g | d | a) + (e >>> a) | 0;
    e = a << 1;
    d = 6176 + (e << 2) | 0;
    e = 6176 + (e + 2 << 2) | 0;
    g = c[e >> 2] | 0;
    j = g + 8 | 0;
    f = c[j >> 2] | 0;
    do if ((d | 0) != (f | 0)) {
     if (f >>> 0 < (c[1538] | 0) >>> 0) za();
     b = f + 12 | 0;
     if ((c[b >> 2] | 0) == (g | 0)) {
      c[b >> 2] = d;
      c[e >> 2] = f;
      k = c[1536] | 0;
      break;
     } else za();
    } else {
     c[1534] = i & ~(1 << a);
     k = h;
    } while (0);
    M = a << 3;
    h = M - o | 0;
    c[g + 4 >> 2] = o | 3;
    i = g + o | 0;
    c[g + (o | 4) >> 2] = h | 1;
    c[g + M >> 2] = h;
    if (k) {
     f = c[1539] | 0;
     d = k >>> 3;
     b = d << 1;
     e = 6176 + (b << 2) | 0;
     a = c[1534] | 0;
     d = 1 << d;
     if (a & d) {
      a = 6176 + (b + 2 << 2) | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[1538] | 0) >>> 0) za(); else {
       l = a;
       m = b;
      }
     } else {
      c[1534] = a | d;
      l = 6176 + (b + 2 << 2) | 0;
      m = e;
     }
     c[l >> 2] = f;
     c[m + 12 >> 2] = f;
     c[f + 8 >> 2] = m;
     c[f + 12 >> 2] = e;
    }
    c[1536] = h;
    c[1539] = i;
    M = j;
    return M | 0;
   }
   a = c[1535] | 0;
   if (a) {
    d = (a & 0 - a) + -1 | 0;
    L = d >>> 12 & 16;
    d = d >>> L;
    K = d >>> 5 & 8;
    d = d >>> K;
    M = d >>> 2 & 4;
    d = d >>> M;
    a = d >>> 1 & 2;
    d = d >>> a;
    e = d >>> 1 & 1;
    e = c[6440 + ((K | L | M | a | e) + (d >>> e) << 2) >> 2] | 0;
    d = (c[e + 4 >> 2] & -8) - o | 0;
    a = e;
    while (1) {
     b = c[a + 16 >> 2] | 0;
     if (!b) {
      b = c[a + 20 >> 2] | 0;
      if (!b) {
       j = d;
       break;
      }
     }
     a = (c[b + 4 >> 2] & -8) - o | 0;
     M = a >>> 0 < d >>> 0;
     d = M ? a : d;
     a = b;
     e = M ? b : e;
    }
    g = c[1538] | 0;
    if (e >>> 0 < g >>> 0) za();
    i = e + o | 0;
    if (e >>> 0 >= i >>> 0) za();
    h = c[e + 24 >> 2] | 0;
    d = c[e + 12 >> 2] | 0;
    do if ((d | 0) == (e | 0)) {
     a = e + 20 | 0;
     b = c[a >> 2] | 0;
     if (!b) {
      a = e + 16 | 0;
      b = c[a >> 2] | 0;
      if (!b) {
       n = 0;
       break;
      }
     }
     while (1) {
      d = b + 20 | 0;
      f = c[d >> 2] | 0;
      if (f) {
       b = f;
       a = d;
       continue;
      }
      d = b + 16 | 0;
      f = c[d >> 2] | 0;
      if (!f) break; else {
       b = f;
       a = d;
      }
     }
     if (a >>> 0 < g >>> 0) za(); else {
      c[a >> 2] = 0;
      n = b;
      break;
     }
    } else {
     f = c[e + 8 >> 2] | 0;
     if (f >>> 0 < g >>> 0) za();
     b = f + 12 | 0;
     if ((c[b >> 2] | 0) != (e | 0)) za();
     a = d + 8 | 0;
     if ((c[a >> 2] | 0) == (e | 0)) {
      c[b >> 2] = d;
      c[a >> 2] = f;
      n = d;
      break;
     } else za();
    } while (0);
    do if (h) {
     b = c[e + 28 >> 2] | 0;
     a = 6440 + (b << 2) | 0;
     if ((e | 0) == (c[a >> 2] | 0)) {
      c[a >> 2] = n;
      if (!n) {
       c[1535] = c[1535] & ~(1 << b);
       break;
      }
     } else {
      if (h >>> 0 < (c[1538] | 0) >>> 0) za();
      b = h + 16 | 0;
      if ((c[b >> 2] | 0) == (e | 0)) c[b >> 2] = n; else c[h + 20 >> 2] = n;
      if (!n) break;
     }
     a = c[1538] | 0;
     if (n >>> 0 < a >>> 0) za();
     c[n + 24 >> 2] = h;
     b = c[e + 16 >> 2] | 0;
     do if (b) if (b >>> 0 < a >>> 0) za(); else {
      c[n + 16 >> 2] = b;
      c[b + 24 >> 2] = n;
      break;
     } while (0);
     b = c[e + 20 >> 2] | 0;
     if (b) if (b >>> 0 < (c[1538] | 0) >>> 0) za(); else {
      c[n + 20 >> 2] = b;
      c[b + 24 >> 2] = n;
      break;
     }
    } while (0);
    if (j >>> 0 < 16) {
     M = j + o | 0;
     c[e + 4 >> 2] = M | 3;
     M = e + (M + 4) | 0;
     c[M >> 2] = c[M >> 2] | 1;
    } else {
     c[e + 4 >> 2] = o | 3;
     c[e + (o | 4) >> 2] = j | 1;
     c[e + (j + o) >> 2] = j;
     b = c[1536] | 0;
     if (b) {
      g = c[1539] | 0;
      d = b >>> 3;
      b = d << 1;
      f = 6176 + (b << 2) | 0;
      a = c[1534] | 0;
      d = 1 << d;
      if (a & d) {
       b = 6176 + (b + 2 << 2) | 0;
       a = c[b >> 2] | 0;
       if (a >>> 0 < (c[1538] | 0) >>> 0) za(); else {
        p = b;
        q = a;
       }
      } else {
       c[1534] = a | d;
       p = 6176 + (b + 2 << 2) | 0;
       q = f;
      }
      c[p >> 2] = g;
      c[q + 12 >> 2] = g;
      c[g + 8 >> 2] = q;
      c[g + 12 >> 2] = f;
     }
     c[1536] = j;
     c[1539] = i;
    }
    M = e + 8 | 0;
    return M | 0;
   } else q = o;
  } else q = o;
 } else if (a >>> 0 <= 4294967231) {
  a = a + 11 | 0;
  m = a & -8;
  l = c[1535] | 0;
  if (l) {
   d = 0 - m | 0;
   a = a >>> 8;
   if (a) if (m >>> 0 > 16777215) k = 31; else {
    q = (a + 1048320 | 0) >>> 16 & 8;
    v = a << q;
    p = (v + 520192 | 0) >>> 16 & 4;
    v = v << p;
    k = (v + 245760 | 0) >>> 16 & 2;
    k = 14 - (p | q | k) + (v << k >>> 15) | 0;
    k = m >>> (k + 7 | 0) & 1 | k << 1;
   } else k = 0;
   a = c[6440 + (k << 2) >> 2] | 0;
   a : do if (!a) {
    f = 0;
    a = 0;
    v = 86;
   } else {
    h = d;
    f = 0;
    i = m << ((k | 0) == 31 ? 0 : 25 - (k >>> 1) | 0);
    j = a;
    a = 0;
    while (1) {
     g = c[j + 4 >> 2] & -8;
     d = g - m | 0;
     if (d >>> 0 < h >>> 0) if ((g | 0) == (m | 0)) {
      g = j;
      a = j;
      v = 90;
      break a;
     } else a = j; else d = h;
     v = c[j + 20 >> 2] | 0;
     j = c[j + 16 + (i >>> 31 << 2) >> 2] | 0;
     f = (v | 0) == 0 | (v | 0) == (j | 0) ? f : v;
     if (!j) {
      v = 86;
      break;
     } else {
      h = d;
      i = i << 1;
     }
    }
   } while (0);
   if ((v | 0) == 86) {
    if ((f | 0) == 0 & (a | 0) == 0) {
     a = 2 << k;
     a = l & (a | 0 - a);
     if (!a) {
      q = m;
      break;
     }
     a = (a & 0 - a) + -1 | 0;
     n = a >>> 12 & 16;
     a = a >>> n;
     l = a >>> 5 & 8;
     a = a >>> l;
     p = a >>> 2 & 4;
     a = a >>> p;
     q = a >>> 1 & 2;
     a = a >>> q;
     f = a >>> 1 & 1;
     f = c[6440 + ((l | n | p | q | f) + (a >>> f) << 2) >> 2] | 0;
     a = 0;
    }
    if (!f) {
     i = d;
     j = a;
    } else {
     g = f;
     v = 90;
    }
   }
   if ((v | 0) == 90) while (1) {
    v = 0;
    q = (c[g + 4 >> 2] & -8) - m | 0;
    f = q >>> 0 < d >>> 0;
    d = f ? q : d;
    a = f ? g : a;
    f = c[g + 16 >> 2] | 0;
    if (f) {
     g = f;
     v = 90;
     continue;
    }
    g = c[g + 20 >> 2] | 0;
    if (!g) {
     i = d;
     j = a;
     break;
    } else v = 90;
   }
   if ((j | 0) != 0 ? i >>> 0 < ((c[1536] | 0) - m | 0) >>> 0 : 0) {
    f = c[1538] | 0;
    if (j >>> 0 < f >>> 0) za();
    h = j + m | 0;
    if (j >>> 0 >= h >>> 0) za();
    g = c[j + 24 >> 2] | 0;
    d = c[j + 12 >> 2] | 0;
    do if ((d | 0) == (j | 0)) {
     a = j + 20 | 0;
     b = c[a >> 2] | 0;
     if (!b) {
      a = j + 16 | 0;
      b = c[a >> 2] | 0;
      if (!b) {
       o = 0;
       break;
      }
     }
     while (1) {
      d = b + 20 | 0;
      e = c[d >> 2] | 0;
      if (e) {
       b = e;
       a = d;
       continue;
      }
      d = b + 16 | 0;
      e = c[d >> 2] | 0;
      if (!e) break; else {
       b = e;
       a = d;
      }
     }
     if (a >>> 0 < f >>> 0) za(); else {
      c[a >> 2] = 0;
      o = b;
      break;
     }
    } else {
     e = c[j + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) za();
     b = e + 12 | 0;
     if ((c[b >> 2] | 0) != (j | 0)) za();
     a = d + 8 | 0;
     if ((c[a >> 2] | 0) == (j | 0)) {
      c[b >> 2] = d;
      c[a >> 2] = e;
      o = d;
      break;
     } else za();
    } while (0);
    do if (g) {
     b = c[j + 28 >> 2] | 0;
     a = 6440 + (b << 2) | 0;
     if ((j | 0) == (c[a >> 2] | 0)) {
      c[a >> 2] = o;
      if (!o) {
       c[1535] = c[1535] & ~(1 << b);
       break;
      }
     } else {
      if (g >>> 0 < (c[1538] | 0) >>> 0) za();
      b = g + 16 | 0;
      if ((c[b >> 2] | 0) == (j | 0)) c[b >> 2] = o; else c[g + 20 >> 2] = o;
      if (!o) break;
     }
     a = c[1538] | 0;
     if (o >>> 0 < a >>> 0) za();
     c[o + 24 >> 2] = g;
     b = c[j + 16 >> 2] | 0;
     do if (b) if (b >>> 0 < a >>> 0) za(); else {
      c[o + 16 >> 2] = b;
      c[b + 24 >> 2] = o;
      break;
     } while (0);
     b = c[j + 20 >> 2] | 0;
     if (b) if (b >>> 0 < (c[1538] | 0) >>> 0) za(); else {
      c[o + 20 >> 2] = b;
      c[b + 24 >> 2] = o;
      break;
     }
    } while (0);
    b : do if (i >>> 0 >= 16) {
     c[j + 4 >> 2] = m | 3;
     c[j + (m | 4) >> 2] = i | 1;
     c[j + (i + m) >> 2] = i;
     b = i >>> 3;
     if (i >>> 0 < 256) {
      a = b << 1;
      e = 6176 + (a << 2) | 0;
      d = c[1534] | 0;
      b = 1 << b;
      if (d & b) {
       b = 6176 + (a + 2 << 2) | 0;
       a = c[b >> 2] | 0;
       if (a >>> 0 < (c[1538] | 0) >>> 0) za(); else {
        s = b;
        t = a;
       }
      } else {
       c[1534] = d | b;
       s = 6176 + (a + 2 << 2) | 0;
       t = e;
      }
      c[s >> 2] = h;
      c[t + 12 >> 2] = h;
      c[j + (m + 8) >> 2] = t;
      c[j + (m + 12) >> 2] = e;
      break;
     }
     b = i >>> 8;
     if (b) if (i >>> 0 > 16777215) e = 31; else {
      L = (b + 1048320 | 0) >>> 16 & 8;
      M = b << L;
      K = (M + 520192 | 0) >>> 16 & 4;
      M = M << K;
      e = (M + 245760 | 0) >>> 16 & 2;
      e = 14 - (K | L | e) + (M << e >>> 15) | 0;
      e = i >>> (e + 7 | 0) & 1 | e << 1;
     } else e = 0;
     b = 6440 + (e << 2) | 0;
     c[j + (m + 28) >> 2] = e;
     c[j + (m + 20) >> 2] = 0;
     c[j + (m + 16) >> 2] = 0;
     a = c[1535] | 0;
     d = 1 << e;
     if (!(a & d)) {
      c[1535] = a | d;
      c[b >> 2] = h;
      c[j + (m + 24) >> 2] = b;
      c[j + (m + 12) >> 2] = h;
      c[j + (m + 8) >> 2] = h;
      break;
     }
     b = c[b >> 2] | 0;
     c : do if ((c[b + 4 >> 2] & -8 | 0) != (i | 0)) {
      e = i << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);
      while (1) {
       a = b + 16 + (e >>> 31 << 2) | 0;
       d = c[a >> 2] | 0;
       if (!d) break;
       if ((c[d + 4 >> 2] & -8 | 0) == (i | 0)) {
        y = d;
        break c;
       } else {
        e = e << 1;
        b = d;
       }
      }
      if (a >>> 0 < (c[1538] | 0) >>> 0) za(); else {
       c[a >> 2] = h;
       c[j + (m + 24) >> 2] = b;
       c[j + (m + 12) >> 2] = h;
       c[j + (m + 8) >> 2] = h;
       break b;
      }
     } else y = b; while (0);
     b = y + 8 | 0;
     a = c[b >> 2] | 0;
     M = c[1538] | 0;
     if (a >>> 0 >= M >>> 0 & y >>> 0 >= M >>> 0) {
      c[a + 12 >> 2] = h;
      c[b >> 2] = h;
      c[j + (m + 8) >> 2] = a;
      c[j + (m + 12) >> 2] = y;
      c[j + (m + 24) >> 2] = 0;
      break;
     } else za();
    } else {
     M = i + m | 0;
     c[j + 4 >> 2] = M | 3;
     M = j + (M + 4) | 0;
     c[M >> 2] = c[M >> 2] | 1;
    } while (0);
    M = j + 8 | 0;
    return M | 0;
   } else q = m;
  } else q = m;
 } else q = -1; while (0);
 d = c[1536] | 0;
 if (d >>> 0 >= q >>> 0) {
  b = d - q | 0;
  a = c[1539] | 0;
  if (b >>> 0 > 15) {
   c[1539] = a + q;
   c[1536] = b;
   c[a + (q + 4) >> 2] = b | 1;
   c[a + d >> 2] = b;
   c[a + 4 >> 2] = q | 3;
  } else {
   c[1536] = 0;
   c[1539] = 0;
   c[a + 4 >> 2] = d | 3;
   M = a + (d + 4) | 0;
   c[M >> 2] = c[M >> 2] | 1;
  }
  M = a + 8 | 0;
  return M | 0;
 }
 a = c[1537] | 0;
 if (a >>> 0 > q >>> 0) {
  L = a - q | 0;
  c[1537] = L;
  M = c[1540] | 0;
  c[1540] = M + q;
  c[M + (q + 4) >> 2] = L | 1;
  c[M + 4 >> 2] = q | 3;
  M = M + 8 | 0;
  return M | 0;
 }
 do if (!(c[1652] | 0)) {
  a = Pa(30) | 0;
  if (!(a + -1 & a)) {
   c[1654] = a;
   c[1653] = a;
   c[1655] = -1;
   c[1656] = -1;
   c[1657] = 0;
   c[1645] = 0;
   c[1652] = (eb(0) | 0) & -16 ^ 1431655768;
   break;
  } else za();
 } while (0);
 j = q + 48 | 0;
 i = c[1654] | 0;
 k = q + 47 | 0;
 h = i + k | 0;
 i = 0 - i | 0;
 l = h & i;
 if (l >>> 0 <= q >>> 0) {
  M = 0;
  return M | 0;
 }
 a = c[1644] | 0;
 if ((a | 0) != 0 ? (t = c[1642] | 0, y = t + l | 0, y >>> 0 <= t >>> 0 | y >>> 0 > a >>> 0) : 0) {
  M = 0;
  return M | 0;
 }
 d : do if (!(c[1645] & 4)) {
  a = c[1540] | 0;
  e : do if (a) {
   f = 6584;
   while (1) {
    d = c[f >> 2] | 0;
    if (d >>> 0 <= a >>> 0 ? (r = f + 4 | 0, (d + (c[r >> 2] | 0) | 0) >>> 0 > a >>> 0) : 0) {
     g = f;
     a = r;
     break;
    }
    f = c[f + 8 >> 2] | 0;
    if (!f) {
     v = 174;
     break e;
    }
   }
   d = h - (c[1537] | 0) & i;
   if (d >>> 0 < 2147483647) {
    f = Ka(d | 0) | 0;
    y = (f | 0) == ((c[g >> 2] | 0) + (c[a >> 2] | 0) | 0);
    a = y ? d : 0;
    if (y) {
     if ((f | 0) != (-1 | 0)) {
      w = f;
      p = a;
      v = 194;
      break d;
     }
    } else v = 184;
   } else a = 0;
  } else v = 174; while (0);
  do if ((v | 0) == 174) {
   g = Ka(0) | 0;
   if ((g | 0) != (-1 | 0)) {
    a = g;
    d = c[1653] | 0;
    f = d + -1 | 0;
    if (!(f & a)) d = l; else d = l - a + (f + a & 0 - d) | 0;
    a = c[1642] | 0;
    f = a + d | 0;
    if (d >>> 0 > q >>> 0 & d >>> 0 < 2147483647) {
     y = c[1644] | 0;
     if ((y | 0) != 0 ? f >>> 0 <= a >>> 0 | f >>> 0 > y >>> 0 : 0) {
      a = 0;
      break;
     }
     f = Ka(d | 0) | 0;
     y = (f | 0) == (g | 0);
     a = y ? d : 0;
     if (y) {
      w = g;
      p = a;
      v = 194;
      break d;
     } else v = 184;
    } else a = 0;
   } else a = 0;
  } while (0);
  f : do if ((v | 0) == 184) {
   g = 0 - d | 0;
   do if (j >>> 0 > d >>> 0 & (d >>> 0 < 2147483647 & (f | 0) != (-1 | 0)) ? (u = c[1654] | 0, u = k - d + u & 0 - u, u >>> 0 < 2147483647) : 0) if ((Ka(u | 0) | 0) == (-1 | 0)) {
    Ka(g | 0) | 0;
    break f;
   } else {
    d = u + d | 0;
    break;
   } while (0);
   if ((f | 0) != (-1 | 0)) {
    w = f;
    p = d;
    v = 194;
    break d;
   }
  } while (0);
  c[1645] = c[1645] | 4;
  v = 191;
 } else {
  a = 0;
  v = 191;
 } while (0);
 if ((((v | 0) == 191 ? l >>> 0 < 2147483647 : 0) ? (w = Ka(l | 0) | 0, x = Ka(0) | 0, w >>> 0 < x >>> 0 & ((w | 0) != (-1 | 0) & (x | 0) != (-1 | 0))) : 0) ? (z = x - w | 0, A = z >>> 0 > (q + 40 | 0) >>> 0, A) : 0) {
  p = A ? z : a;
  v = 194;
 }
 if ((v | 0) == 194) {
  a = (c[1642] | 0) + p | 0;
  c[1642] = a;
  if (a >>> 0 > (c[1643] | 0) >>> 0) c[1643] = a;
  h = c[1540] | 0;
  g : do if (h) {
   g = 6584;
   do {
    a = c[g >> 2] | 0;
    d = g + 4 | 0;
    f = c[d >> 2] | 0;
    if ((w | 0) == (a + f | 0)) {
     B = a;
     C = d;
     D = f;
     E = g;
     v = 204;
     break;
    }
    g = c[g + 8 >> 2] | 0;
   } while ((g | 0) != 0);
   if (((v | 0) == 204 ? (c[E + 12 >> 2] & 8 | 0) == 0 : 0) ? h >>> 0 < w >>> 0 & h >>> 0 >= B >>> 0 : 0) {
    c[C >> 2] = D + p;
    M = (c[1537] | 0) + p | 0;
    L = h + 8 | 0;
    L = (L & 7 | 0) == 0 ? 0 : 0 - L & 7;
    K = M - L | 0;
    c[1540] = h + L;
    c[1537] = K;
    c[h + (L + 4) >> 2] = K | 1;
    c[h + (M + 4) >> 2] = 40;
    c[1541] = c[1656];
    break;
   }
   a = c[1538] | 0;
   if (w >>> 0 < a >>> 0) {
    c[1538] = w;
    a = w;
   }
   d = w + p | 0;
   g = 6584;
   while (1) {
    if ((c[g >> 2] | 0) == (d | 0)) {
     f = g;
     d = g;
     v = 212;
     break;
    }
    g = c[g + 8 >> 2] | 0;
    if (!g) {
     d = 6584;
     break;
    }
   }
   if ((v | 0) == 212) if (!(c[d + 12 >> 2] & 8)) {
    c[f >> 2] = w;
    n = d + 4 | 0;
    c[n >> 2] = (c[n >> 2] | 0) + p;
    n = w + 8 | 0;
    n = (n & 7 | 0) == 0 ? 0 : 0 - n & 7;
    k = w + (p + 8) | 0;
    k = (k & 7 | 0) == 0 ? 0 : 0 - k & 7;
    b = w + (k + p) | 0;
    m = n + q | 0;
    o = w + m | 0;
    l = b - (w + n) - q | 0;
    c[w + (n + 4) >> 2] = q | 3;
    h : do if ((b | 0) != (h | 0)) {
     if ((b | 0) == (c[1539] | 0)) {
      M = (c[1536] | 0) + l | 0;
      c[1536] = M;
      c[1539] = o;
      c[w + (m + 4) >> 2] = M | 1;
      c[w + (M + m) >> 2] = M;
      break;
     }
     i = p + 4 | 0;
     d = c[w + (i + k) >> 2] | 0;
     if ((d & 3 | 0) == 1) {
      j = d & -8;
      g = d >>> 3;
      i : do if (d >>> 0 >= 256) {
       h = c[w + ((k | 24) + p) >> 2] | 0;
       e = c[w + (p + 12 + k) >> 2] | 0;
       do if ((e | 0) == (b | 0)) {
        f = k | 16;
        e = w + (i + f) | 0;
        d = c[e >> 2] | 0;
        if (!d) {
         e = w + (f + p) | 0;
         d = c[e >> 2] | 0;
         if (!d) {
          J = 0;
          break;
         }
        }
        while (1) {
         f = d + 20 | 0;
         g = c[f >> 2] | 0;
         if (g) {
          d = g;
          e = f;
          continue;
         }
         f = d + 16 | 0;
         g = c[f >> 2] | 0;
         if (!g) break; else {
          d = g;
          e = f;
         }
        }
        if (e >>> 0 < a >>> 0) za(); else {
         c[e >> 2] = 0;
         J = d;
         break;
        }
       } else {
        f = c[w + ((k | 8) + p) >> 2] | 0;
        if (f >>> 0 < a >>> 0) za();
        a = f + 12 | 0;
        if ((c[a >> 2] | 0) != (b | 0)) za();
        d = e + 8 | 0;
        if ((c[d >> 2] | 0) == (b | 0)) {
         c[a >> 2] = e;
         c[d >> 2] = f;
         J = e;
         break;
        } else za();
       } while (0);
       if (!h) break;
       a = c[w + (p + 28 + k) >> 2] | 0;
       d = 6440 + (a << 2) | 0;
       do if ((b | 0) != (c[d >> 2] | 0)) {
        if (h >>> 0 < (c[1538] | 0) >>> 0) za();
        a = h + 16 | 0;
        if ((c[a >> 2] | 0) == (b | 0)) c[a >> 2] = J; else c[h + 20 >> 2] = J;
        if (!J) break i;
       } else {
        c[d >> 2] = J;
        if (J) break;
        c[1535] = c[1535] & ~(1 << a);
        break i;
       } while (0);
       d = c[1538] | 0;
       if (J >>> 0 < d >>> 0) za();
       c[J + 24 >> 2] = h;
       b = k | 16;
       a = c[w + (b + p) >> 2] | 0;
       do if (a) if (a >>> 0 < d >>> 0) za(); else {
        c[J + 16 >> 2] = a;
        c[a + 24 >> 2] = J;
        break;
       } while (0);
       b = c[w + (i + b) >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[1538] | 0) >>> 0) za(); else {
        c[J + 20 >> 2] = b;
        c[b + 24 >> 2] = J;
        break;
       }
      } else {
       e = c[w + ((k | 8) + p) >> 2] | 0;
       f = c[w + (p + 12 + k) >> 2] | 0;
       d = 6176 + (g << 1 << 2) | 0;
       do if ((e | 0) != (d | 0)) {
        if (e >>> 0 < a >>> 0) za();
        if ((c[e + 12 >> 2] | 0) == (b | 0)) break;
        za();
       } while (0);
       if ((f | 0) == (e | 0)) {
        c[1534] = c[1534] & ~(1 << g);
        break;
       }
       do if ((f | 0) == (d | 0)) F = f + 8 | 0; else {
        if (f >>> 0 < a >>> 0) za();
        a = f + 8 | 0;
        if ((c[a >> 2] | 0) == (b | 0)) {
         F = a;
         break;
        }
        za();
       } while (0);
       c[e + 12 >> 2] = f;
       c[F >> 2] = e;
      } while (0);
      b = w + ((j | k) + p) | 0;
      f = j + l | 0;
     } else f = l;
     b = b + 4 | 0;
     c[b >> 2] = c[b >> 2] & -2;
     c[w + (m + 4) >> 2] = f | 1;
     c[w + (f + m) >> 2] = f;
     b = f >>> 3;
     if (f >>> 0 < 256) {
      a = b << 1;
      e = 6176 + (a << 2) | 0;
      d = c[1534] | 0;
      b = 1 << b;
      do if (!(d & b)) {
       c[1534] = d | b;
       K = 6176 + (a + 2 << 2) | 0;
       L = e;
      } else {
       b = 6176 + (a + 2 << 2) | 0;
       a = c[b >> 2] | 0;
       if (a >>> 0 >= (c[1538] | 0) >>> 0) {
        K = b;
        L = a;
        break;
       }
       za();
      } while (0);
      c[K >> 2] = o;
      c[L + 12 >> 2] = o;
      c[w + (m + 8) >> 2] = L;
      c[w + (m + 12) >> 2] = e;
      break;
     }
     b = f >>> 8;
     do if (!b) e = 0; else {
      if (f >>> 0 > 16777215) {
       e = 31;
       break;
      }
      K = (b + 1048320 | 0) >>> 16 & 8;
      L = b << K;
      J = (L + 520192 | 0) >>> 16 & 4;
      L = L << J;
      e = (L + 245760 | 0) >>> 16 & 2;
      e = 14 - (J | K | e) + (L << e >>> 15) | 0;
      e = f >>> (e + 7 | 0) & 1 | e << 1;
     } while (0);
     b = 6440 + (e << 2) | 0;
     c[w + (m + 28) >> 2] = e;
     c[w + (m + 20) >> 2] = 0;
     c[w + (m + 16) >> 2] = 0;
     a = c[1535] | 0;
     d = 1 << e;
     if (!(a & d)) {
      c[1535] = a | d;
      c[b >> 2] = o;
      c[w + (m + 24) >> 2] = b;
      c[w + (m + 12) >> 2] = o;
      c[w + (m + 8) >> 2] = o;
      break;
     }
     b = c[b >> 2] | 0;
     j : do if ((c[b + 4 >> 2] & -8 | 0) != (f | 0)) {
      e = f << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);
      while (1) {
       a = b + 16 + (e >>> 31 << 2) | 0;
       d = c[a >> 2] | 0;
       if (!d) break;
       if ((c[d + 4 >> 2] & -8 | 0) == (f | 0)) {
        M = d;
        break j;
       } else {
        e = e << 1;
        b = d;
       }
      }
      if (a >>> 0 < (c[1538] | 0) >>> 0) za(); else {
       c[a >> 2] = o;
       c[w + (m + 24) >> 2] = b;
       c[w + (m + 12) >> 2] = o;
       c[w + (m + 8) >> 2] = o;
       break h;
      }
     } else M = b; while (0);
     b = M + 8 | 0;
     a = c[b >> 2] | 0;
     L = c[1538] | 0;
     if (a >>> 0 >= L >>> 0 & M >>> 0 >= L >>> 0) {
      c[a + 12 >> 2] = o;
      c[b >> 2] = o;
      c[w + (m + 8) >> 2] = a;
      c[w + (m + 12) >> 2] = M;
      c[w + (m + 24) >> 2] = 0;
      break;
     } else za();
    } else {
     M = (c[1537] | 0) + l | 0;
     c[1537] = M;
     c[1540] = o;
     c[w + (m + 4) >> 2] = M | 1;
    } while (0);
    M = w + (n | 8) | 0;
    return M | 0;
   } else d = 6584;
   while (1) {
    a = c[d >> 2] | 0;
    if (a >>> 0 <= h >>> 0 ? (b = c[d + 4 >> 2] | 0, e = a + b | 0, e >>> 0 > h >>> 0) : 0) break;
    d = c[d + 8 >> 2] | 0;
   }
   f = a + (b + -39) | 0;
   a = a + (b + -47 + ((f & 7 | 0) == 0 ? 0 : 0 - f & 7)) | 0;
   f = h + 16 | 0;
   a = a >>> 0 < f >>> 0 ? h : a;
   b = a + 8 | 0;
   d = w + 8 | 0;
   d = (d & 7 | 0) == 0 ? 0 : 0 - d & 7;
   M = p + -40 - d | 0;
   c[1540] = w + d;
   c[1537] = M;
   c[w + (d + 4) >> 2] = M | 1;
   c[w + (p + -36) >> 2] = 40;
   c[1541] = c[1656];
   d = a + 4 | 0;
   c[d >> 2] = 27;
   c[b >> 2] = c[1646];
   c[b + 4 >> 2] = c[1647];
   c[b + 8 >> 2] = c[1648];
   c[b + 12 >> 2] = c[1649];
   c[1646] = w;
   c[1647] = p;
   c[1649] = 0;
   c[1648] = b;
   b = a + 28 | 0;
   c[b >> 2] = 7;
   if ((a + 32 | 0) >>> 0 < e >>> 0) do {
    M = b;
    b = b + 4 | 0;
    c[b >> 2] = 7;
   } while ((M + 8 | 0) >>> 0 < e >>> 0);
   if ((a | 0) != (h | 0)) {
    g = a - h | 0;
    c[d >> 2] = c[d >> 2] & -2;
    c[h + 4 >> 2] = g | 1;
    c[a >> 2] = g;
    b = g >>> 3;
    if (g >>> 0 < 256) {
     a = b << 1;
     e = 6176 + (a << 2) | 0;
     d = c[1534] | 0;
     b = 1 << b;
     if (d & b) {
      b = 6176 + (a + 2 << 2) | 0;
      a = c[b >> 2] | 0;
      if (a >>> 0 < (c[1538] | 0) >>> 0) za(); else {
       G = b;
       H = a;
      }
     } else {
      c[1534] = d | b;
      G = 6176 + (a + 2 << 2) | 0;
      H = e;
     }
     c[G >> 2] = h;
     c[H + 12 >> 2] = h;
     c[h + 8 >> 2] = H;
     c[h + 12 >> 2] = e;
     break;
    }
    b = g >>> 8;
    if (b) if (g >>> 0 > 16777215) e = 31; else {
     L = (b + 1048320 | 0) >>> 16 & 8;
     M = b << L;
     K = (M + 520192 | 0) >>> 16 & 4;
     M = M << K;
     e = (M + 245760 | 0) >>> 16 & 2;
     e = 14 - (K | L | e) + (M << e >>> 15) | 0;
     e = g >>> (e + 7 | 0) & 1 | e << 1;
    } else e = 0;
    d = 6440 + (e << 2) | 0;
    c[h + 28 >> 2] = e;
    c[h + 20 >> 2] = 0;
    c[f >> 2] = 0;
    b = c[1535] | 0;
    a = 1 << e;
    if (!(b & a)) {
     c[1535] = b | a;
     c[d >> 2] = h;
     c[h + 24 >> 2] = d;
     c[h + 12 >> 2] = h;
     c[h + 8 >> 2] = h;
     break;
    }
    b = c[d >> 2] | 0;
    k : do if ((c[b + 4 >> 2] & -8 | 0) != (g | 0)) {
     e = g << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);
     while (1) {
      a = b + 16 + (e >>> 31 << 2) | 0;
      d = c[a >> 2] | 0;
      if (!d) break;
      if ((c[d + 4 >> 2] & -8 | 0) == (g | 0)) {
       I = d;
       break k;
      } else {
       e = e << 1;
       b = d;
      }
     }
     if (a >>> 0 < (c[1538] | 0) >>> 0) za(); else {
      c[a >> 2] = h;
      c[h + 24 >> 2] = b;
      c[h + 12 >> 2] = h;
      c[h + 8 >> 2] = h;
      break g;
     }
    } else I = b; while (0);
    b = I + 8 | 0;
    a = c[b >> 2] | 0;
    M = c[1538] | 0;
    if (a >>> 0 >= M >>> 0 & I >>> 0 >= M >>> 0) {
     c[a + 12 >> 2] = h;
     c[b >> 2] = h;
     c[h + 8 >> 2] = a;
     c[h + 12 >> 2] = I;
     c[h + 24 >> 2] = 0;
     break;
    } else za();
   }
  } else {
   M = c[1538] | 0;
   if ((M | 0) == 0 | w >>> 0 < M >>> 0) c[1538] = w;
   c[1646] = w;
   c[1647] = p;
   c[1649] = 0;
   c[1543] = c[1652];
   c[1542] = -1;
   b = 0;
   do {
    M = b << 1;
    L = 6176 + (M << 2) | 0;
    c[6176 + (M + 3 << 2) >> 2] = L;
    c[6176 + (M + 2 << 2) >> 2] = L;
    b = b + 1 | 0;
   } while ((b | 0) != 32);
   M = w + 8 | 0;
   M = (M & 7 | 0) == 0 ? 0 : 0 - M & 7;
   L = p + -40 - M | 0;
   c[1540] = w + M;
   c[1537] = L;
   c[w + (M + 4) >> 2] = L | 1;
   c[w + (p + -36) >> 2] = 40;
   c[1541] = c[1656];
  } while (0);
  b = c[1537] | 0;
  if (b >>> 0 > q >>> 0) {
   L = b - q | 0;
   c[1537] = L;
   M = c[1540] | 0;
   c[1540] = M + q;
   c[M + (q + 4) >> 2] = L | 1;
   c[M + 4 >> 2] = q | 3;
   M = M + 8 | 0;
   return M | 0;
  }
 }
 c[(Mc() | 0) >> 2] = 12;
 M = 0;
 return M | 0;
}

function ce(e, f, g, j, l) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0, q = 0.0, r = 0, s = 0, t = 0, u = 0, v = 0.0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0;
 ha = i;
 i = i + 624 | 0;
 ca = ha + 24 | 0;
 ea = ha + 16 | 0;
 da = ha + 588 | 0;
 Y = ha + 576 | 0;
 ba = ha;
 V = ha + 536 | 0;
 ga = ha + 8 | 0;
 fa = ha + 528 | 0;
 M = (e | 0) != 0;
 N = V + 40 | 0;
 U = N;
 V = V + 39 | 0;
 W = ga + 4 | 0;
 X = Y + 12 | 0;
 Y = Y + 11 | 0;
 Z = da;
 _ = X;
 aa = _ - Z | 0;
 O = -2 - Z | 0;
 P = _ + 2 | 0;
 Q = ca + 288 | 0;
 R = da + 9 | 0;
 S = R;
 T = da + 8 | 0;
 m = 0;
 w = f;
 n = 0;
 f = 0;
 a : while (1) {
  do if ((m | 0) > -1) if ((n | 0) > (2147483647 - m | 0)) {
   c[(Mc() | 0) >> 2] = 75;
   m = -1;
   break;
  } else {
   m = n + m | 0;
   break;
  } while (0);
  n = a[w >> 0] | 0;
  if (!(n << 24 >> 24)) {
   L = 245;
   break;
  } else o = w;
  b : while (1) {
   switch (n << 24 >> 24) {
   case 37:
    {
     n = o;
     L = 9;
     break b;
    }
   case 0:
    {
     n = o;
     break b;
    }
   default:
    {}
   }
   K = o + 1 | 0;
   n = a[K >> 0] | 0;
   o = K;
  }
  c : do if ((L | 0) == 9) while (1) {
   L = 0;
   if ((a[n + 1 >> 0] | 0) != 37) break c;
   o = o + 1 | 0;
   n = n + 2 | 0;
   if ((a[n >> 0] | 0) == 37) L = 9; else break;
  } while (0);
  y = o - w | 0;
  if (M ? (c[e >> 2] & 32 | 0) == 0 : 0) Fd(w, y, e) | 0;
  if ((o | 0) != (w | 0)) {
   w = n;
   n = y;
   continue;
  }
  r = n + 1 | 0;
  o = a[r >> 0] | 0;
  p = (o << 24 >> 24) + -48 | 0;
  if (p >>> 0 < 10) {
   K = (a[n + 2 >> 0] | 0) == 36;
   r = K ? n + 3 | 0 : r;
   o = a[r >> 0] | 0;
   u = K ? p : -1;
   f = K ? 1 : f;
  } else u = -1;
  n = o << 24 >> 24;
  d : do if ((n & -32 | 0) == 32) {
   p = 0;
   while (1) {
    if (!(1 << n + -32 & 75913)) {
     s = p;
     n = r;
     break d;
    }
    p = 1 << (o << 24 >> 24) + -32 | p;
    r = r + 1 | 0;
    o = a[r >> 0] | 0;
    n = o << 24 >> 24;
    if ((n & -32 | 0) != 32) {
     s = p;
     n = r;
     break;
    }
   }
  } else {
   s = 0;
   n = r;
  } while (0);
  do if (o << 24 >> 24 == 42) {
   p = n + 1 | 0;
   o = (a[p >> 0] | 0) + -48 | 0;
   if (o >>> 0 < 10 ? (a[n + 2 >> 0] | 0) == 36 : 0) {
    c[l + (o << 2) >> 2] = 10;
    f = 1;
    n = n + 3 | 0;
    o = c[j + ((a[p >> 0] | 0) + -48 << 3) >> 2] | 0;
   } else {
    if (f) {
     m = -1;
     break a;
    }
    if (!M) {
     x = s;
     n = p;
     f = 0;
     K = 0;
     break;
    }
    f = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    o = c[f >> 2] | 0;
    c[g >> 2] = f + 4;
    f = 0;
    n = p;
   }
   if ((o | 0) < 0) {
    x = s | 8192;
    K = 0 - o | 0;
   } else {
    x = s;
    K = o;
   }
  } else {
   p = (o << 24 >> 24) + -48 | 0;
   if (p >>> 0 < 10) {
    o = 0;
    do {
     o = (o * 10 | 0) + p | 0;
     n = n + 1 | 0;
     p = (a[n >> 0] | 0) + -48 | 0;
    } while (p >>> 0 < 10);
    if ((o | 0) < 0) {
     m = -1;
     break a;
    } else {
     x = s;
     K = o;
    }
   } else {
    x = s;
    K = 0;
   }
  } while (0);
  e : do if ((a[n >> 0] | 0) == 46) {
   p = n + 1 | 0;
   o = a[p >> 0] | 0;
   if (o << 24 >> 24 != 42) {
    r = (o << 24 >> 24) + -48 | 0;
    if (r >>> 0 < 10) {
     n = p;
     o = 0;
    } else {
     n = p;
     r = 0;
     break;
    }
    while (1) {
     o = (o * 10 | 0) + r | 0;
     n = n + 1 | 0;
     r = (a[n >> 0] | 0) + -48 | 0;
     if (r >>> 0 >= 10) {
      r = o;
      break e;
     }
    }
   }
   p = n + 2 | 0;
   o = (a[p >> 0] | 0) + -48 | 0;
   if (o >>> 0 < 10 ? (a[n + 3 >> 0] | 0) == 36 : 0) {
    c[l + (o << 2) >> 2] = 10;
    n = n + 4 | 0;
    r = c[j + ((a[p >> 0] | 0) + -48 << 3) >> 2] | 0;
    break;
   }
   if (f) {
    m = -1;
    break a;
   }
   if (M) {
    n = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    r = c[n >> 2] | 0;
    c[g >> 2] = n + 4;
    n = p;
   } else {
    n = p;
    r = 0;
   }
  } else r = -1; while (0);
  t = 0;
  while (1) {
   o = (a[n >> 0] | 0) + -65 | 0;
   if (o >>> 0 > 57) {
    m = -1;
    break a;
   }
   p = n + 1 | 0;
   o = a[18781 + (t * 58 | 0) + o >> 0] | 0;
   s = o & 255;
   if ((s + -1 | 0) >>> 0 < 8) {
    n = p;
    t = s;
   } else {
    J = p;
    break;
   }
  }
  if (!(o << 24 >> 24)) {
   m = -1;
   break;
  }
  p = (u | 0) > -1;
  do if (o << 24 >> 24 == 19) if (p) {
   m = -1;
   break a;
  } else L = 52; else {
   if (p) {
    c[l + (u << 2) >> 2] = s;
    H = j + (u << 3) | 0;
    I = c[H + 4 >> 2] | 0;
    L = ba;
    c[L >> 2] = c[H >> 2];
    c[L + 4 >> 2] = I;
    L = 52;
    break;
   }
   if (!M) {
    m = 0;
    break a;
   }
   he(ba, s, g);
  } while (0);
  if ((L | 0) == 52 ? (L = 0, !M) : 0) {
   w = J;
   n = y;
   continue;
  }
  u = a[n >> 0] | 0;
  u = (t | 0) != 0 & (u & 15 | 0) == 3 ? u & -33 : u;
  p = x & -65537;
  I = (x & 8192 | 0) == 0 ? x : p;
  f : do switch (u | 0) {
  case 110:
   switch (t | 0) {
   case 0:
    {
     c[c[ba >> 2] >> 2] = m;
     w = J;
     n = y;
     continue a;
    }
   case 1:
    {
     c[c[ba >> 2] >> 2] = m;
     w = J;
     n = y;
     continue a;
    }
   case 2:
    {
     w = c[ba >> 2] | 0;
     c[w >> 2] = m;
     c[w + 4 >> 2] = ((m | 0) < 0) << 31 >> 31;
     w = J;
     n = y;
     continue a;
    }
   case 3:
    {
     b[c[ba >> 2] >> 1] = m;
     w = J;
     n = y;
     continue a;
    }
   case 4:
    {
     a[c[ba >> 2] >> 0] = m;
     w = J;
     n = y;
     continue a;
    }
   case 6:
    {
     c[c[ba >> 2] >> 2] = m;
     w = J;
     n = y;
     continue a;
    }
   case 7:
    {
     w = c[ba >> 2] | 0;
     c[w >> 2] = m;
     c[w + 4 >> 2] = ((m | 0) < 0) << 31 >> 31;
     w = J;
     n = y;
     continue a;
    }
   default:
    {
     w = J;
     n = y;
     continue a;
    }
   }
  case 112:
   {
    t = I | 8;
    r = r >>> 0 > 8 ? r : 8;
    u = 120;
    L = 64;
    break;
   }
  case 88:
  case 120:
   {
    t = I;
    L = 64;
    break;
   }
  case 111:
   {
    p = ba;
    o = c[p >> 2] | 0;
    p = c[p + 4 >> 2] | 0;
    if ((o | 0) == 0 & (p | 0) == 0) n = N; else {
     n = N;
     do {
      n = n + -1 | 0;
      a[n >> 0] = o & 7 | 48;
      o = jo(o | 0, p | 0, 3) | 0;
      p = D;
     } while (!((o | 0) == 0 & (p | 0) == 0));
    }
    if (!(I & 8)) {
     o = I;
     t = 0;
     s = 19261;
     L = 77;
    } else {
     t = U - n + 1 | 0;
     o = I;
     r = (r | 0) < (t | 0) ? t : r;
     t = 0;
     s = 19261;
     L = 77;
    }
    break;
   }
  case 105:
  case 100:
   {
    o = ba;
    n = c[o >> 2] | 0;
    o = c[o + 4 >> 2] | 0;
    if ((o | 0) < 0) {
     n = go(0, 0, n | 0, o | 0) | 0;
     o = D;
     p = ba;
     c[p >> 2] = n;
     c[p + 4 >> 2] = o;
     p = 1;
     s = 19261;
     L = 76;
     break f;
    }
    if (!(I & 2048)) {
     s = I & 1;
     p = s;
     s = (s | 0) == 0 ? 19261 : 19263;
     L = 76;
    } else {
     p = 1;
     s = 19262;
     L = 76;
    }
    break;
   }
  case 117:
   {
    o = ba;
    n = c[o >> 2] | 0;
    o = c[o + 4 >> 2] | 0;
    p = 0;
    s = 19261;
    L = 76;
    break;
   }
  case 99:
   {
    a[V >> 0] = c[ba >> 2];
    w = V;
    o = 1;
    t = 0;
    u = 19261;
    n = N;
    break;
   }
  case 109:
   {
    n = Nc(c[(Mc() | 0) >> 2] | 0) | 0;
    L = 82;
    break;
   }
  case 115:
   {
    n = c[ba >> 2] | 0;
    n = (n | 0) != 0 ? n : 19271;
    L = 82;
    break;
   }
  case 67:
   {
    c[ga >> 2] = c[ba >> 2];
    c[W >> 2] = 0;
    c[ba >> 2] = ga;
    r = -1;
    L = 86;
    break;
   }
  case 83:
   {
    if (!r) {
     je(e, 32, K, 0, I);
     n = 0;
     L = 98;
    } else L = 86;
    break;
   }
  case 65:
  case 71:
  case 70:
  case 69:
  case 97:
  case 103:
  case 102:
  case 101:
   {
    q = +h[ba >> 3];
    c[ea >> 2] = 0;
    h[k >> 3] = q;
    if ((c[k + 4 >> 2] | 0) >= 0) if (!(I & 2048)) {
     H = I & 1;
     G = H;
     H = (H | 0) == 0 ? 19279 : 19284;
    } else {
     G = 1;
     H = 19281;
    } else {
     q = -q;
     G = 1;
     H = 19278;
    }
    h[k >> 3] = q;
    F = c[k + 4 >> 2] & 2146435072;
    do if (F >>> 0 < 2146435072 | (F | 0) == 2146435072 & 0 < 0) {
     v = +ed(q, ea) * 2.0;
     o = v != 0.0;
     if (o) c[ea >> 2] = (c[ea >> 2] | 0) + -1;
     C = u | 32;
     if ((C | 0) == 97) {
      w = u & 32;
      y = (w | 0) == 0 ? H : H + 9 | 0;
      x = G | 2;
      n = 12 - r | 0;
      do if (!(r >>> 0 > 11 | (n | 0) == 0)) {
       q = 8.0;
       do {
        n = n + -1 | 0;
        q = q * 16.0;
       } while ((n | 0) != 0);
       if ((a[y >> 0] | 0) == 45) {
        q = -(q + (-v - q));
        break;
       } else {
        q = v + q - q;
        break;
       }
      } else q = v; while (0);
      o = c[ea >> 2] | 0;
      n = (o | 0) < 0 ? 0 - o | 0 : o;
      n = ie(n, ((n | 0) < 0) << 31 >> 31, X) | 0;
      if ((n | 0) == (X | 0)) {
       a[Y >> 0] = 48;
       n = Y;
      }
      a[n + -1 >> 0] = (o >> 31 & 2) + 43;
      t = n + -2 | 0;
      a[t >> 0] = u + 15;
      s = (r | 0) < 1;
      p = (I & 8 | 0) == 0;
      o = da;
      while (1) {
       H = ~~q;
       n = o + 1 | 0;
       a[o >> 0] = d[19245 + H >> 0] | w;
       q = (q - +(H | 0)) * 16.0;
       do if ((n - Z | 0) == 1) {
        if (p & (s & q == 0.0)) break;
        a[n >> 0] = 46;
        n = o + 2 | 0;
       } while (0);
       if (!(q != 0.0)) break; else o = n;
      }
      r = (r | 0) != 0 & (O + n | 0) < (r | 0) ? P + r - t | 0 : aa - t + n | 0;
      p = r + x | 0;
      je(e, 32, K, p, I);
      if (!(c[e >> 2] & 32)) Fd(y, x, e) | 0;
      je(e, 48, K, p, I ^ 65536);
      n = n - Z | 0;
      if (!(c[e >> 2] & 32)) Fd(da, n, e) | 0;
      o = _ - t | 0;
      je(e, 48, r - (n + o) | 0, 0, 0);
      if (!(c[e >> 2] & 32)) Fd(t, o, e) | 0;
      je(e, 32, K, p, I ^ 8192);
      n = (p | 0) < (K | 0) ? K : p;
      break;
     }
     n = (r | 0) < 0 ? 6 : r;
     if (o) {
      o = (c[ea >> 2] | 0) + -28 | 0;
      c[ea >> 2] = o;
      q = v * 268435456.0;
     } else {
      q = v;
      o = c[ea >> 2] | 0;
     }
     F = (o | 0) < 0 ? ca : Q;
     E = F;
     o = F;
     do {
      B = ~~q >>> 0;
      c[o >> 2] = B;
      o = o + 4 | 0;
      q = (q - +(B >>> 0)) * 1.0e9;
     } while (q != 0.0);
     p = o;
     o = c[ea >> 2] | 0;
     if ((o | 0) > 0) {
      s = F;
      while (1) {
       t = (o | 0) > 29 ? 29 : o;
       r = p + -4 | 0;
       do if (r >>> 0 < s >>> 0) r = s; else {
        o = 0;
        do {
         B = lo(c[r >> 2] | 0, 0, t | 0) | 0;
         B = io(B | 0, D | 0, o | 0, 0) | 0;
         o = D;
         A = uo(B | 0, o | 0, 1e9, 0) | 0;
         c[r >> 2] = A;
         o = to(B | 0, o | 0, 1e9, 0) | 0;
         r = r + -4 | 0;
        } while (r >>> 0 >= s >>> 0);
        if (!o) {
         r = s;
         break;
        }
        r = s + -4 | 0;
        c[r >> 2] = o;
       } while (0);
       while (1) {
        if (p >>> 0 <= r >>> 0) break;
        o = p + -4 | 0;
        if (!(c[o >> 2] | 0)) p = o; else break;
       }
       o = (c[ea >> 2] | 0) - t | 0;
       c[ea >> 2] = o;
       if ((o | 0) > 0) s = r; else break;
      }
     } else r = F;
     if ((o | 0) < 0) {
      y = ((n + 25 | 0) / 9 | 0) + 1 | 0;
      z = (C | 0) == 102;
      w = r;
      while (1) {
       x = 0 - o | 0;
       x = (x | 0) > 9 ? 9 : x;
       do if (w >>> 0 < p >>> 0) {
        o = (1 << x) + -1 | 0;
        s = 1e9 >>> x;
        r = 0;
        t = w;
        do {
         B = c[t >> 2] | 0;
         c[t >> 2] = (B >>> x) + r;
         r = $(B & o, s) | 0;
         t = t + 4 | 0;
        } while (t >>> 0 < p >>> 0);
        o = (c[w >> 2] | 0) == 0 ? w + 4 | 0 : w;
        if (!r) {
         r = o;
         break;
        }
        c[p >> 2] = r;
        r = o;
        p = p + 4 | 0;
       } else r = (c[w >> 2] | 0) == 0 ? w + 4 | 0 : w; while (0);
       o = z ? F : r;
       p = (p - o >> 2 | 0) > (y | 0) ? o + (y << 2) | 0 : p;
       o = (c[ea >> 2] | 0) + x | 0;
       c[ea >> 2] = o;
       if ((o | 0) >= 0) {
        w = r;
        break;
       } else w = r;
      }
     } else w = r;
     do if (w >>> 0 < p >>> 0) {
      o = (E - w >> 2) * 9 | 0;
      s = c[w >> 2] | 0;
      if (s >>> 0 < 10) break; else r = 10;
      do {
       r = r * 10 | 0;
       o = o + 1 | 0;
      } while (s >>> 0 >= r >>> 0);
     } else o = 0; while (0);
     A = (C | 0) == 103;
     B = (n | 0) != 0;
     r = n - ((C | 0) != 102 ? o : 0) + ((B & A) << 31 >> 31) | 0;
     if ((r | 0) < (((p - E >> 2) * 9 | 0) + -9 | 0)) {
      t = r + 9216 | 0;
      z = (t | 0) / 9 | 0;
      r = F + (z + -1023 << 2) | 0;
      t = ((t | 0) % 9 | 0) + 1 | 0;
      if ((t | 0) < 9) {
       s = 10;
       do {
        s = s * 10 | 0;
        t = t + 1 | 0;
       } while ((t | 0) != 9);
      } else s = 10;
      x = c[r >> 2] | 0;
      y = (x >>> 0) % (s >>> 0) | 0;
      if ((y | 0) == 0 ? (F + (z + -1022 << 2) | 0) == (p | 0) : 0) s = w; else L = 163;
      do if ((L | 0) == 163) {
       L = 0;
       v = (((x >>> 0) / (s >>> 0) | 0) & 1 | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;
       t = (s | 0) / 2 | 0;
       do if (y >>> 0 < t >>> 0) q = .5; else {
        if ((y | 0) == (t | 0) ? (F + (z + -1022 << 2) | 0) == (p | 0) : 0) {
         q = 1.0;
         break;
        }
        q = 1.5;
       } while (0);
       do if (G) {
        if ((a[H >> 0] | 0) != 45) break;
        v = -v;
        q = -q;
       } while (0);
       t = x - y | 0;
       c[r >> 2] = t;
       if (!(v + q != v)) {
        s = w;
        break;
       }
       C = t + s | 0;
       c[r >> 2] = C;
       if (C >>> 0 > 999999999) {
        o = w;
        while (1) {
         s = r + -4 | 0;
         c[r >> 2] = 0;
         if (s >>> 0 < o >>> 0) {
          o = o + -4 | 0;
          c[o >> 2] = 0;
         }
         C = (c[s >> 2] | 0) + 1 | 0;
         c[s >> 2] = C;
         if (C >>> 0 > 999999999) r = s; else {
          w = o;
          r = s;
          break;
         }
        }
       }
       o = (E - w >> 2) * 9 | 0;
       t = c[w >> 2] | 0;
       if (t >>> 0 < 10) {
        s = w;
        break;
       } else s = 10;
       do {
        s = s * 10 | 0;
        o = o + 1 | 0;
       } while (t >>> 0 >= s >>> 0);
       s = w;
      } while (0);
      C = r + 4 | 0;
      w = s;
      p = p >>> 0 > C >>> 0 ? C : p;
     }
     y = 0 - o | 0;
     while (1) {
      if (p >>> 0 <= w >>> 0) {
       z = 0;
       C = p;
       break;
      }
      r = p + -4 | 0;
      if (!(c[r >> 2] | 0)) p = r; else {
       z = 1;
       C = p;
       break;
      }
     }
     do if (A) {
      n = (B & 1 ^ 1) + n | 0;
      if ((n | 0) > (o | 0) & (o | 0) > -5) {
       u = u + -1 | 0;
       n = n + -1 - o | 0;
      } else {
       u = u + -2 | 0;
       n = n + -1 | 0;
      }
      p = I & 8;
      if (p) break;
      do if (z) {
       p = c[C + -4 >> 2] | 0;
       if (!p) {
        r = 9;
        break;
       }
       if (!((p >>> 0) % 10 | 0)) {
        s = 10;
        r = 0;
       } else {
        r = 0;
        break;
       }
       do {
        s = s * 10 | 0;
        r = r + 1 | 0;
       } while (((p >>> 0) % (s >>> 0) | 0 | 0) == 0);
      } else r = 9; while (0);
      p = ((C - E >> 2) * 9 | 0) + -9 | 0;
      if ((u | 32 | 0) == 102) {
       p = p - r | 0;
       p = (p | 0) < 0 ? 0 : p;
       n = (n | 0) < (p | 0) ? n : p;
       p = 0;
       break;
      } else {
       p = p + o - r | 0;
       p = (p | 0) < 0 ? 0 : p;
       n = (n | 0) < (p | 0) ? n : p;
       p = 0;
       break;
      }
     } else p = I & 8; while (0);
     x = n | p;
     s = (x | 0) != 0 & 1;
     t = (u | 32 | 0) == 102;
     if (t) {
      o = (o | 0) > 0 ? o : 0;
      u = 0;
     } else {
      r = (o | 0) < 0 ? y : o;
      r = ie(r, ((r | 0) < 0) << 31 >> 31, X) | 0;
      if ((_ - r | 0) < 2) do {
       r = r + -1 | 0;
       a[r >> 0] = 48;
      } while ((_ - r | 0) < 2);
      a[r + -1 >> 0] = (o >> 31 & 2) + 43;
      E = r + -2 | 0;
      a[E >> 0] = u;
      o = _ - E | 0;
      u = E;
     }
     y = G + 1 + n + s + o | 0;
     je(e, 32, K, y, I);
     if (!(c[e >> 2] & 32)) Fd(H, G, e) | 0;
     je(e, 48, K, y, I ^ 65536);
     do if (t) {
      r = w >>> 0 > F >>> 0 ? F : w;
      o = r;
      do {
       p = ie(c[o >> 2] | 0, 0, R) | 0;
       do if ((o | 0) == (r | 0)) {
        if ((p | 0) != (R | 0)) break;
        a[T >> 0] = 48;
        p = T;
       } else {
        if (p >>> 0 <= da >>> 0) break;
        do {
         p = p + -1 | 0;
         a[p >> 0] = 48;
        } while (p >>> 0 > da >>> 0);
       } while (0);
       if (!(c[e >> 2] & 32)) Fd(p, S - p | 0, e) | 0;
       o = o + 4 | 0;
      } while (o >>> 0 <= F >>> 0);
      do if (x) {
       if (c[e >> 2] & 32) break;
       Fd(19313, 1, e) | 0;
      } while (0);
      if ((n | 0) > 0 & o >>> 0 < C >>> 0) {
       p = o;
       while (1) {
        o = ie(c[p >> 2] | 0, 0, R) | 0;
        if (o >>> 0 > da >>> 0) do {
         o = o + -1 | 0;
         a[o >> 0] = 48;
        } while (o >>> 0 > da >>> 0);
        if (!(c[e >> 2] & 32)) Fd(o, (n | 0) > 9 ? 9 : n, e) | 0;
        p = p + 4 | 0;
        o = n + -9 | 0;
        if (!((n | 0) > 9 & p >>> 0 < C >>> 0)) {
         n = o;
         break;
        } else n = o;
       }
      }
      je(e, 48, n + 9 | 0, 9, 0);
     } else {
      t = z ? C : w + 4 | 0;
      if ((n | 0) > -1) {
       s = (p | 0) == 0;
       r = w;
       do {
        o = ie(c[r >> 2] | 0, 0, R) | 0;
        if ((o | 0) == (R | 0)) {
         a[T >> 0] = 48;
         o = T;
        }
        do if ((r | 0) == (w | 0)) {
         p = o + 1 | 0;
         if (!(c[e >> 2] & 32)) Fd(o, 1, e) | 0;
         if (s & (n | 0) < 1) {
          o = p;
          break;
         }
         if (c[e >> 2] & 32) {
          o = p;
          break;
         }
         Fd(19313, 1, e) | 0;
         o = p;
        } else {
         if (o >>> 0 <= da >>> 0) break;
         do {
          o = o + -1 | 0;
          a[o >> 0] = 48;
         } while (o >>> 0 > da >>> 0);
        } while (0);
        p = S - o | 0;
        if (!(c[e >> 2] & 32)) Fd(o, (n | 0) > (p | 0) ? p : n, e) | 0;
        n = n - p | 0;
        r = r + 4 | 0;
       } while (r >>> 0 < t >>> 0 & (n | 0) > -1);
      }
      je(e, 48, n + 18 | 0, 18, 0);
      if (c[e >> 2] & 32) break;
      Fd(u, _ - u | 0, e) | 0;
     } while (0);
     je(e, 32, K, y, I ^ 8192);
     n = (y | 0) < (K | 0) ? K : y;
    } else {
     t = (u & 32 | 0) != 0;
     s = q != q | 0.0 != 0.0;
     o = s ? 0 : G;
     r = o + 3 | 0;
     je(e, 32, K, r, p);
     n = c[e >> 2] | 0;
     if (!(n & 32)) {
      Fd(H, o, e) | 0;
      n = c[e >> 2] | 0;
     }
     if (!(n & 32)) Fd(s ? (t ? 19305 : 19309) : t ? 19297 : 19301, 3, e) | 0;
     je(e, 32, K, r, I ^ 8192);
     n = (r | 0) < (K | 0) ? K : r;
    } while (0);
    w = J;
    continue a;
   }
  default:
   {
    p = I;
    o = r;
    t = 0;
    u = 19261;
    n = N;
   }
  } while (0);
  g : do if ((L | 0) == 64) {
   p = ba;
   o = c[p >> 2] | 0;
   p = c[p + 4 >> 2] | 0;
   s = u & 32;
   if (!((o | 0) == 0 & (p | 0) == 0)) {
    n = N;
    do {
     n = n + -1 | 0;
     a[n >> 0] = d[19245 + (o & 15) >> 0] | s;
     o = jo(o | 0, p | 0, 4) | 0;
     p = D;
    } while (!((o | 0) == 0 & (p | 0) == 0));
    L = ba;
    if ((t & 8 | 0) == 0 | (c[L >> 2] | 0) == 0 & (c[L + 4 >> 2] | 0) == 0) {
     o = t;
     t = 0;
     s = 19261;
     L = 77;
    } else {
     o = t;
     t = 2;
     s = 19261 + (u >> 4) | 0;
     L = 77;
    }
   } else {
    n = N;
    o = t;
    t = 0;
    s = 19261;
    L = 77;
   }
  } else if ((L | 0) == 76) {
   n = ie(n, o, N) | 0;
   o = I;
   t = p;
   L = 77;
  } else if ((L | 0) == 82) {
   L = 0;
   I = Td(n, 0, r) | 0;
   H = (I | 0) == 0;
   w = n;
   o = H ? r : I - n | 0;
   t = 0;
   u = 19261;
   n = H ? n + r | 0 : I;
  } else if ((L | 0) == 86) {
   L = 0;
   o = 0;
   n = 0;
   s = c[ba >> 2] | 0;
   while (1) {
    p = c[s >> 2] | 0;
    if (!p) break;
    n = qd(fa, p) | 0;
    if ((n | 0) < 0 | n >>> 0 > (r - o | 0) >>> 0) break;
    o = n + o | 0;
    if (r >>> 0 > o >>> 0) s = s + 4 | 0; else break;
   }
   if ((n | 0) < 0) {
    m = -1;
    break a;
   }
   je(e, 32, K, o, I);
   if (!o) {
    n = 0;
    L = 98;
   } else {
    p = 0;
    r = c[ba >> 2] | 0;
    while (1) {
     n = c[r >> 2] | 0;
     if (!n) {
      n = o;
      L = 98;
      break g;
     }
     n = qd(fa, n) | 0;
     p = n + p | 0;
     if ((p | 0) > (o | 0)) {
      n = o;
      L = 98;
      break g;
     }
     if (!(c[e >> 2] & 32)) Fd(fa, n, e) | 0;
     if (p >>> 0 >= o >>> 0) {
      n = o;
      L = 98;
      break;
     } else r = r + 4 | 0;
    }
   }
  } while (0);
  if ((L | 0) == 98) {
   L = 0;
   je(e, 32, K, n, I ^ 8192);
   w = J;
   n = (K | 0) > (n | 0) ? K : n;
   continue;
  }
  if ((L | 0) == 77) {
   L = 0;
   p = (r | 0) > -1 ? o & -65537 : o;
   o = ba;
   o = (c[o >> 2] | 0) != 0 | (c[o + 4 >> 2] | 0) != 0;
   if ((r | 0) != 0 | o) {
    o = (o & 1 ^ 1) + (U - n) | 0;
    w = n;
    o = (r | 0) > (o | 0) ? r : o;
    u = s;
    n = N;
   } else {
    w = N;
    o = 0;
    u = s;
    n = N;
   }
  }
  s = n - w | 0;
  o = (o | 0) < (s | 0) ? s : o;
  r = t + o | 0;
  n = (K | 0) < (r | 0) ? r : K;
  je(e, 32, n, r, p);
  if (!(c[e >> 2] & 32)) Fd(u, t, e) | 0;
  je(e, 48, n, r, p ^ 65536);
  je(e, 48, o, s, 0);
  if (!(c[e >> 2] & 32)) Fd(w, s, e) | 0;
  je(e, 32, n, r, p ^ 8192);
  w = J;
 }
 h : do if ((L | 0) == 245) if (!e) if (f) {
  m = 1;
  while (1) {
   f = c[l + (m << 2) >> 2] | 0;
   if (!f) break;
   he(j + (m << 3) | 0, f, g);
   m = m + 1 | 0;
   if ((m | 0) >= 10) {
    m = 1;
    break h;
   }
  }
  if ((m | 0) < 10) while (1) {
   if (c[l + (m << 2) >> 2] | 0) {
    m = -1;
    break h;
   }
   m = m + 1 | 0;
   if ((m | 0) >= 10) {
    m = 1;
    break;
   }
  } else m = 1;
 } else m = 0; while (0);
 i = ha;
 return m | 0;
}

function Oc(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0.0, h = 0, j = 0.0, k = 0, l = 0, m = 0.0, n = 0, o = 0, p = 0, q = 0.0, r = 0.0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0.0;
 L = i;
 i = i + 512 | 0;
 H = L;
 switch (e | 0) {
 case 0:
  {
   K = 24;
   J = -149;
   A = 4;
   break;
  }
 case 1:
  {
   K = 53;
   J = -1074;
   A = 4;
   break;
  }
 case 2:
  {
   K = 53;
   J = -1074;
   A = 4;
   break;
  }
 default:
  g = 0.0;
 }
 a : do if ((A | 0) == 4) {
  E = b + 4 | 0;
  C = b + 100 | 0;
  do {
   e = c[E >> 2] | 0;
   if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
    c[E >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = Rc(b) | 0;
  } while ((Kc(e) | 0) != 0);
  b : do switch (e | 0) {
  case 43:
  case 45:
   {
    h = 1 - (((e | 0) == 45 & 1) << 1) | 0;
    e = c[E >> 2] | 0;
    if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
     c[E >> 2] = e + 1;
     e = d[e >> 0] | 0;
     I = h;
     break b;
    } else {
     e = Rc(b) | 0;
     I = h;
     break b;
    }
   }
  default:
   I = 1;
  } while (0);
  h = e;
  e = 0;
  do {
   if ((h | 32 | 0) != (a[16428 + e >> 0] | 0)) break;
   do if (e >>> 0 < 7) {
    h = c[E >> 2] | 0;
    if (h >>> 0 < (c[C >> 2] | 0) >>> 0) {
     c[E >> 2] = h + 1;
     h = d[h >> 0] | 0;
     break;
    } else {
     h = Rc(b) | 0;
     break;
    }
   } while (0);
   e = e + 1 | 0;
  } while (e >>> 0 < 8);
  c : do switch (e | 0) {
  case 8:
   break;
  case 3:
   {
    A = 23;
    break;
   }
  default:
   {
    k = (f | 0) != 0;
    if (k & e >>> 0 > 3) if ((e | 0) == 8) break c; else {
     A = 23;
     break c;
    }
    d : do if (!e) {
     e = 0;
     do {
      if ((h | 32 | 0) != (a[19305 + e >> 0] | 0)) break d;
      do if (e >>> 0 < 2) {
       h = c[E >> 2] | 0;
       if (h >>> 0 < (c[C >> 2] | 0) >>> 0) {
        c[E >> 2] = h + 1;
        h = d[h >> 0] | 0;
        break;
       } else {
        h = Rc(b) | 0;
        break;
       }
      } while (0);
      e = e + 1 | 0;
     } while (e >>> 0 < 3);
    } while (0);
    switch (e | 0) {
    case 3:
     {
      e = c[E >> 2] | 0;
      if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
       c[E >> 2] = e + 1;
       e = d[e >> 0] | 0;
      } else e = Rc(b) | 0;
      if ((e | 0) == 40) e = 1; else {
       if (!(c[C >> 2] | 0)) {
        g = s;
        break a;
       }
       c[E >> 2] = (c[E >> 2] | 0) + -1;
       g = s;
       break a;
      }
      while (1) {
       h = c[E >> 2] | 0;
       if (h >>> 0 < (c[C >> 2] | 0) >>> 0) {
        c[E >> 2] = h + 1;
        h = d[h >> 0] | 0;
       } else h = Rc(b) | 0;
       if (!((h + -48 | 0) >>> 0 < 10 | (h + -65 | 0) >>> 0 < 26) ? !((h | 0) == 95 | (h + -97 | 0) >>> 0 < 26) : 0) break;
       e = e + 1 | 0;
      }
      if ((h | 0) == 41) {
       g = s;
       break a;
      }
      h = (c[C >> 2] | 0) == 0;
      if (!h) c[E >> 2] = (c[E >> 2] | 0) + -1;
      if (!k) {
       c[(Mc() | 0) >> 2] = 22;
       Qc(b, 0);
       g = 0.0;
       break a;
      }
      if (!e) {
       g = s;
       break a;
      }
      while (1) {
       e = e + -1 | 0;
       if (!h) c[E >> 2] = (c[E >> 2] | 0) + -1;
       if (!e) {
        g = s;
        break a;
       }
      }
     }
    case 0:
     {
      do if ((h | 0) == 48) {
       e = c[E >> 2] | 0;
       if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
        c[E >> 2] = e + 1;
        e = d[e >> 0] | 0;
       } else e = Rc(b) | 0;
       if ((e | 32 | 0) != 120) {
        if (!(c[C >> 2] | 0)) {
         e = 48;
         break;
        }
        c[E >> 2] = (c[E >> 2] | 0) + -1;
        e = 48;
        break;
       }
       e = c[E >> 2] | 0;
       if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
        c[E >> 2] = e + 1;
        e = d[e >> 0] | 0;
        k = 0;
       } else {
        e = Rc(b) | 0;
        k = 0;
       }
       e : while (1) {
        switch (e | 0) {
        case 46:
         {
          A = 74;
          break e;
         }
        case 48:
         break;
        default:
         {
          y = 0;
          l = 0;
          x = 0;
          h = 0;
          n = k;
          o = 0;
          w = 0;
          m = 1.0;
          k = 0;
          g = 0.0;
          break e;
         }
        }
        e = c[E >> 2] | 0;
        if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
         c[E >> 2] = e + 1;
         e = d[e >> 0] | 0;
         k = 1;
         continue;
        } else {
         e = Rc(b) | 0;
         k = 1;
         continue;
        }
       }
       if ((A | 0) == 74) {
        e = c[E >> 2] | 0;
        if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
         c[E >> 2] = e + 1;
         e = d[e >> 0] | 0;
        } else e = Rc(b) | 0;
        if ((e | 0) == 48) {
         k = 0;
         h = 0;
         do {
          e = c[E >> 2] | 0;
          if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
           c[E >> 2] = e + 1;
           e = d[e >> 0] | 0;
          } else e = Rc(b) | 0;
          k = io(k | 0, h | 0, -1, -1) | 0;
          h = D;
         } while ((e | 0) == 48);
         y = 0;
         l = 0;
         x = k;
         n = 1;
         o = 1;
         w = 0;
         m = 1.0;
         k = 0;
         g = 0.0;
        } else {
         y = 0;
         l = 0;
         x = 0;
         h = 0;
         n = k;
         o = 1;
         w = 0;
         m = 1.0;
         k = 0;
         g = 0.0;
        }
       }
       while (1) {
        u = e + -48 | 0;
        p = e | 32;
        if (u >>> 0 >= 10) {
         v = (e | 0) == 46;
         if (!(v | (p + -97 | 0) >>> 0 < 6)) {
          p = x;
          u = y;
          break;
         }
         if (v) if (!o) {
          v = l;
          h = y;
          u = y;
          o = 1;
          p = w;
          j = m;
         } else {
          p = x;
          u = y;
          e = 46;
          break;
         } else A = 86;
        } else A = 86;
        if ((A | 0) == 86) {
         A = 0;
         e = (e | 0) > 57 ? p + -87 | 0 : u;
         do if (!((y | 0) < 0 | (y | 0) == 0 & l >>> 0 < 8)) {
          if ((y | 0) < 0 | (y | 0) == 0 & l >>> 0 < 14) {
           r = m * .0625;
           p = w;
           j = r;
           g = g + r * +(e | 0);
           break;
          }
          if ((w | 0) != 0 | (e | 0) == 0) {
           p = w;
           j = m;
          } else {
           p = 1;
           j = m;
           g = g + m * .5;
          }
         } else {
          p = w;
          j = m;
          k = e + (k << 4) | 0;
         } while (0);
         l = io(l | 0, y | 0, 1, 0) | 0;
         v = x;
         u = D;
         n = 1;
        }
        e = c[E >> 2] | 0;
        if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
         c[E >> 2] = e + 1;
         y = u;
         x = v;
         e = d[e >> 0] | 0;
         w = p;
         m = j;
         continue;
        } else {
         y = u;
         x = v;
         e = Rc(b) | 0;
         w = p;
         m = j;
         continue;
        }
       }
       if (!n) {
        e = (c[C >> 2] | 0) == 0;
        if (!e) c[E >> 2] = (c[E >> 2] | 0) + -1;
        if (f) {
         if (!e ? (z = c[E >> 2] | 0, c[E >> 2] = z + -1, (o | 0) != 0) : 0) c[E >> 2] = z + -2;
        } else Qc(b, 0);
        g = +(I | 0) * 0.0;
        break a;
       }
       n = (o | 0) == 0;
       o = n ? l : p;
       n = n ? u : h;
       if ((u | 0) < 0 | (u | 0) == 0 & l >>> 0 < 8) {
        h = u;
        do {
         k = k << 4;
         l = io(l | 0, h | 0, 1, 0) | 0;
         h = D;
        } while ((h | 0) < 0 | (h | 0) == 0 & l >>> 0 < 8);
       }
       if ((e | 32 | 0) == 112) {
        h = _d(b, f) | 0;
        e = D;
        if ((h | 0) == 0 & (e | 0) == -2147483648) {
         if (!f) {
          Qc(b, 0);
          g = 0.0;
          break a;
         }
         if (!(c[C >> 2] | 0)) {
          h = 0;
          e = 0;
         } else {
          c[E >> 2] = (c[E >> 2] | 0) + -1;
          h = 0;
          e = 0;
         }
        }
       } else if (!(c[C >> 2] | 0)) {
        h = 0;
        e = 0;
       } else {
        c[E >> 2] = (c[E >> 2] | 0) + -1;
        h = 0;
        e = 0;
       }
       H = lo(o | 0, n | 0, 2) | 0;
       H = io(H | 0, D | 0, -32, -1) | 0;
       e = io(H | 0, D | 0, h | 0, e | 0) | 0;
       h = D;
       if (!k) {
        g = +(I | 0) * 0.0;
        break a;
       }
       if ((h | 0) > 0 | (h | 0) == 0 & e >>> 0 > (0 - J | 0) >>> 0) {
        c[(Mc() | 0) >> 2] = 34;
        g = +(I | 0) * 1797693134862315708145274.0e284 * 1797693134862315708145274.0e284;
        break a;
       }
       H = J + -106 | 0;
       G = ((H | 0) < 0) << 31 >> 31;
       if ((h | 0) < (G | 0) | (h | 0) == (G | 0) & e >>> 0 < H >>> 0) {
        c[(Mc() | 0) >> 2] = 34;
        g = +(I | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;
        break a;
       }
       if ((k | 0) > -1) {
        do {
         G = !(g >= .5);
         H = G & 1 | k << 1;
         k = H ^ 1;
         g = g + (G ? g : g + -1.0);
         e = io(e | 0, h | 0, -1, -1) | 0;
         h = D;
        } while ((H | 0) > -1);
        l = e;
        m = g;
       } else {
        l = e;
        m = g;
       }
       e = go(32, 0, J | 0, ((J | 0) < 0) << 31 >> 31 | 0) | 0;
       e = io(l | 0, h | 0, e | 0, D | 0) | 0;
       J = D;
       if (0 > (J | 0) | 0 == (J | 0) & K >>> 0 > e >>> 0) if ((e | 0) < 0) {
        e = 0;
        A = 127;
       } else A = 125; else {
        e = K;
        A = 125;
       }
       if ((A | 0) == 125) if ((e | 0) < 53) A = 127; else {
        h = e;
        j = +(I | 0);
        g = 0.0;
       }
       if ((A | 0) == 127) {
        g = +(I | 0);
        h = e;
        j = g;
        g = +ad(+fd(1.0, 84 - e | 0), g);
       }
       K = (k & 1 | 0) == 0 & (m != 0.0 & (h | 0) < 32);
       g = j * (K ? 0.0 : m) + (g + j * +(((K & 1) + k | 0) >>> 0)) - g;
       if (!(g != 0.0)) c[(Mc() | 0) >> 2] = 34;
       g = +gd(g, l);
       break a;
      } else e = h; while (0);
      F = J + K | 0;
      G = 0 - F | 0;
      k = 0;
      f : while (1) {
       switch (e | 0) {
       case 46:
        {
         A = 138;
         break f;
        }
       case 48:
        break;
       default:
        {
         h = 0;
         p = 0;
         o = 0;
         break f;
        }
       }
       e = c[E >> 2] | 0;
       if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
        c[E >> 2] = e + 1;
        e = d[e >> 0] | 0;
        k = 1;
        continue;
       } else {
        e = Rc(b) | 0;
        k = 1;
        continue;
       }
      }
      if ((A | 0) == 138) {
       e = c[E >> 2] | 0;
       if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
        c[E >> 2] = e + 1;
        e = d[e >> 0] | 0;
       } else e = Rc(b) | 0;
       if ((e | 0) == 48) {
        h = 0;
        e = 0;
        while (1) {
         h = io(h | 0, e | 0, -1, -1) | 0;
         k = D;
         e = c[E >> 2] | 0;
         if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
          c[E >> 2] = e + 1;
          e = d[e >> 0] | 0;
         } else e = Rc(b) | 0;
         if ((e | 0) == 48) e = k; else {
          p = k;
          k = 1;
          o = 1;
          break;
         }
        }
       } else {
        h = 0;
        p = 0;
        o = 1;
       }
      }
      c[H >> 2] = 0;
      n = e + -48 | 0;
      l = (e | 0) == 46;
      g : do if (l | n >>> 0 < 10) {
       B = H + 496 | 0;
       y = 0;
       v = 0;
       w = l;
       A = p;
       u = k;
       z = o;
       k = 0;
       l = 0;
       o = 0;
       h : while (1) {
        do if (w) if (!z) {
         h = y;
         p = v;
         z = 1;
        } else {
         p = A;
         e = y;
         n = v;
         break h;
        } else {
         w = io(y | 0, v | 0, 1, 0) | 0;
         v = D;
         x = (e | 0) != 48;
         if ((l | 0) >= 125) {
          if (!x) {
           p = A;
           y = w;
           break;
          }
          c[B >> 2] = c[B >> 2] | 1;
          p = A;
          y = w;
          break;
         }
         p = H + (l << 2) | 0;
         if (k) n = e + -48 + ((c[p >> 2] | 0) * 10 | 0) | 0;
         c[p >> 2] = n;
         k = k + 1 | 0;
         n = (k | 0) == 9;
         p = A;
         y = w;
         u = 1;
         k = n ? 0 : k;
         l = (n & 1) + l | 0;
         o = x ? w : o;
        } while (0);
        e = c[E >> 2] | 0;
        if (e >>> 0 < (c[C >> 2] | 0) >>> 0) {
         c[E >> 2] = e + 1;
         e = d[e >> 0] | 0;
        } else e = Rc(b) | 0;
        n = e + -48 | 0;
        w = (e | 0) == 46;
        if (!(w | n >>> 0 < 10)) {
         n = z;
         A = 161;
         break g;
        } else A = p;
       }
       u = (u | 0) != 0;
       A = 169;
      } else {
       y = 0;
       v = 0;
       u = k;
       n = o;
       k = 0;
       l = 0;
       o = 0;
       A = 161;
      } while (0);
      do if ((A | 0) == 161) {
       B = (n | 0) == 0;
       h = B ? y : h;
       p = B ? v : p;
       u = (u | 0) != 0;
       if (!((e | 32 | 0) == 101 & u)) if ((e | 0) > -1) {
        e = y;
        n = v;
        A = 169;
        break;
       } else {
        e = y;
        n = v;
        A = 171;
        break;
       }
       n = _d(b, f) | 0;
       e = D;
       if ((n | 0) == 0 & (e | 0) == -2147483648) {
        if (!f) {
         Qc(b, 0);
         g = 0.0;
         break;
        }
        if (!(c[C >> 2] | 0)) {
         n = 0;
         e = 0;
        } else {
         c[E >> 2] = (c[E >> 2] | 0) + -1;
         n = 0;
         e = 0;
        }
       }
       h = io(n | 0, e | 0, h | 0, p | 0) | 0;
       u = y;
       p = D;
       n = v;
       A = 173;
      } while (0);
      if ((A | 0) == 169) if (c[C >> 2] | 0) {
       c[E >> 2] = (c[E >> 2] | 0) + -1;
       if (u) {
        u = e;
        A = 173;
       } else A = 172;
      } else A = 171;
      if ((A | 0) == 171) if (u) {
       u = e;
       A = 173;
      } else A = 172;
      do if ((A | 0) == 172) {
       c[(Mc() | 0) >> 2] = 22;
       Qc(b, 0);
       g = 0.0;
      } else if ((A | 0) == 173) {
       e = c[H >> 2] | 0;
       if (!e) {
        g = +(I | 0) * 0.0;
        break;
       }
       if (((n | 0) < 0 | (n | 0) == 0 & u >>> 0 < 10) & ((h | 0) == (u | 0) & (p | 0) == (n | 0)) ? K >>> 0 > 30 | (e >>> K | 0) == 0 : 0) {
        g = +(I | 0) * +(e >>> 0);
        break;
       }
       b = (J | 0) / -2 | 0;
       E = ((b | 0) < 0) << 31 >> 31;
       if ((p | 0) > (E | 0) | (p | 0) == (E | 0) & h >>> 0 > b >>> 0) {
        c[(Mc() | 0) >> 2] = 34;
        g = +(I | 0) * 1797693134862315708145274.0e284 * 1797693134862315708145274.0e284;
        break;
       }
       b = J + -106 | 0;
       E = ((b | 0) < 0) << 31 >> 31;
       if ((p | 0) < (E | 0) | (p | 0) == (E | 0) & h >>> 0 < b >>> 0) {
        c[(Mc() | 0) >> 2] = 34;
        g = +(I | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;
        break;
       }
       if (k) {
        if ((k | 0) < 9) {
         n = H + (l << 2) | 0;
         e = c[n >> 2] | 0;
         do {
          e = e * 10 | 0;
          k = k + 1 | 0;
         } while ((k | 0) != 9);
         c[n >> 2] = e;
        }
        l = l + 1 | 0;
       }
       if ((o | 0) < 9 ? (o | 0) <= (h | 0) & (h | 0) < 18 : 0) {
        if ((h | 0) == 9) {
         g = +(I | 0) * +((c[H >> 2] | 0) >>> 0);
         break;
        }
        if ((h | 0) < 9) {
         g = +(I | 0) * +((c[H >> 2] | 0) >>> 0) / +(c[2576 + (8 - h << 2) >> 2] | 0);
         break;
        }
        b = K + 27 + ($(h, -3) | 0) | 0;
        e = c[H >> 2] | 0;
        if ((b | 0) > 30 | (e >>> b | 0) == 0) {
         g = +(I | 0) * +(e >>> 0) * +(c[2576 + (h + -10 << 2) >> 2] | 0);
         break;
        }
       }
       e = (h | 0) % 9 | 0;
       if (!e) {
        k = 0;
        e = 0;
       } else {
        u = (h | 0) > -1 ? e : e + 9 | 0;
        n = c[2576 + (8 - u << 2) >> 2] | 0;
        if (l) {
         o = 1e9 / (n | 0) | 0;
         k = 0;
         e = 0;
         p = 0;
         do {
          C = H + (p << 2) | 0;
          E = c[C >> 2] | 0;
          b = ((E >>> 0) / (n >>> 0) | 0) + e | 0;
          c[C >> 2] = b;
          e = $((E >>> 0) % (n >>> 0) | 0, o) | 0;
          b = (p | 0) == (k | 0) & (b | 0) == 0;
          p = p + 1 | 0;
          h = b ? h + -9 | 0 : h;
          k = b ? p & 127 : k;
         } while ((p | 0) != (l | 0));
         if (e) {
          c[H + (l << 2) >> 2] = e;
          l = l + 1 | 0;
         }
        } else {
         k = 0;
         l = 0;
        }
        e = 0;
        h = 9 - u + h | 0;
       }
       i : while (1) {
        v = (h | 0) < 18;
        w = (h | 0) == 18;
        x = H + (k << 2) | 0;
        do {
         if (!v) {
          if (!w) break i;
          if ((c[x >> 2] | 0) >>> 0 >= 9007199) {
           h = 18;
           break i;
          }
         }
         n = 0;
         o = l + 127 | 0;
         while (1) {
          u = o & 127;
          p = H + (u << 2) | 0;
          o = lo(c[p >> 2] | 0, 0, 29) | 0;
          o = io(o | 0, D | 0, n | 0, 0) | 0;
          n = D;
          if (n >>> 0 > 0 | (n | 0) == 0 & o >>> 0 > 1e9) {
           b = to(o | 0, n | 0, 1e9, 0) | 0;
           o = uo(o | 0, n | 0, 1e9, 0) | 0;
           n = b;
          } else n = 0;
          c[p >> 2] = o;
          b = (u | 0) == (k | 0);
          l = (u | 0) != (l + 127 & 127 | 0) | b ? l : (o | 0) == 0 ? u : l;
          if (b) break; else o = u + -1 | 0;
         }
         e = e + -29 | 0;
        } while ((n | 0) == 0);
        k = k + 127 & 127;
        if ((k | 0) == (l | 0)) {
         b = l + 127 & 127;
         l = H + ((l + 126 & 127) << 2) | 0;
         c[l >> 2] = c[l >> 2] | c[H + (b << 2) >> 2];
         l = b;
        }
        c[H + (k << 2) >> 2] = n;
        h = h + 9 | 0;
       }
       j : while (1) {
        y = l + 1 & 127;
        x = H + ((l + 127 & 127) << 2) | 0;
        while (1) {
         v = (h | 0) == 18;
         w = (h | 0) > 27 ? 9 : 1;
         u = v ^ 1;
         while (1) {
          o = k & 127;
          p = (o | 0) == (l | 0);
          do if (!p) {
           n = c[H + (o << 2) >> 2] | 0;
           if (n >>> 0 < 9007199) {
            A = 219;
            break;
           }
           if (n >>> 0 > 9007199) break;
           n = k + 1 & 127;
           if ((n | 0) == (l | 0)) {
            A = 219;
            break;
           }
           n = c[H + (n << 2) >> 2] | 0;
           if (n >>> 0 < 254740991) {
            A = 219;
            break;
           }
           if (!(n >>> 0 > 254740991 | u)) {
            h = o;
            break j;
           }
          } else A = 219; while (0);
          if ((A | 0) == 219 ? (A = 0, v) : 0) {
           A = 220;
           break j;
          }
          e = e + w | 0;
          if ((k | 0) == (l | 0)) k = l; else break;
         }
         u = (1 << w) + -1 | 0;
         v = 1e9 >>> w;
         o = k;
         n = 0;
         p = k;
         while (1) {
          E = H + (p << 2) | 0;
          b = c[E >> 2] | 0;
          k = (b >>> w) + n | 0;
          c[E >> 2] = k;
          n = $(b & u, v) | 0;
          k = (p | 0) == (o | 0) & (k | 0) == 0;
          p = p + 1 & 127;
          h = k ? h + -9 | 0 : h;
          k = k ? p : o;
          if ((p | 0) == (l | 0)) break; else o = k;
         }
         if (!n) continue;
         if ((y | 0) != (k | 0)) break;
         c[x >> 2] = c[x >> 2] | 1;
        }
        c[H + (l << 2) >> 2] = n;
        l = y;
       }
       if ((A | 0) == 220) if (p) {
        c[H + (y + -1 << 2) >> 2] = 0;
        h = l;
        l = y;
       } else h = o;
       g = +((c[H + (h << 2) >> 2] | 0) >>> 0);
       h = k + 1 & 127;
       if ((h | 0) == (l | 0)) {
        l = k + 2 & 127;
        c[H + (l + -1 << 2) >> 2] = 0;
       }
       r = +(I | 0);
       j = r * (g * 1.0e9 + +((c[H + (h << 2) >> 2] | 0) >>> 0));
       v = e + 53 | 0;
       p = v - J | 0;
       u = (p | 0) < (K | 0);
       h = u & 1;
       o = u ? ((p | 0) < 0 ? 0 : p) : K;
       if ((o | 0) < 53) {
        M = +ad(+fd(1.0, 105 - o | 0), j);
        m = +cd(j, +fd(1.0, 53 - o | 0));
        q = M;
        g = m;
        m = M + (j - m);
       } else {
        q = 0.0;
        g = 0.0;
        m = j;
       }
       n = k + 2 & 127;
       do if ((n | 0) == (l | 0)) j = g; else {
        n = c[H + (n << 2) >> 2] | 0;
        do if (n >>> 0 >= 5e8) {
         if (n >>> 0 > 5e8) {
          g = r * .75 + g;
          break;
         }
         if ((k + 3 & 127 | 0) == (l | 0)) {
          g = r * .5 + g;
          break;
         } else {
          g = r * .75 + g;
          break;
         }
        } else {
         if ((n | 0) == 0 ? (k + 3 & 127 | 0) == (l | 0) : 0) break;
         g = r * .25 + g;
        } while (0);
        if ((53 - o | 0) <= 1) {
         j = g;
         break;
        }
        if (+cd(g, 1.0) != 0.0) {
         j = g;
         break;
        }
        j = g + 1.0;
       } while (0);
       g = m + j - q;
       do if ((v & 2147483647 | 0) > (-2 - F | 0)) {
        if (+O(+g) >= 9007199254740992.0) {
         h = u & (o | 0) == (p | 0) ? 0 : h;
         e = e + 1 | 0;
         g = g * .5;
        }
        if ((e + 50 | 0) <= (G | 0) ? !(j != 0.0 & (h | 0) != 0) : 0) break;
        c[(Mc() | 0) >> 2] = 34;
       } while (0);
       g = +gd(g, e);
      } while (0);
      break a;
     }
    default:
     {
      if (c[C >> 2] | 0) c[E >> 2] = (c[E >> 2] | 0) + -1;
      c[(Mc() | 0) >> 2] = 22;
      Qc(b, 0);
      g = 0.0;
      break a;
     }
    }
   }
  } while (0);
  if ((A | 0) == 23) {
   h = (c[C >> 2] | 0) == 0;
   if (!h) c[E >> 2] = (c[E >> 2] | 0) + -1;
   if ((f | 0) != 0 & e >>> 0 > 3) do {
    if (!h) c[E >> 2] = (c[E >> 2] | 0) + -1;
    e = e + -1 | 0;
   } while (e >>> 0 > 3);
  }
  g = +(I | 0) * t;
 } while (0);
 i = L;
 return +g;
}

function Oj(e, f, g, h, j, k, l, m, n, o, p) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 n = n | 0;
 o = o | 0;
 p = p | 0;
 var q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0;
 ca = i;
 i = i + 512 | 0;
 O = ca + 88 | 0;
 t = ca + 96 | 0;
 ba = ca + 80 | 0;
 S = ca + 72 | 0;
 R = ca + 68 | 0;
 T = ca + 500 | 0;
 P = ca + 497 | 0;
 U = ca + 496 | 0;
 Y = ca + 56 | 0;
 aa = ca + 44 | 0;
 _ = ca + 32 | 0;
 Z = ca + 20 | 0;
 $ = ca + 8 | 0;
 Q = ca + 4 | 0;
 W = ca;
 c[O >> 2] = p;
 c[ba >> 2] = t;
 X = ba + 4 | 0;
 c[X >> 2] = 98;
 c[S >> 2] = t;
 c[R >> 2] = t + 400;
 c[Y >> 2] = 0;
 c[Y + 4 >> 2] = 0;
 c[Y + 8 >> 2] = 0;
 c[aa >> 2] = 0;
 c[aa + 4 >> 2] = 0;
 c[aa + 8 >> 2] = 0;
 c[_ >> 2] = 0;
 c[_ + 4 >> 2] = 0;
 c[_ + 8 >> 2] = 0;
 c[Z >> 2] = 0;
 c[Z + 4 >> 2] = 0;
 c[Z + 8 >> 2] = 0;
 c[$ >> 2] = 0;
 c[$ + 4 >> 2] = 0;
 c[$ + 8 >> 2] = 0;
 Rj(g, h, T, P, U, Y, aa, _, Z, Q);
 c[o >> 2] = c[n >> 2];
 H = m + 8 | 0;
 I = _ + 4 | 0;
 J = Z + 4 | 0;
 K = Z + 8 | 0;
 L = Z + 1 | 0;
 M = _ + 8 | 0;
 N = _ + 1 | 0;
 x = (j & 512 | 0) != 0;
 y = aa + 8 | 0;
 z = aa + 1 | 0;
 A = aa + 4 | 0;
 B = $ + 4 | 0;
 C = $ + 8 | 0;
 D = $ + 1 | 0;
 E = T + 3 | 0;
 F = Y + 4 | 0;
 G = 0;
 s = 0;
 a : while (1) {
  p = c[e >> 2] | 0;
  do if (p) {
   if ((c[p + 12 >> 2] | 0) == (c[p + 16 >> 2] | 0)) if ((tb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0) == -1) {
    c[e >> 2] = 0;
    p = 0;
    break;
   } else {
    p = c[e >> 2] | 0;
    break;
   }
  } else p = 0; while (0);
  p = (p | 0) == 0;
  m = c[f >> 2] | 0;
  do if (m) {
   if ((c[m + 12 >> 2] | 0) != (c[m + 16 >> 2] | 0)) if (p) break; else {
    V = 202;
    break a;
   }
   if ((tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) != -1) if (p) break; else {
    V = 202;
    break a;
   } else {
    c[f >> 2] = 0;
    V = 12;
    break;
   }
  } else V = 12; while (0);
  if ((V | 0) == 12) {
   V = 0;
   if (p) {
    V = 202;
    break;
   } else m = 0;
  }
  b : do switch (a[T + G >> 0] | 0) {
  case 1:
   {
    if ((G | 0) != 3) {
     p = c[e >> 2] | 0;
     g = c[p + 12 >> 2] | 0;
     if ((g | 0) == (c[p + 16 >> 2] | 0)) p = tb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0; else p = d[g >> 0] | 0;
     if ((p & 255) << 24 >> 24 <= -1) {
      V = 26;
      break a;
     }
     if (!(b[(c[H >> 2] | 0) + (p << 24 >> 24 << 1) >> 1] & 8192)) {
      V = 26;
      break a;
     }
     p = c[e >> 2] | 0;
     g = p + 12 | 0;
     h = c[g >> 2] | 0;
     if ((h | 0) == (c[p + 16 >> 2] | 0)) p = tb[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0; else {
      c[g >> 2] = h + 1;
      p = d[h >> 0] | 0;
     }
     bf($, p & 255);
     p = m;
     g = m;
     V = 28;
    }
    break;
   }
  case 0:
   {
    if ((G | 0) != 3) {
     p = m;
     g = m;
     V = 28;
    }
    break;
   }
  case 3:
   {
    h = a[_ >> 0] | 0;
    p = (h & 1) == 0 ? (h & 255) >>> 1 : c[I >> 2] | 0;
    g = a[Z >> 0] | 0;
    g = (g & 1) == 0 ? (g & 255) >>> 1 : c[J >> 2] | 0;
    if ((p | 0) != (0 - g | 0)) {
     j = (p | 0) == 0;
     q = c[e >> 2] | 0;
     r = c[q + 12 >> 2] | 0;
     p = c[q + 16 >> 2] | 0;
     m = (r | 0) == (p | 0);
     if (j | (g | 0) == 0) {
      if (m) p = tb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0; else p = d[r >> 0] | 0;
      p = p & 255;
      if (j) {
       if (p << 24 >> 24 != (a[((a[Z >> 0] & 1) == 0 ? L : c[K >> 2] | 0) >> 0] | 0)) break b;
       p = c[e >> 2] | 0;
       m = p + 12 | 0;
       g = c[m >> 2] | 0;
       if ((g | 0) == (c[p + 16 >> 2] | 0)) tb[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0; else c[m >> 2] = g + 1;
       a[l >> 0] = 1;
       w = a[Z >> 0] | 0;
       s = ((w & 1) == 0 ? (w & 255) >>> 1 : c[J >> 2] | 0) >>> 0 > 1 ? Z : s;
       break b;
      }
      if (p << 24 >> 24 != (a[((a[_ >> 0] & 1) == 0 ? N : c[M >> 2] | 0) >> 0] | 0)) {
       a[l >> 0] = 1;
       break b;
      }
      p = c[e >> 2] | 0;
      m = p + 12 | 0;
      g = c[m >> 2] | 0;
      if ((g | 0) == (c[p + 16 >> 2] | 0)) tb[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0; else c[m >> 2] = g + 1;
      w = a[_ >> 0] | 0;
      s = ((w & 1) == 0 ? (w & 255) >>> 1 : c[I >> 2] | 0) >>> 0 > 1 ? _ : s;
      break b;
     }
     if (m) {
      j = tb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0;
      p = c[e >> 2] | 0;
      h = a[_ >> 0] | 0;
      q = p;
      g = c[p + 12 >> 2] | 0;
      p = c[p + 16 >> 2] | 0;
     } else {
      j = d[r >> 0] | 0;
      g = r;
     }
     m = q + 12 | 0;
     p = (g | 0) == (p | 0);
     if ((j & 255) << 24 >> 24 == (a[((h & 1) == 0 ? N : c[M >> 2] | 0) >> 0] | 0)) {
      if (p) tb[c[(c[q >> 2] | 0) + 40 >> 2] & 63](q) | 0; else c[m >> 2] = g + 1;
      w = a[_ >> 0] | 0;
      s = ((w & 1) == 0 ? (w & 255) >>> 1 : c[I >> 2] | 0) >>> 0 > 1 ? _ : s;
      break b;
     }
     if (p) p = tb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0; else p = d[g >> 0] | 0;
     if ((p & 255) << 24 >> 24 != (a[((a[Z >> 0] & 1) == 0 ? L : c[K >> 2] | 0) >> 0] | 0)) {
      V = 82;
      break a;
     }
     p = c[e >> 2] | 0;
     m = p + 12 | 0;
     g = c[m >> 2] | 0;
     if ((g | 0) == (c[p + 16 >> 2] | 0)) tb[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0; else c[m >> 2] = g + 1;
     a[l >> 0] = 1;
     w = a[Z >> 0] | 0;
     s = ((w & 1) == 0 ? (w & 255) >>> 1 : c[J >> 2] | 0) >>> 0 > 1 ? Z : s;
    }
    break;
   }
  case 2:
   {
    if (!(G >>> 0 < 2 | (s | 0) != 0) ? !(x | (G | 0) == 2 & (a[E >> 0] | 0) != 0) : 0) {
     s = 0;
     break b;
    }
    v = a[aa >> 0] | 0;
    p = (v & 1) == 0;
    w = c[y >> 2] | 0;
    h = p ? z : w;
    u = h;
    c : do if ((G | 0) != 0 ? (d[T + (G + -1) >> 0] | 0) < 2 : 0) {
     r = p ? (v & 255) >>> 1 : c[A >> 2] | 0;
     j = h + r | 0;
     q = c[H >> 2] | 0;
     d : do if (!r) g = u; else {
      r = h;
      g = u;
      do {
       p = a[r >> 0] | 0;
       if (p << 24 >> 24 <= -1) break d;
       if (!(b[q + (p << 24 >> 24 << 1) >> 1] & 8192)) break d;
       r = r + 1 | 0;
       g = r;
      } while ((r | 0) != (j | 0));
     } while (0);
     j = g - u | 0;
     q = a[$ >> 0] | 0;
     p = (q & 1) == 0;
     q = p ? (q & 255) >>> 1 : c[B >> 2] | 0;
     if (q >>> 0 >= j >>> 0) {
      p = p ? D : c[C >> 2] | 0;
      r = p + q | 0;
      if ((g | 0) != (u | 0)) {
       p = p + (q - j) | 0;
       while (1) {
        if ((a[p >> 0] | 0) != (a[h >> 0] | 0)) {
         g = u;
         break c;
        }
        p = p + 1 | 0;
        if ((p | 0) == (r | 0)) break; else h = h + 1 | 0;
       }
      }
     } else g = u;
    } else g = u; while (0);
    p = (v & 1) == 0;
    p = (p ? z : w) + (p ? (v & 255) >>> 1 : c[A >> 2] | 0) | 0;
    e : do if ((g | 0) != (p | 0)) {
     j = m;
     h = m;
     p = g;
     while (1) {
      m = c[e >> 2] | 0;
      do if (m) {
       if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
        c[e >> 2] = 0;
        m = 0;
        break;
       } else {
        m = c[e >> 2] | 0;
        break;
       }
      } else m = 0; while (0);
      g = (m | 0) == 0;
      do if (h) {
       if ((c[h + 12 >> 2] | 0) != (c[h + 16 >> 2] | 0)) if (g) {
        m = j;
        q = h;
        break;
       } else break e;
       if ((tb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0) != -1) if (g ^ (j | 0) == 0) {
        m = j;
        q = j;
        break;
       } else break e; else {
        c[f >> 2] = 0;
        m = 0;
        V = 107;
        break;
       }
      } else {
       m = j;
       V = 107;
      } while (0);
      if ((V | 0) == 107) {
       V = 0;
       if (g) break e; else q = 0;
      }
      g = c[e >> 2] | 0;
      h = c[g + 12 >> 2] | 0;
      if ((h | 0) == (c[g + 16 >> 2] | 0)) g = tb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else g = d[h >> 0] | 0;
      if ((g & 255) << 24 >> 24 != (a[p >> 0] | 0)) break e;
      g = c[e >> 2] | 0;
      h = g + 12 | 0;
      j = c[h >> 2] | 0;
      if ((j | 0) == (c[g + 16 >> 2] | 0)) tb[c[(c[g >> 2] | 0) + 40 >> 2] & 63](g) | 0; else c[h >> 2] = j + 1;
      p = p + 1 | 0;
      g = a[aa >> 0] | 0;
      w = (g & 1) == 0;
      g = (w ? z : c[y >> 2] | 0) + (w ? (g & 255) >>> 1 : c[A >> 2] | 0) | 0;
      if ((p | 0) == (g | 0)) {
       p = g;
       break;
      } else {
       j = m;
       h = q;
      }
     }
    } while (0);
    if (x ? (w = a[aa >> 0] | 0, v = (w & 1) == 0, (p | 0) != ((v ? z : c[y >> 2] | 0) + (v ? (w & 255) >>> 1 : c[A >> 2] | 0) | 0)) : 0) {
     V = 119;
     break a;
    }
    break;
   }
  case 4:
   {
    r = a[U >> 0] | 0;
    j = m;
    h = m;
    p = 0;
    f : while (1) {
     m = c[e >> 2] | 0;
     do if (m) {
      if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
       c[e >> 2] = 0;
       m = 0;
       break;
      } else {
       m = c[e >> 2] | 0;
       break;
      }
     } else m = 0; while (0);
     g = (m | 0) == 0;
     do if (h) {
      if ((c[h + 12 >> 2] | 0) != (c[h + 16 >> 2] | 0)) if (g) {
       m = j;
       q = h;
       break;
      } else {
       m = j;
       break f;
      }
      if ((tb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0) != -1) if (g ^ (j | 0) == 0) {
       m = j;
       q = j;
       break;
      } else {
       m = j;
       break f;
      } else {
       c[f >> 2] = 0;
       m = 0;
       V = 130;
       break;
      }
     } else {
      m = j;
      V = 130;
     } while (0);
     if ((V | 0) == 130) {
      V = 0;
      if (g) break; else q = 0;
     }
     g = c[e >> 2] | 0;
     h = c[g + 12 >> 2] | 0;
     if ((h | 0) == (c[g + 16 >> 2] | 0)) g = tb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else g = d[h >> 0] | 0;
     h = g & 255;
     if (h << 24 >> 24 > -1 ? (b[(c[H >> 2] | 0) + (g << 24 >> 24 << 1) >> 1] & 2048) != 0 : 0) {
      g = c[o >> 2] | 0;
      if ((g | 0) == (c[O >> 2] | 0)) {
       Rm(n, o, O);
       g = c[o >> 2] | 0;
      }
      c[o >> 2] = g + 1;
      a[g >> 0] = h;
      p = p + 1 | 0;
     } else {
      w = a[Y >> 0] | 0;
      if (!(h << 24 >> 24 == r << 24 >> 24 & ((p | 0) != 0 ? (((w & 1) == 0 ? (w & 255) >>> 1 : c[F >> 2] | 0) | 0) != 0 : 0))) break;
      if ((t | 0) == (c[R >> 2] | 0)) {
       Sm(ba, S, R);
       t = c[S >> 2] | 0;
      }
      w = t + 4 | 0;
      c[S >> 2] = w;
      c[t >> 2] = p;
      t = w;
      p = 0;
     }
     g = c[e >> 2] | 0;
     h = g + 12 | 0;
     j = c[h >> 2] | 0;
     if ((j | 0) == (c[g + 16 >> 2] | 0)) {
      tb[c[(c[g >> 2] | 0) + 40 >> 2] & 63](g) | 0;
      j = m;
      h = q;
      continue;
     } else {
      c[h >> 2] = j + 1;
      j = m;
      h = q;
      continue;
     }
    }
    if ((p | 0) != 0 ? (c[ba >> 2] | 0) != (t | 0) : 0) {
     if ((t | 0) == (c[R >> 2] | 0)) {
      Sm(ba, S, R);
      t = c[S >> 2] | 0;
     }
     w = t + 4 | 0;
     c[S >> 2] = w;
     c[t >> 2] = p;
     t = w;
    }
    q = c[Q >> 2] | 0;
    if ((q | 0) > 0) {
     p = c[e >> 2] | 0;
     do if (p) {
      if ((c[p + 12 >> 2] | 0) == (c[p + 16 >> 2] | 0)) if ((tb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0) == -1) {
       c[e >> 2] = 0;
       p = 0;
       break;
      } else {
       p = c[e >> 2] | 0;
       break;
      }
     } else p = 0; while (0);
     p = (p | 0) == 0;
     do if (m) {
      if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0) ? (tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1 : 0) {
       c[f >> 2] = 0;
       V = 162;
       break;
      }
      if (p) h = m; else {
       V = 167;
       break a;
      }
     } else V = 162; while (0);
     if ((V | 0) == 162) {
      V = 0;
      if (p) {
       V = 167;
       break a;
      } else h = 0;
     }
     p = c[e >> 2] | 0;
     m = c[p + 12 >> 2] | 0;
     if ((m | 0) == (c[p + 16 >> 2] | 0)) p = tb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0; else p = d[m >> 0] | 0;
     if ((p & 255) << 24 >> 24 != (a[P >> 0] | 0)) {
      V = 167;
      break a;
     }
     p = c[e >> 2] | 0;
     m = p + 12 | 0;
     g = c[m >> 2] | 0;
     if ((g | 0) == (c[p + 16 >> 2] | 0)) tb[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0; else c[m >> 2] = g + 1;
     if ((q | 0) > 0) {
      j = h;
      g = h;
      while (1) {
       p = c[e >> 2] | 0;
       do if (p) {
        if ((c[p + 12 >> 2] | 0) == (c[p + 16 >> 2] | 0)) if ((tb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0) == -1) {
         c[e >> 2] = 0;
         p = 0;
         break;
        } else {
         p = c[e >> 2] | 0;
         break;
        }
       } else p = 0; while (0);
       m = (p | 0) == 0;
       do if (g) {
        if ((c[g + 12 >> 2] | 0) != (c[g + 16 >> 2] | 0)) if (m) {
         p = j;
         r = g;
         break;
        } else {
         V = 189;
         break a;
        }
        if ((tb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0) != -1) if (m ^ (j | 0) == 0) {
         p = j;
         r = j;
         break;
        } else {
         V = 189;
         break a;
        } else {
         c[f >> 2] = 0;
         p = 0;
         V = 182;
         break;
        }
       } else {
        p = j;
        V = 182;
       } while (0);
       if ((V | 0) == 182) {
        V = 0;
        if (m) {
         V = 189;
         break a;
        } else r = 0;
       }
       m = c[e >> 2] | 0;
       g = c[m + 12 >> 2] | 0;
       if ((g | 0) == (c[m + 16 >> 2] | 0)) m = tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else m = d[g >> 0] | 0;
       if ((m & 255) << 24 >> 24 <= -1) {
        V = 189;
        break a;
       }
       if (!(b[(c[H >> 2] | 0) + (m << 24 >> 24 << 1) >> 1] & 2048)) {
        V = 189;
        break a;
       }
       if ((c[o >> 2] | 0) == (c[O >> 2] | 0)) Rm(n, o, O);
       m = c[e >> 2] | 0;
       g = c[m + 12 >> 2] | 0;
       if ((g | 0) == (c[m + 16 >> 2] | 0)) m = tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else m = d[g >> 0] | 0;
       g = c[o >> 2] | 0;
       c[o >> 2] = g + 1;
       a[g >> 0] = m;
       m = q;
       q = q + -1 | 0;
       c[Q >> 2] = q;
       g = c[e >> 2] | 0;
       h = g + 12 | 0;
       j = c[h >> 2] | 0;
       if ((j | 0) == (c[g + 16 >> 2] | 0)) tb[c[(c[g >> 2] | 0) + 40 >> 2] & 63](g) | 0; else c[h >> 2] = j + 1;
       if ((m | 0) <= 1) break; else {
        j = p;
        g = r;
       }
      }
     }
    }
    if ((c[o >> 2] | 0) == (c[n >> 2] | 0)) {
     V = 200;
     break a;
    }
    break;
   }
  default:
   {}
  } while (0);
  g : do if ((V | 0) == 28) while (1) {
   V = 0;
   m = c[e >> 2] | 0;
   do if (m) {
    if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
     c[e >> 2] = 0;
     m = 0;
     break;
    } else {
     m = c[e >> 2] | 0;
     break;
    }
   } else m = 0; while (0);
   m = (m | 0) == 0;
   do if (g) {
    if ((c[g + 12 >> 2] | 0) != (c[g + 16 >> 2] | 0)) if (m) {
     j = p;
     h = g;
     break;
    } else break g;
    if ((tb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0) != -1) if (m ^ (p | 0) == 0) {
     j = p;
     h = p;
     break;
    } else break g; else {
     c[f >> 2] = 0;
     p = 0;
     V = 38;
     break;
    }
   } else V = 38; while (0);
   if ((V | 0) == 38) {
    V = 0;
    if (m) break g; else {
     j = p;
     h = 0;
    }
   }
   p = c[e >> 2] | 0;
   m = c[p + 12 >> 2] | 0;
   if ((m | 0) == (c[p + 16 >> 2] | 0)) p = tb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0; else p = d[m >> 0] | 0;
   if ((p & 255) << 24 >> 24 <= -1) break g;
   if (!(b[(c[H >> 2] | 0) + (p << 24 >> 24 << 1) >> 1] & 8192)) break g;
   p = c[e >> 2] | 0;
   m = p + 12 | 0;
   g = c[m >> 2] | 0;
   if ((g | 0) == (c[p + 16 >> 2] | 0)) p = tb[c[(c[p >> 2] | 0) + 40 >> 2] & 63](p) | 0; else {
    c[m >> 2] = g + 1;
    p = d[g >> 0] | 0;
   }
   bf($, p & 255);
   p = j;
   g = h;
   V = 28;
  } while (0);
  G = G + 1 | 0;
  if (G >>> 0 >= 4) {
   V = 202;
   break;
  }
 }
 h : do if ((V | 0) == 26) {
  c[k >> 2] = c[k >> 2] | 4;
  m = 0;
 } else if ((V | 0) == 82) {
  c[k >> 2] = c[k >> 2] | 4;
  m = 0;
 } else if ((V | 0) == 119) {
  c[k >> 2] = c[k >> 2] | 4;
  m = 0;
 } else if ((V | 0) == 167) {
  c[k >> 2] = c[k >> 2] | 4;
  m = 0;
 } else if ((V | 0) == 189) {
  c[k >> 2] = c[k >> 2] | 4;
  m = 0;
 } else if ((V | 0) == 200) {
  c[k >> 2] = c[k >> 2] | 4;
  m = 0;
 } else if ((V | 0) == 202) {
  i : do if (s) {
   j = s + 1 | 0;
   q = s + 8 | 0;
   r = s + 4 | 0;
   g = 1;
   j : while (1) {
    p = a[s >> 0] | 0;
    if (!(p & 1)) p = (p & 255) >>> 1; else p = c[r >> 2] | 0;
    if (g >>> 0 >= p >>> 0) break i;
    p = c[e >> 2] | 0;
    do if (p) {
     if ((c[p + 12 >> 2] | 0) == (c[p + 16 >> 2] | 0)) if ((tb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0) == -1) {
      c[e >> 2] = 0;
      p = 0;
      break;
     } else {
      p = c[e >> 2] | 0;
      break;
     }
    } else p = 0; while (0);
    p = (p | 0) == 0;
    m = c[f >> 2] | 0;
    do if (m) {
     if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0) ? (tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1 : 0) {
      c[f >> 2] = 0;
      V = 218;
      break;
     }
     if (!p) break j;
    } else V = 218; while (0);
    if ((V | 0) == 218 ? (V = 0, p) : 0) break;
    p = c[e >> 2] | 0;
    m = c[p + 12 >> 2] | 0;
    if ((m | 0) == (c[p + 16 >> 2] | 0)) p = tb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0; else p = d[m >> 0] | 0;
    if (!(a[s >> 0] & 1)) m = j; else m = c[q >> 2] | 0;
    if ((p & 255) << 24 >> 24 != (a[m + g >> 0] | 0)) break;
    p = g + 1 | 0;
    m = c[e >> 2] | 0;
    g = m + 12 | 0;
    h = c[g >> 2] | 0;
    if ((h | 0) == (c[m + 16 >> 2] | 0)) {
     tb[c[(c[m >> 2] | 0) + 40 >> 2] & 63](m) | 0;
     g = p;
     continue;
    } else {
     c[g >> 2] = h + 1;
     g = p;
     continue;
    }
   }
   c[k >> 2] = c[k >> 2] | 4;
   m = 0;
   break h;
  } while (0);
  p = c[ba >> 2] | 0;
  if ((p | 0) != (t | 0) ? (c[W >> 2] = 0, Sj(Y, p, t, W), (c[W >> 2] | 0) != 0) : 0) {
   c[k >> 2] = c[k >> 2] | 4;
   m = 0;
  } else m = 1;
 } while (0);
 Xe($);
 Xe(Z);
 Xe(_);
 Xe(aa);
 Xe(Y);
 p = c[ba >> 2] | 0;
 c[ba >> 2] = 0;
 if (p) pb[c[X >> 2] & 127](p);
 i = ca;
 return m | 0;
}

function Wj(b, e, f, g, h, j, k, l, m, n, o) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 n = n | 0;
 o = o | 0;
 var p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0;
 Z = i;
 i = i + 512 | 0;
 J = Z + 96 | 0;
 s = Z + 104 | 0;
 Y = Z + 88 | 0;
 N = Z + 80 | 0;
 M = Z + 76 | 0;
 O = Z + 504 | 0;
 K = Z + 72 | 0;
 P = Z + 68 | 0;
 T = Z + 56 | 0;
 X = Z + 44 | 0;
 V = Z + 32 | 0;
 U = Z + 20 | 0;
 W = Z + 8 | 0;
 L = Z + 4 | 0;
 R = Z;
 c[J >> 2] = o;
 c[Y >> 2] = s;
 S = Y + 4 | 0;
 c[S >> 2] = 98;
 c[N >> 2] = s;
 c[M >> 2] = s + 400;
 c[T >> 2] = 0;
 c[T + 4 >> 2] = 0;
 c[T + 8 >> 2] = 0;
 c[X >> 2] = 0;
 c[X + 4 >> 2] = 0;
 c[X + 8 >> 2] = 0;
 c[V >> 2] = 0;
 c[V + 4 >> 2] = 0;
 c[V + 8 >> 2] = 0;
 c[U >> 2] = 0;
 c[U + 4 >> 2] = 0;
 c[U + 8 >> 2] = 0;
 c[W >> 2] = 0;
 c[W + 4 >> 2] = 0;
 c[W + 8 >> 2] = 0;
 Yj(f, g, O, K, P, T, X, V, U, L);
 c[n >> 2] = c[m >> 2];
 F = V + 4 | 0;
 G = U + 4 | 0;
 H = U + 8 | 0;
 I = V + 8 | 0;
 x = (h & 512 | 0) != 0;
 y = X + 8 | 0;
 z = X + 4 | 0;
 A = W + 4 | 0;
 B = W + 8 | 0;
 C = O + 3 | 0;
 D = T + 4 | 0;
 E = 0;
 r = 0;
 a : while (1) {
  o = c[b >> 2] | 0;
  do if (o) {
   f = c[o + 12 >> 2] | 0;
   if ((f | 0) == (c[o + 16 >> 2] | 0)) o = tb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
   if ((o | 0) == -1) {
    c[b >> 2] = 0;
    g = 1;
    break;
   } else {
    g = (c[b >> 2] | 0) == 0;
    break;
   }
  } else g = 1; while (0);
  f = c[e >> 2] | 0;
  do if (f) {
   o = c[f + 12 >> 2] | 0;
   if ((o | 0) == (c[f + 16 >> 2] | 0)) o = tb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else o = c[o >> 2] | 0;
   if ((o | 0) != -1) if (g) {
    w = f;
    break;
   } else {
    Q = 217;
    break a;
   } else {
    c[e >> 2] = 0;
    Q = 15;
    break;
   }
  } else Q = 15; while (0);
  if ((Q | 0) == 15) {
   Q = 0;
   if (g) {
    Q = 217;
    break;
   } else w = 0;
  }
  b : do switch (a[O + E >> 0] | 0) {
  case 1:
   {
    if ((E | 0) != 3) {
     o = c[b >> 2] | 0;
     f = c[o + 12 >> 2] | 0;
     if ((f | 0) == (c[o + 16 >> 2] | 0)) o = tb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
     if (!(mb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 8192, o) | 0)) {
      Q = 28;
      break a;
     }
     o = c[b >> 2] | 0;
     f = o + 12 | 0;
     g = c[f >> 2] | 0;
     if ((g | 0) == (c[o + 16 >> 2] | 0)) o = tb[c[(c[o >> 2] | 0) + 40 >> 2] & 63](o) | 0; else {
      c[f >> 2] = g + 4;
      o = c[g >> 2] | 0;
     }
     lf(W, o);
     o = w;
     h = w;
     Q = 30;
    }
    break;
   }
  case 0:
   {
    if ((E | 0) != 3) {
     o = w;
     h = w;
     Q = 30;
    }
    break;
   }
  case 3:
   {
    p = a[V >> 0] | 0;
    o = (p & 1) == 0 ? (p & 255) >>> 1 : c[F >> 2] | 0;
    g = a[U >> 0] | 0;
    g = (g & 1) == 0 ? (g & 255) >>> 1 : c[G >> 2] | 0;
    if ((o | 0) != (0 - g | 0)) {
     h = (o | 0) == 0;
     q = c[b >> 2] | 0;
     t = c[q + 12 >> 2] | 0;
     o = c[q + 16 >> 2] | 0;
     f = (t | 0) == (o | 0);
     if (h | (g | 0) == 0) {
      if (f) o = tb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0; else o = c[t >> 2] | 0;
      if (h) {
       if ((o | 0) != (c[((a[U >> 0] & 1) == 0 ? G : c[H >> 2] | 0) >> 2] | 0)) break b;
       o = c[b >> 2] | 0;
       f = o + 12 | 0;
       g = c[f >> 2] | 0;
       if ((g | 0) == (c[o + 16 >> 2] | 0)) tb[c[(c[o >> 2] | 0) + 40 >> 2] & 63](o) | 0; else c[f >> 2] = g + 4;
       a[k >> 0] = 1;
       w = a[U >> 0] | 0;
       r = ((w & 1) == 0 ? (w & 255) >>> 1 : c[G >> 2] | 0) >>> 0 > 1 ? U : r;
       break b;
      }
      if ((o | 0) != (c[((a[V >> 0] & 1) == 0 ? F : c[I >> 2] | 0) >> 2] | 0)) {
       a[k >> 0] = 1;
       break b;
      }
      o = c[b >> 2] | 0;
      f = o + 12 | 0;
      g = c[f >> 2] | 0;
      if ((g | 0) == (c[o + 16 >> 2] | 0)) tb[c[(c[o >> 2] | 0) + 40 >> 2] & 63](o) | 0; else c[f >> 2] = g + 4;
      w = a[V >> 0] | 0;
      r = ((w & 1) == 0 ? (w & 255) >>> 1 : c[F >> 2] | 0) >>> 0 > 1 ? V : r;
      break b;
     }
     if (f) {
      h = tb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0;
      o = c[b >> 2] | 0;
      p = a[V >> 0] | 0;
      q = o;
      g = c[o + 12 >> 2] | 0;
      o = c[o + 16 >> 2] | 0;
     } else {
      h = c[t >> 2] | 0;
      g = t;
     }
     f = q + 12 | 0;
     o = (g | 0) == (o | 0);
     if ((h | 0) == (c[((p & 1) == 0 ? F : c[I >> 2] | 0) >> 2] | 0)) {
      if (o) tb[c[(c[q >> 2] | 0) + 40 >> 2] & 63](q) | 0; else c[f >> 2] = g + 4;
      w = a[V >> 0] | 0;
      r = ((w & 1) == 0 ? (w & 255) >>> 1 : c[F >> 2] | 0) >>> 0 > 1 ? V : r;
      break b;
     }
     if (o) o = tb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0; else o = c[g >> 2] | 0;
     if ((o | 0) != (c[((a[U >> 0] & 1) == 0 ? G : c[H >> 2] | 0) >> 2] | 0)) {
      Q = 86;
      break a;
     }
     o = c[b >> 2] | 0;
     f = o + 12 | 0;
     g = c[f >> 2] | 0;
     if ((g | 0) == (c[o + 16 >> 2] | 0)) tb[c[(c[o >> 2] | 0) + 40 >> 2] & 63](o) | 0; else c[f >> 2] = g + 4;
     a[k >> 0] = 1;
     w = a[U >> 0] | 0;
     r = ((w & 1) == 0 ? (w & 255) >>> 1 : c[G >> 2] | 0) >>> 0 > 1 ? U : r;
    }
    break;
   }
  case 2:
   {
    if (!(E >>> 0 < 2 | (r | 0) != 0) ? !(x | (E | 0) == 2 & (a[C >> 0] | 0) != 0) : 0) {
     r = 0;
     break b;
    }
    h = a[X >> 0] | 0;
    g = c[y >> 2] | 0;
    f = (h & 1) == 0 ? z : g;
    o = f;
    c : do if ((E | 0) != 0 ? (d[O + (E + -1) >> 0] | 0) < 2 : 0) {
     v = (h & 1) == 0;
     d : do if ((f | 0) != ((v ? z : g) + ((v ? (h & 255) >>> 1 : c[z >> 2] | 0) << 2) | 0)) {
      h = f;
      while (1) {
       if (!(mb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 8192, c[h >> 2] | 0) | 0)) break;
       h = h + 4 | 0;
       o = h;
       f = a[X >> 0] | 0;
       g = c[y >> 2] | 0;
       v = (f & 1) == 0;
       if ((h | 0) == ((v ? z : g) + ((v ? (f & 255) >>> 1 : c[z >> 2] | 0) << 2) | 0)) {
        h = f;
        break d;
       }
      }
      h = a[X >> 0] | 0;
      g = c[y >> 2] | 0;
     } while (0);
     q = (h & 1) == 0 ? z : g;
     f = q;
     t = o - f >> 2;
     u = a[W >> 0] | 0;
     p = (u & 1) == 0;
     u = p ? (u & 255) >>> 1 : c[A >> 2] | 0;
     if (u >>> 0 >= t >>> 0) {
      p = p ? A : c[B >> 2] | 0;
      v = p + (u << 2) | 0;
      if (!t) f = o; else {
       p = p + (u - t << 2) | 0;
       while (1) {
        if ((c[p >> 2] | 0) != (c[q >> 2] | 0)) break c;
        p = p + 4 | 0;
        if ((p | 0) == (v | 0)) {
         f = o;
         break;
        } else q = q + 4 | 0;
       }
      }
     }
    } else f = o; while (0);
    o = (h & 1) == 0;
    o = (o ? z : g) + ((o ? (h & 255) >>> 1 : c[z >> 2] | 0) << 2) | 0;
    e : do if ((f | 0) != (o | 0)) {
     p = w;
     h = w;
     o = f;
     while (1) {
      f = c[b >> 2] | 0;
      do if (f) {
       g = c[f + 12 >> 2] | 0;
       if ((g | 0) == (c[f + 16 >> 2] | 0)) f = tb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else f = c[g >> 2] | 0;
       if ((f | 0) == -1) {
        c[b >> 2] = 0;
        g = 1;
        break;
       } else {
        g = (c[b >> 2] | 0) == 0;
        break;
       }
      } else g = 1; while (0);
      do if (h) {
       f = c[h + 12 >> 2] | 0;
       if ((f | 0) == (c[h + 16 >> 2] | 0)) f = tb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else f = c[f >> 2] | 0;
       if ((f | 0) != -1) if (g ^ (p | 0) == 0) {
        f = p;
        q = p;
        break;
       } else break e; else {
        c[e >> 2] = 0;
        f = 0;
        Q = 114;
        break;
       }
      } else {
       f = p;
       Q = 114;
      } while (0);
      if ((Q | 0) == 114) {
       Q = 0;
       if (g) break e; else q = 0;
      }
      g = c[b >> 2] | 0;
      h = c[g + 12 >> 2] | 0;
      if ((h | 0) == (c[g + 16 >> 2] | 0)) g = tb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else g = c[h >> 2] | 0;
      if ((g | 0) != (c[o >> 2] | 0)) break e;
      g = c[b >> 2] | 0;
      h = g + 12 | 0;
      p = c[h >> 2] | 0;
      if ((p | 0) == (c[g + 16 >> 2] | 0)) tb[c[(c[g >> 2] | 0) + 40 >> 2] & 63](g) | 0; else c[h >> 2] = p + 4;
      o = o + 4 | 0;
      g = a[X >> 0] | 0;
      w = (g & 1) == 0;
      g = (w ? z : c[y >> 2] | 0) + ((w ? (g & 255) >>> 1 : c[z >> 2] | 0) << 2) | 0;
      if ((o | 0) == (g | 0)) {
       o = g;
       break;
      } else {
       p = f;
       h = q;
      }
     }
    } while (0);
    if (x ? (w = a[X >> 0] | 0, v = (w & 1) == 0, (o | 0) != ((v ? z : c[y >> 2] | 0) + ((v ? (w & 255) >>> 1 : c[z >> 2] | 0) << 2) | 0)) : 0) {
     Q = 126;
     break a;
    }
    break;
   }
  case 4:
   {
    t = c[P >> 2] | 0;
    h = w;
    p = w;
    o = 0;
    f : while (1) {
     f = c[b >> 2] | 0;
     do if (f) {
      g = c[f + 12 >> 2] | 0;
      if ((g | 0) == (c[f + 16 >> 2] | 0)) f = tb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else f = c[g >> 2] | 0;
      if ((f | 0) == -1) {
       c[b >> 2] = 0;
       g = 1;
       break;
      } else {
       g = (c[b >> 2] | 0) == 0;
       break;
      }
     } else g = 1; while (0);
     do if (p) {
      f = c[p + 12 >> 2] | 0;
      if ((f | 0) == (c[p + 16 >> 2] | 0)) f = tb[c[(c[p >> 2] | 0) + 36 >> 2] & 63](p) | 0; else f = c[f >> 2] | 0;
      if ((f | 0) != -1) if (g ^ (h | 0) == 0) {
       f = h;
       q = h;
       break;
      } else break f; else {
       c[e >> 2] = 0;
       f = 0;
       Q = 140;
       break;
      }
     } else {
      f = h;
      Q = 140;
     } while (0);
     if ((Q | 0) == 140) {
      Q = 0;
      if (g) {
       h = f;
       break;
      } else q = 0;
     }
     g = c[b >> 2] | 0;
     h = c[g + 12 >> 2] | 0;
     if ((h | 0) == (c[g + 16 >> 2] | 0)) h = tb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else h = c[h >> 2] | 0;
     if (mb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 2048, h) | 0) {
      g = c[n >> 2] | 0;
      if ((g | 0) == (c[J >> 2] | 0)) {
       Um(m, n, J);
       g = c[n >> 2] | 0;
      }
      c[n >> 2] = g + 4;
      c[g >> 2] = h;
      o = o + 1 | 0;
     } else {
      w = a[T >> 0] | 0;
      if (!((h | 0) == (t | 0) & ((o | 0) != 0 ? (((w & 1) == 0 ? (w & 255) >>> 1 : c[D >> 2] | 0) | 0) != 0 : 0))) {
       h = f;
       break;
      }
      if ((s | 0) == (c[M >> 2] | 0)) {
       Sm(Y, N, M);
       s = c[N >> 2] | 0;
      }
      w = s + 4 | 0;
      c[N >> 2] = w;
      c[s >> 2] = o;
      s = w;
      o = 0;
     }
     g = c[b >> 2] | 0;
     h = g + 12 | 0;
     p = c[h >> 2] | 0;
     if ((p | 0) == (c[g + 16 >> 2] | 0)) {
      tb[c[(c[g >> 2] | 0) + 40 >> 2] & 63](g) | 0;
      h = f;
      p = q;
      continue;
     } else {
      c[h >> 2] = p + 4;
      h = f;
      p = q;
      continue;
     }
    }
    if ((o | 0) != 0 ? (c[Y >> 2] | 0) != (s | 0) : 0) {
     if ((s | 0) == (c[M >> 2] | 0)) {
      Sm(Y, N, M);
      s = c[N >> 2] | 0;
     }
     w = s + 4 | 0;
     c[N >> 2] = w;
     c[s >> 2] = o;
     s = w;
    }
    q = c[L >> 2] | 0;
    if ((q | 0) > 0) {
     o = c[b >> 2] | 0;
     do if (o) {
      f = c[o + 12 >> 2] | 0;
      if ((f | 0) == (c[o + 16 >> 2] | 0)) o = tb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
      if ((o | 0) == -1) {
       c[b >> 2] = 0;
       f = 1;
       break;
      } else {
       f = (c[b >> 2] | 0) == 0;
       break;
      }
     } else f = 1; while (0);
     do if (h) {
      o = c[h + 12 >> 2] | 0;
      if ((o | 0) == (c[h + 16 >> 2] | 0)) o = tb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else o = c[o >> 2] | 0;
      if ((o | 0) != -1) if (f) break; else {
       Q = 180;
       break a;
      } else {
       c[e >> 2] = 0;
       Q = 174;
       break;
      }
     } else Q = 174; while (0);
     if ((Q | 0) == 174) {
      Q = 0;
      if (f) {
       Q = 180;
       break a;
      } else h = 0;
     }
     o = c[b >> 2] | 0;
     f = c[o + 12 >> 2] | 0;
     if ((f | 0) == (c[o + 16 >> 2] | 0)) o = tb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
     if ((o | 0) != (c[K >> 2] | 0)) {
      Q = 180;
      break a;
     }
     o = c[b >> 2] | 0;
     f = o + 12 | 0;
     g = c[f >> 2] | 0;
     if ((g | 0) == (c[o + 16 >> 2] | 0)) tb[c[(c[o >> 2] | 0) + 40 >> 2] & 63](o) | 0; else c[f >> 2] = g + 4;
     if ((q | 0) > 0) {
      p = h;
      g = h;
      t = q;
      while (1) {
       o = c[b >> 2] | 0;
       do if (o) {
        f = c[o + 12 >> 2] | 0;
        if ((f | 0) == (c[o + 16 >> 2] | 0)) o = tb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
        if ((o | 0) == -1) {
         c[b >> 2] = 0;
         f = 1;
         break;
        } else {
         f = (c[b >> 2] | 0) == 0;
         break;
        }
       } else f = 1; while (0);
       do if (g) {
        o = c[g + 12 >> 2] | 0;
        if ((o | 0) == (c[g + 16 >> 2] | 0)) o = tb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else o = c[o >> 2] | 0;
        if ((o | 0) != -1) if (f ^ (p | 0) == 0) {
         o = p;
         q = p;
         break;
        } else {
         Q = 204;
         break a;
        } else {
         c[e >> 2] = 0;
         o = 0;
         Q = 198;
         break;
        }
       } else {
        o = p;
        Q = 198;
       } while (0);
       if ((Q | 0) == 198) {
        Q = 0;
        if (f) {
         Q = 204;
         break a;
        } else q = 0;
       }
       f = c[b >> 2] | 0;
       g = c[f + 12 >> 2] | 0;
       if ((g | 0) == (c[f + 16 >> 2] | 0)) f = tb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else f = c[g >> 2] | 0;
       if (!(mb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 2048, f) | 0)) {
        Q = 204;
        break a;
       }
       if ((c[n >> 2] | 0) == (c[J >> 2] | 0)) Um(m, n, J);
       f = c[b >> 2] | 0;
       g = c[f + 12 >> 2] | 0;
       if ((g | 0) == (c[f + 16 >> 2] | 0)) f = tb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else f = c[g >> 2] | 0;
       g = c[n >> 2] | 0;
       c[n >> 2] = g + 4;
       c[g >> 2] = f;
       f = t;
       t = t + -1 | 0;
       c[L >> 2] = t;
       g = c[b >> 2] | 0;
       h = g + 12 | 0;
       p = c[h >> 2] | 0;
       if ((p | 0) == (c[g + 16 >> 2] | 0)) tb[c[(c[g >> 2] | 0) + 40 >> 2] & 63](g) | 0; else c[h >> 2] = p + 4;
       if ((f | 0) <= 1) break; else {
        p = o;
        g = q;
       }
      }
     }
    }
    if ((c[n >> 2] | 0) == (c[m >> 2] | 0)) {
     Q = 215;
     break a;
    }
    break;
   }
  default:
   {}
  } while (0);
  g : do if ((Q | 0) == 30) while (1) {
   Q = 0;
   f = c[b >> 2] | 0;
   do if (f) {
    g = c[f + 12 >> 2] | 0;
    if ((g | 0) == (c[f + 16 >> 2] | 0)) f = tb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else f = c[g >> 2] | 0;
    if ((f | 0) == -1) {
     c[b >> 2] = 0;
     g = 1;
     break;
    } else {
     g = (c[b >> 2] | 0) == 0;
     break;
    }
   } else g = 1; while (0);
   do if (h) {
    f = c[h + 12 >> 2] | 0;
    if ((f | 0) == (c[h + 16 >> 2] | 0)) f = tb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else f = c[f >> 2] | 0;
    if ((f | 0) != -1) if (g ^ (o | 0) == 0) {
     p = o;
     h = o;
     break;
    } else break g; else {
     c[e >> 2] = 0;
     o = 0;
     Q = 43;
     break;
    }
   } else Q = 43; while (0);
   if ((Q | 0) == 43) {
    Q = 0;
    if (g) break g; else {
     p = o;
     h = 0;
    }
   }
   o = c[b >> 2] | 0;
   f = c[o + 12 >> 2] | 0;
   if ((f | 0) == (c[o + 16 >> 2] | 0)) o = tb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
   if (!(mb[c[(c[l >> 2] | 0) + 12 >> 2] & 31](l, 8192, o) | 0)) break g;
   o = c[b >> 2] | 0;
   f = o + 12 | 0;
   g = c[f >> 2] | 0;
   if ((g | 0) == (c[o + 16 >> 2] | 0)) o = tb[c[(c[o >> 2] | 0) + 40 >> 2] & 63](o) | 0; else {
    c[f >> 2] = g + 4;
    o = c[g >> 2] | 0;
   }
   lf(W, o);
   o = p;
   Q = 30;
  } while (0);
  E = E + 1 | 0;
  if (E >>> 0 >= 4) {
   Q = 217;
   break;
  }
 }
 h : do if ((Q | 0) == 28) {
  c[j >> 2] = c[j >> 2] | 4;
  f = 0;
 } else if ((Q | 0) == 86) {
  c[j >> 2] = c[j >> 2] | 4;
  f = 0;
 } else if ((Q | 0) == 126) {
  c[j >> 2] = c[j >> 2] | 4;
  f = 0;
 } else if ((Q | 0) == 180) {
  c[j >> 2] = c[j >> 2] | 4;
  f = 0;
 } else if ((Q | 0) == 204) {
  c[j >> 2] = c[j >> 2] | 4;
  f = 0;
 } else if ((Q | 0) == 215) {
  c[j >> 2] = c[j >> 2] | 4;
  f = 0;
 } else if ((Q | 0) == 217) {
  i : do if (r) {
   p = r + 4 | 0;
   q = r + 8 | 0;
   h = 1;
   j : while (1) {
    o = a[r >> 0] | 0;
    if (!(o & 1)) o = (o & 255) >>> 1; else o = c[p >> 2] | 0;
    if (h >>> 0 >= o >>> 0) break i;
    o = c[b >> 2] | 0;
    do if (o) {
     f = c[o + 12 >> 2] | 0;
     if ((f | 0) == (c[o + 16 >> 2] | 0)) o = tb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
     if ((o | 0) == -1) {
      c[b >> 2] = 0;
      g = 1;
      break;
     } else {
      g = (c[b >> 2] | 0) == 0;
      break;
     }
    } else g = 1; while (0);
    o = c[e >> 2] | 0;
    do if (o) {
     f = c[o + 12 >> 2] | 0;
     if ((f | 0) == (c[o + 16 >> 2] | 0)) o = tb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
     if ((o | 0) != -1) if (g) break; else break j; else {
      c[e >> 2] = 0;
      Q = 236;
      break;
     }
    } else Q = 236; while (0);
    if ((Q | 0) == 236 ? (Q = 0, g) : 0) break;
    o = c[b >> 2] | 0;
    f = c[o + 12 >> 2] | 0;
    if ((f | 0) == (c[o + 16 >> 2] | 0)) o = tb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else o = c[f >> 2] | 0;
    if (!(a[r >> 0] & 1)) f = p; else f = c[q >> 2] | 0;
    if ((o | 0) != (c[f + (h << 2) >> 2] | 0)) break;
    o = h + 1 | 0;
    f = c[b >> 2] | 0;
    g = f + 12 | 0;
    h = c[g >> 2] | 0;
    if ((h | 0) == (c[f + 16 >> 2] | 0)) {
     tb[c[(c[f >> 2] | 0) + 40 >> 2] & 63](f) | 0;
     h = o;
     continue;
    } else {
     c[g >> 2] = h + 4;
     h = o;
     continue;
    }
   }
   c[j >> 2] = c[j >> 2] | 4;
   f = 0;
   break h;
  } while (0);
  o = c[Y >> 2] | 0;
  if ((o | 0) != (s | 0) ? (c[R >> 2] = 0, Sj(T, o, s, R), (c[R >> 2] | 0) != 0) : 0) {
   c[j >> 2] = c[j >> 2] | 4;
   f = 0;
  } else f = 1;
 } while (0);
 gf(W);
 gf(U);
 gf(V);
 gf(X);
 Xe(T);
 o = c[Y >> 2] | 0;
 c[Y >> 2] = 0;
 if (o) pb[c[S >> 2] & 127](o);
 i = Z;
 return f | 0;
}

function Nd(e, f, j) {
 e = e | 0;
 f = f | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0.0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0;
 P = i;
 i = i + 304 | 0;
 H = P + 16 | 0;
 J = P + 8 | 0;
 I = P + 33 | 0;
 K = P;
 y = P + 32 | 0;
 if ((c[e + 76 >> 2] | 0) > -1) O = rd(e) | 0; else O = 0;
 k = a[f >> 0] | 0;
 a : do if (k << 24 >> 24) {
  L = e + 4 | 0;
  M = e + 100 | 0;
  G = e + 108 | 0;
  z = e + 8 | 0;
  A = I + 10 | 0;
  B = I + 33 | 0;
  C = J + 4 | 0;
  E = I + 46 | 0;
  F = I + 94 | 0;
  m = k;
  k = 0;
  n = f;
  s = 0;
  l = 0;
  f = 0;
  b : while (1) {
   c : do if (!(Kc(m & 255) | 0)) {
    m = (a[n >> 0] | 0) == 37;
    d : do if (m) {
     q = n + 1 | 0;
     o = a[q >> 0] | 0;
     e : do switch (o << 24 >> 24) {
     case 37:
      break d;
     case 42:
      {
       x = 0;
       o = n + 2 | 0;
       break;
      }
     default:
      {
       o = (o & 255) + -48 | 0;
       if (o >>> 0 < 10 ? (a[n + 2 >> 0] | 0) == 36 : 0) {
        c[H >> 2] = c[j >> 2];
        while (1) {
         x = (c[H >> 2] | 0) + (4 - 1) & ~(4 - 1);
         m = c[x >> 2] | 0;
         c[H >> 2] = x + 4;
         if (o >>> 0 > 1) o = o + -1 | 0; else break;
        }
        x = m;
        o = n + 3 | 0;
        break e;
       }
       o = (c[j >> 2] | 0) + (4 - 1) & ~(4 - 1);
       x = c[o >> 2] | 0;
       c[j >> 2] = o + 4;
       o = q;
      }
     } while (0);
     m = a[o >> 0] | 0;
     n = m & 255;
     if ((n + -48 | 0) >>> 0 < 10) {
      m = 0;
      while (1) {
       q = (m * 10 | 0) + -48 + n | 0;
       o = o + 1 | 0;
       m = a[o >> 0] | 0;
       n = m & 255;
       if ((n + -48 | 0) >>> 0 >= 10) break; else m = q;
      }
     } else q = 0;
     if (m << 24 >> 24 == 109) {
      o = o + 1 | 0;
      r = a[o >> 0] | 0;
      m = (x | 0) != 0 & 1;
      l = 0;
      f = 0;
     } else {
      r = m;
      m = 0;
     }
     n = o + 1 | 0;
     switch (r & 255 | 0) {
     case 104:
      {
       w = (a[n >> 0] | 0) == 104;
       n = w ? o + 2 | 0 : n;
       o = w ? -2 : -1;
       break;
      }
     case 108:
      {
       w = (a[n >> 0] | 0) == 108;
       n = w ? o + 2 | 0 : n;
       o = w ? 3 : 1;
       break;
      }
     case 106:
      {
       o = 3;
       break;
      }
     case 116:
     case 122:
      {
       o = 1;
       break;
      }
     case 76:
      {
       o = 2;
       break;
      }
     case 110:
     case 112:
     case 67:
     case 83:
     case 91:
     case 99:
     case 115:
     case 88:
     case 71:
     case 70:
     case 69:
     case 65:
     case 103:
     case 102:
     case 101:
     case 97:
     case 120:
     case 117:
     case 111:
     case 105:
     case 100:
      {
       n = o;
       o = 0;
       break;
      }
     default:
      {
       N = 152;
       break b;
      }
     }
     r = d[n >> 0] | 0;
     t = (r & 47 | 0) == 3;
     r = t ? r | 32 : r;
     t = t ? 1 : o;
     switch (r | 0) {
     case 99:
      {
       w = s;
       v = (q | 0) < 1 ? 1 : q;
       break;
      }
     case 91:
      {
       w = s;
       v = q;
       break;
      }
     case 110:
      {
       if (!x) {
        o = s;
        break c;
       }
       switch (t | 0) {
       case -2:
        {
         a[x >> 0] = s;
         o = s;
         break c;
        }
       case -1:
        {
         b[x >> 1] = s;
         o = s;
         break c;
        }
       case 0:
        {
         c[x >> 2] = s;
         o = s;
         break c;
        }
       case 1:
        {
         c[x >> 2] = s;
         o = s;
         break c;
        }
       case 3:
        {
         o = x;
         c[o >> 2] = s;
         c[o + 4 >> 2] = ((s | 0) < 0) << 31 >> 31;
         o = s;
         break c;
        }
       default:
        {
         o = s;
         break c;
        }
       }
      }
     default:
      {
       Qc(e, 0);
       do {
        o = c[L >> 2] | 0;
        if (o >>> 0 < (c[M >> 2] | 0) >>> 0) {
         c[L >> 2] = o + 1;
         o = d[o >> 0] | 0;
        } else o = Rc(e) | 0;
       } while ((Kc(o) | 0) != 0);
       o = c[L >> 2] | 0;
       if (c[M >> 2] | 0) {
        o = o + -1 | 0;
        c[L >> 2] = o;
       }
       w = (c[G >> 2] | 0) + s + o - (c[z >> 2] | 0) | 0;
       v = q;
      }
     }
     Qc(e, v);
     o = c[L >> 2] | 0;
     q = c[M >> 2] | 0;
     if (o >>> 0 < q >>> 0) c[L >> 2] = o + 1; else {
      if ((Rc(e) | 0) < 0) {
       N = 152;
       break b;
      }
      q = c[M >> 2] | 0;
     }
     if (q) c[L >> 2] = (c[L >> 2] | 0) + -1;
     f : do switch (r | 0) {
     case 91:
     case 99:
     case 115:
      {
       u = (r | 0) == 99;
       g : do if ((r & 239 | 0) == 99) {
        ho(I | 0, -1, 257) | 0;
        a[I >> 0] = 0;
        if ((r | 0) == 115) {
         a[B >> 0] = 0;
         a[A >> 0] = 0;
         a[A + 1 >> 0] = 0;
         a[A + 2 >> 0] = 0;
         a[A + 3 >> 0] = 0;
         a[A + 4 >> 0] = 0;
        }
       } else {
        Q = n + 1 | 0;
        s = (a[Q >> 0] | 0) == 94;
        o = s & 1;
        r = s ? Q : n;
        n = s ? n + 2 | 0 : Q;
        ho(I | 0, s & 1 | 0, 257) | 0;
        a[I >> 0] = 0;
        switch (a[n >> 0] | 0) {
        case 45:
         {
          s = (o ^ 1) & 255;
          a[E >> 0] = s;
          n = r + 2 | 0;
          break;
         }
        case 93:
         {
          s = (o ^ 1) & 255;
          a[F >> 0] = s;
          n = r + 2 | 0;
          break;
         }
        default:
         s = (o ^ 1) & 255;
        }
        while (1) {
         o = a[n >> 0] | 0;
         h : do switch (o << 24 >> 24) {
         case 0:
          {
           N = 152;
           break b;
          }
         case 93:
          break g;
         case 45:
          {
           r = n + 1 | 0;
           o = a[r >> 0] | 0;
           switch (o << 24 >> 24) {
           case 93:
           case 0:
            {
             o = 45;
             break h;
            }
           default:
            {}
           }
           n = a[n + -1 >> 0] | 0;
           if ((n & 255) < (o & 255)) {
            n = n & 255;
            do {
             n = n + 1 | 0;
             a[I + n >> 0] = s;
             o = a[r >> 0] | 0;
            } while ((n | 0) < (o & 255 | 0));
            n = r;
           } else n = r;
           break;
          }
         default:
          {}
         } while (0);
         a[I + ((o & 255) + 1) >> 0] = s;
         n = n + 1 | 0;
        }
       } while (0);
       r = u ? v + 1 | 0 : 31;
       s = (t | 0) == 1;
       t = (m | 0) != 0;
       i : do if (s) {
        if (t) {
         f = ke(r << 2) | 0;
         if (!f) {
          l = 0;
          N = 152;
          break b;
         }
        } else f = x;
        c[J >> 2] = 0;
        c[C >> 2] = 0;
        l = 0;
        j : while (1) {
         q = (f | 0) == 0;
         do {
          k : while (1) {
           o = c[L >> 2] | 0;
           if (o >>> 0 < (c[M >> 2] | 0) >>> 0) {
            c[L >> 2] = o + 1;
            o = d[o >> 0] | 0;
           } else o = Rc(e) | 0;
           if (!(a[I + (o + 1) >> 0] | 0)) break j;
           a[y >> 0] = o;
           switch (id(K, y, 1, J) | 0) {
           case -1:
            {
             l = 0;
             N = 152;
             break b;
            }
           case -2:
            break;
           default:
            break k;
           }
          }
          if (!q) {
           c[f + (l << 2) >> 2] = c[K >> 2];
           l = l + 1 | 0;
          }
         } while (!(t & (l | 0) == (r | 0)));
         l = r << 1 | 1;
         o = ne(f, l << 2) | 0;
         if (!o) {
          l = 0;
          N = 152;
          break b;
         }
         Q = r;
         r = l;
         f = o;
         l = Q;
        }
        if (!(jd(J) | 0)) {
         l = 0;
         N = 152;
         break b;
        } else {
         q = l;
         l = 0;
        }
       } else {
        if (t) {
         l = ke(r) | 0;
         if (!l) {
          l = 0;
          f = 0;
          N = 152;
          break b;
         } else o = 0;
         while (1) {
          do {
           f = c[L >> 2] | 0;
           if (f >>> 0 < (c[M >> 2] | 0) >>> 0) {
            c[L >> 2] = f + 1;
            f = d[f >> 0] | 0;
           } else f = Rc(e) | 0;
           if (!(a[I + (f + 1) >> 0] | 0)) {
            q = o;
            f = 0;
            break i;
           }
           a[l + o >> 0] = f;
           o = o + 1 | 0;
          } while ((o | 0) != (r | 0));
          f = r << 1 | 1;
          o = ne(l, f) | 0;
          if (!o) {
           f = 0;
           N = 152;
           break b;
          } else {
           Q = r;
           r = f;
           l = o;
           o = Q;
          }
         }
        }
        if (!x) {
         l = q;
         while (1) {
          f = c[L >> 2] | 0;
          if (f >>> 0 < l >>> 0) {
           c[L >> 2] = f + 1;
           f = d[f >> 0] | 0;
          } else f = Rc(e) | 0;
          if (!(a[I + (f + 1) >> 0] | 0)) {
           q = 0;
           l = 0;
           f = 0;
           break i;
          }
          l = c[M >> 2] | 0;
         }
        } else {
         l = 0;
         while (1) {
          f = c[L >> 2] | 0;
          if (f >>> 0 < q >>> 0) {
           c[L >> 2] = f + 1;
           f = d[f >> 0] | 0;
          } else f = Rc(e) | 0;
          if (!(a[I + (f + 1) >> 0] | 0)) {
           q = l;
           l = x;
           f = 0;
           break i;
          }
          a[x + l >> 0] = f;
          q = c[M >> 2] | 0;
          l = l + 1 | 0;
         }
        }
       } while (0);
       o = c[L >> 2] | 0;
       if (c[M >> 2] | 0) {
        o = o + -1 | 0;
        c[L >> 2] = o;
       }
       o = o - (c[z >> 2] | 0) + (c[G >> 2] | 0) | 0;
       if (!o) break b;
       if (!((o | 0) == (v | 0) | u ^ 1)) break b;
       do if (t) if (s) {
        c[x >> 2] = f;
        break;
       } else {
        c[x >> 2] = l;
        break;
       } while (0);
       if (!u) {
        if (f) c[f + (q << 2) >> 2] = 0;
        if (!l) {
         l = 0;
         break f;
        }
        a[l + q >> 0] = 0;
       }
       break;
      }
     case 120:
     case 88:
     case 112:
      {
       o = 16;
       N = 134;
       break;
      }
     case 111:
      {
       o = 8;
       N = 134;
       break;
      }
     case 117:
     case 100:
      {
       o = 10;
       N = 134;
       break;
      }
     case 105:
      {
       o = 0;
       N = 134;
       break;
      }
     case 71:
     case 103:
     case 70:
     case 102:
     case 69:
     case 101:
     case 65:
     case 97:
      {
       p = +Oc(e, t, 0);
       if ((c[G >> 2] | 0) == ((c[z >> 2] | 0) - (c[L >> 2] | 0) | 0)) break b;
       if (x) switch (t | 0) {
       case 0:
        {
         g[x >> 2] = p;
         break f;
        }
       case 1:
        {
         h[x >> 3] = p;
         break f;
        }
       case 2:
        {
         h[x >> 3] = p;
         break f;
        }
       default:
        break f;
       }
       break;
      }
     default:
      {}
     } while (0);
     l : do if ((N | 0) == 134) {
      N = 0;
      o = Pc(e, o, 0, -1, -1) | 0;
      if ((c[G >> 2] | 0) == ((c[z >> 2] | 0) - (c[L >> 2] | 0) | 0)) break b;
      if ((x | 0) != 0 & (r | 0) == 112) {
       c[x >> 2] = o;
       break;
      }
      if (x) switch (t | 0) {
      case -2:
       {
        a[x >> 0] = o;
        break l;
       }
      case -1:
       {
        b[x >> 1] = o;
        break l;
       }
      case 0:
       {
        c[x >> 2] = o;
        break l;
       }
      case 1:
       {
        c[x >> 2] = o;
        break l;
       }
      case 3:
       {
        Q = x;
        c[Q >> 2] = o;
        c[Q + 4 >> 2] = D;
        break l;
       }
      default:
       break l;
      }
     } while (0);
     k = ((x | 0) != 0 & 1) + k | 0;
     o = (c[G >> 2] | 0) + w + (c[L >> 2] | 0) - (c[z >> 2] | 0) | 0;
     break c;
    } while (0);
    n = n + (m & 1) | 0;
    Qc(e, 0);
    m = c[L >> 2] | 0;
    if (m >>> 0 < (c[M >> 2] | 0) >>> 0) {
     c[L >> 2] = m + 1;
     m = d[m >> 0] | 0;
    } else m = Rc(e) | 0;
    if ((m | 0) != (d[n >> 0] | 0)) {
     N = 21;
     break b;
    }
    o = s + 1 | 0;
   } else {
    while (1) {
     m = n + 1 | 0;
     if (!(Kc(d[m >> 0] | 0) | 0)) break; else n = m;
    }
    Qc(e, 0);
    do {
     m = c[L >> 2] | 0;
     if (m >>> 0 < (c[M >> 2] | 0) >>> 0) {
      c[L >> 2] = m + 1;
      m = d[m >> 0] | 0;
     } else m = Rc(e) | 0;
    } while ((Kc(m) | 0) != 0);
    m = c[L >> 2] | 0;
    if (c[M >> 2] | 0) {
     m = m + -1 | 0;
     c[L >> 2] = m;
    }
    o = (c[G >> 2] | 0) + s + m - (c[z >> 2] | 0) | 0;
   } while (0);
   n = n + 1 | 0;
   m = a[n >> 0] | 0;
   if (!(m << 24 >> 24)) break a; else s = o;
  }
  if ((N | 0) == 21) {
   if (c[M >> 2] | 0) c[L >> 2] = (c[L >> 2] | 0) + -1;
   if ((k | 0) != 0 | (m | 0) > -1) break; else {
    k = 0;
    N = 153;
   }
  } else if ((N | 0) == 152) if (!k) {
   k = m;
   N = 153;
  }
  if ((N | 0) == 153) {
   m = k;
   k = -1;
  }
  if (m) {
   le(l);
   le(f);
  }
 } else k = 0; while (0);
 if (O) sd(e);
 i = P;
 return k | 0;
}

function le(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 if (!a) return;
 b = a + -8 | 0;
 i = c[1538] | 0;
 if (b >>> 0 < i >>> 0) za();
 d = c[a + -4 >> 2] | 0;
 e = d & 3;
 if ((e | 0) == 1) za();
 o = d & -8;
 q = a + (o + -8) | 0;
 do if (!(d & 1)) {
  b = c[b >> 2] | 0;
  if (!e) return;
  j = -8 - b | 0;
  l = a + j | 0;
  m = b + o | 0;
  if (l >>> 0 < i >>> 0) za();
  if ((l | 0) == (c[1539] | 0)) {
   b = a + (o + -4) | 0;
   d = c[b >> 2] | 0;
   if ((d & 3 | 0) != 3) {
    u = l;
    g = m;
    break;
   }
   c[1536] = m;
   c[b >> 2] = d & -2;
   c[a + (j + 4) >> 2] = m | 1;
   c[q >> 2] = m;
   return;
  }
  f = b >>> 3;
  if (b >>> 0 < 256) {
   e = c[a + (j + 8) >> 2] | 0;
   d = c[a + (j + 12) >> 2] | 0;
   b = 6176 + (f << 1 << 2) | 0;
   if ((e | 0) != (b | 0)) {
    if (e >>> 0 < i >>> 0) za();
    if ((c[e + 12 >> 2] | 0) != (l | 0)) za();
   }
   if ((d | 0) == (e | 0)) {
    c[1534] = c[1534] & ~(1 << f);
    u = l;
    g = m;
    break;
   }
   if ((d | 0) != (b | 0)) {
    if (d >>> 0 < i >>> 0) za();
    b = d + 8 | 0;
    if ((c[b >> 2] | 0) == (l | 0)) h = b; else za();
   } else h = d + 8 | 0;
   c[e + 12 >> 2] = d;
   c[h >> 2] = e;
   u = l;
   g = m;
   break;
  }
  h = c[a + (j + 24) >> 2] | 0;
  e = c[a + (j + 12) >> 2] | 0;
  do if ((e | 0) == (l | 0)) {
   d = a + (j + 20) | 0;
   b = c[d >> 2] | 0;
   if (!b) {
    d = a + (j + 16) | 0;
    b = c[d >> 2] | 0;
    if (!b) {
     k = 0;
     break;
    }
   }
   while (1) {
    e = b + 20 | 0;
    f = c[e >> 2] | 0;
    if (f) {
     b = f;
     d = e;
     continue;
    }
    e = b + 16 | 0;
    f = c[e >> 2] | 0;
    if (!f) break; else {
     b = f;
     d = e;
    }
   }
   if (d >>> 0 < i >>> 0) za(); else {
    c[d >> 2] = 0;
    k = b;
    break;
   }
  } else {
   f = c[a + (j + 8) >> 2] | 0;
   if (f >>> 0 < i >>> 0) za();
   b = f + 12 | 0;
   if ((c[b >> 2] | 0) != (l | 0)) za();
   d = e + 8 | 0;
   if ((c[d >> 2] | 0) == (l | 0)) {
    c[b >> 2] = e;
    c[d >> 2] = f;
    k = e;
    break;
   } else za();
  } while (0);
  if (h) {
   b = c[a + (j + 28) >> 2] | 0;
   d = 6440 + (b << 2) | 0;
   if ((l | 0) == (c[d >> 2] | 0)) {
    c[d >> 2] = k;
    if (!k) {
     c[1535] = c[1535] & ~(1 << b);
     u = l;
     g = m;
     break;
    }
   } else {
    if (h >>> 0 < (c[1538] | 0) >>> 0) za();
    b = h + 16 | 0;
    if ((c[b >> 2] | 0) == (l | 0)) c[b >> 2] = k; else c[h + 20 >> 2] = k;
    if (!k) {
     u = l;
     g = m;
     break;
    }
   }
   d = c[1538] | 0;
   if (k >>> 0 < d >>> 0) za();
   c[k + 24 >> 2] = h;
   b = c[a + (j + 16) >> 2] | 0;
   do if (b) if (b >>> 0 < d >>> 0) za(); else {
    c[k + 16 >> 2] = b;
    c[b + 24 >> 2] = k;
    break;
   } while (0);
   b = c[a + (j + 20) >> 2] | 0;
   if (b) if (b >>> 0 < (c[1538] | 0) >>> 0) za(); else {
    c[k + 20 >> 2] = b;
    c[b + 24 >> 2] = k;
    u = l;
    g = m;
    break;
   } else {
    u = l;
    g = m;
   }
  } else {
   u = l;
   g = m;
  }
 } else {
  u = b;
  g = o;
 } while (0);
 if (u >>> 0 >= q >>> 0) za();
 b = a + (o + -4) | 0;
 d = c[b >> 2] | 0;
 if (!(d & 1)) za();
 if (!(d & 2)) {
  if ((q | 0) == (c[1540] | 0)) {
   t = (c[1537] | 0) + g | 0;
   c[1537] = t;
   c[1540] = u;
   c[u + 4 >> 2] = t | 1;
   if ((u | 0) != (c[1539] | 0)) return;
   c[1539] = 0;
   c[1536] = 0;
   return;
  }
  if ((q | 0) == (c[1539] | 0)) {
   t = (c[1536] | 0) + g | 0;
   c[1536] = t;
   c[1539] = u;
   c[u + 4 >> 2] = t | 1;
   c[u + t >> 2] = t;
   return;
  }
  g = (d & -8) + g | 0;
  f = d >>> 3;
  do if (d >>> 0 >= 256) {
   h = c[a + (o + 16) >> 2] | 0;
   b = c[a + (o | 4) >> 2] | 0;
   do if ((b | 0) == (q | 0)) {
    d = a + (o + 12) | 0;
    b = c[d >> 2] | 0;
    if (!b) {
     d = a + (o + 8) | 0;
     b = c[d >> 2] | 0;
     if (!b) {
      p = 0;
      break;
     }
    }
    while (1) {
     e = b + 20 | 0;
     f = c[e >> 2] | 0;
     if (f) {
      b = f;
      d = e;
      continue;
     }
     e = b + 16 | 0;
     f = c[e >> 2] | 0;
     if (!f) break; else {
      b = f;
      d = e;
     }
    }
    if (d >>> 0 < (c[1538] | 0) >>> 0) za(); else {
     c[d >> 2] = 0;
     p = b;
     break;
    }
   } else {
    d = c[a + o >> 2] | 0;
    if (d >>> 0 < (c[1538] | 0) >>> 0) za();
    e = d + 12 | 0;
    if ((c[e >> 2] | 0) != (q | 0)) za();
    f = b + 8 | 0;
    if ((c[f >> 2] | 0) == (q | 0)) {
     c[e >> 2] = b;
     c[f >> 2] = d;
     p = b;
     break;
    } else za();
   } while (0);
   if (h) {
    b = c[a + (o + 20) >> 2] | 0;
    d = 6440 + (b << 2) | 0;
    if ((q | 0) == (c[d >> 2] | 0)) {
     c[d >> 2] = p;
     if (!p) {
      c[1535] = c[1535] & ~(1 << b);
      break;
     }
    } else {
     if (h >>> 0 < (c[1538] | 0) >>> 0) za();
     b = h + 16 | 0;
     if ((c[b >> 2] | 0) == (q | 0)) c[b >> 2] = p; else c[h + 20 >> 2] = p;
     if (!p) break;
    }
    d = c[1538] | 0;
    if (p >>> 0 < d >>> 0) za();
    c[p + 24 >> 2] = h;
    b = c[a + (o + 8) >> 2] | 0;
    do if (b) if (b >>> 0 < d >>> 0) za(); else {
     c[p + 16 >> 2] = b;
     c[b + 24 >> 2] = p;
     break;
    } while (0);
    b = c[a + (o + 12) >> 2] | 0;
    if (b) if (b >>> 0 < (c[1538] | 0) >>> 0) za(); else {
     c[p + 20 >> 2] = b;
     c[b + 24 >> 2] = p;
     break;
    }
   }
  } else {
   e = c[a + o >> 2] | 0;
   d = c[a + (o | 4) >> 2] | 0;
   b = 6176 + (f << 1 << 2) | 0;
   if ((e | 0) != (b | 0)) {
    if (e >>> 0 < (c[1538] | 0) >>> 0) za();
    if ((c[e + 12 >> 2] | 0) != (q | 0)) za();
   }
   if ((d | 0) == (e | 0)) {
    c[1534] = c[1534] & ~(1 << f);
    break;
   }
   if ((d | 0) != (b | 0)) {
    if (d >>> 0 < (c[1538] | 0) >>> 0) za();
    b = d + 8 | 0;
    if ((c[b >> 2] | 0) == (q | 0)) n = b; else za();
   } else n = d + 8 | 0;
   c[e + 12 >> 2] = d;
   c[n >> 2] = e;
  } while (0);
  c[u + 4 >> 2] = g | 1;
  c[u + g >> 2] = g;
  if ((u | 0) == (c[1539] | 0)) {
   c[1536] = g;
   return;
  }
 } else {
  c[b >> 2] = d & -2;
  c[u + 4 >> 2] = g | 1;
  c[u + g >> 2] = g;
 }
 b = g >>> 3;
 if (g >>> 0 < 256) {
  d = b << 1;
  f = 6176 + (d << 2) | 0;
  e = c[1534] | 0;
  b = 1 << b;
  if (e & b) {
   b = 6176 + (d + 2 << 2) | 0;
   d = c[b >> 2] | 0;
   if (d >>> 0 < (c[1538] | 0) >>> 0) za(); else {
    r = b;
    s = d;
   }
  } else {
   c[1534] = e | b;
   r = 6176 + (d + 2 << 2) | 0;
   s = f;
  }
  c[r >> 2] = u;
  c[s + 12 >> 2] = u;
  c[u + 8 >> 2] = s;
  c[u + 12 >> 2] = f;
  return;
 }
 b = g >>> 8;
 if (b) if (g >>> 0 > 16777215) f = 31; else {
  r = (b + 1048320 | 0) >>> 16 & 8;
  s = b << r;
  q = (s + 520192 | 0) >>> 16 & 4;
  s = s << q;
  f = (s + 245760 | 0) >>> 16 & 2;
  f = 14 - (q | r | f) + (s << f >>> 15) | 0;
  f = g >>> (f + 7 | 0) & 1 | f << 1;
 } else f = 0;
 b = 6440 + (f << 2) | 0;
 c[u + 28 >> 2] = f;
 c[u + 20 >> 2] = 0;
 c[u + 16 >> 2] = 0;
 d = c[1535] | 0;
 e = 1 << f;
 a : do if (d & e) {
  b = c[b >> 2] | 0;
  b : do if ((c[b + 4 >> 2] & -8 | 0) != (g | 0)) {
   f = g << ((f | 0) == 31 ? 0 : 25 - (f >>> 1) | 0);
   while (1) {
    d = b + 16 + (f >>> 31 << 2) | 0;
    e = c[d >> 2] | 0;
    if (!e) break;
    if ((c[e + 4 >> 2] & -8 | 0) == (g | 0)) {
     t = e;
     break b;
    } else {
     f = f << 1;
     b = e;
    }
   }
   if (d >>> 0 < (c[1538] | 0) >>> 0) za(); else {
    c[d >> 2] = u;
    c[u + 24 >> 2] = b;
    c[u + 12 >> 2] = u;
    c[u + 8 >> 2] = u;
    break a;
   }
  } else t = b; while (0);
  b = t + 8 | 0;
  d = c[b >> 2] | 0;
  s = c[1538] | 0;
  if (d >>> 0 >= s >>> 0 & t >>> 0 >= s >>> 0) {
   c[d + 12 >> 2] = u;
   c[b >> 2] = u;
   c[u + 8 >> 2] = d;
   c[u + 12 >> 2] = t;
   c[u + 24 >> 2] = 0;
   break;
  } else za();
 } else {
  c[1535] = d | e;
  c[b >> 2] = u;
  c[u + 24 >> 2] = b;
  c[u + 12 >> 2] = u;
  c[u + 8 >> 2] = u;
 } while (0);
 u = (c[1542] | 0) + -1 | 0;
 c[1542] = u;
 if (!u) b = 6592; else return;
 while (1) {
  b = c[b >> 2] | 0;
  if (!b) break; else b = b + 8 | 0;
 }
 c[1542] = -1;
 return;
}

function pe(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 q = a + b | 0;
 d = c[a + 4 >> 2] | 0;
 do if (!(d & 1)) {
  k = c[a >> 2] | 0;
  if (!(d & 3)) return;
  n = a + (0 - k) | 0;
  m = k + b | 0;
  j = c[1538] | 0;
  if (n >>> 0 < j >>> 0) za();
  if ((n | 0) == (c[1539] | 0)) {
   e = a + (b + 4) | 0;
   d = c[e >> 2] | 0;
   if ((d & 3 | 0) != 3) {
    t = n;
    h = m;
    break;
   }
   c[1536] = m;
   c[e >> 2] = d & -2;
   c[a + (4 - k) >> 2] = m | 1;
   c[q >> 2] = m;
   return;
  }
  g = k >>> 3;
  if (k >>> 0 < 256) {
   f = c[a + (8 - k) >> 2] | 0;
   e = c[a + (12 - k) >> 2] | 0;
   d = 6176 + (g << 1 << 2) | 0;
   if ((f | 0) != (d | 0)) {
    if (f >>> 0 < j >>> 0) za();
    if ((c[f + 12 >> 2] | 0) != (n | 0)) za();
   }
   if ((e | 0) == (f | 0)) {
    c[1534] = c[1534] & ~(1 << g);
    t = n;
    h = m;
    break;
   }
   if ((e | 0) != (d | 0)) {
    if (e >>> 0 < j >>> 0) za();
    d = e + 8 | 0;
    if ((c[d >> 2] | 0) == (n | 0)) i = d; else za();
   } else i = e + 8 | 0;
   c[f + 12 >> 2] = e;
   c[i >> 2] = f;
   t = n;
   h = m;
   break;
  }
  i = c[a + (24 - k) >> 2] | 0;
  f = c[a + (12 - k) >> 2] | 0;
  do if ((f | 0) == (n | 0)) {
   f = 16 - k | 0;
   e = a + (f + 4) | 0;
   d = c[e >> 2] | 0;
   if (!d) {
    e = a + f | 0;
    d = c[e >> 2] | 0;
    if (!d) {
     l = 0;
     break;
    }
   }
   while (1) {
    f = d + 20 | 0;
    g = c[f >> 2] | 0;
    if (g) {
     d = g;
     e = f;
     continue;
    }
    f = d + 16 | 0;
    g = c[f >> 2] | 0;
    if (!g) break; else {
     d = g;
     e = f;
    }
   }
   if (e >>> 0 < j >>> 0) za(); else {
    c[e >> 2] = 0;
    l = d;
    break;
   }
  } else {
   g = c[a + (8 - k) >> 2] | 0;
   if (g >>> 0 < j >>> 0) za();
   d = g + 12 | 0;
   if ((c[d >> 2] | 0) != (n | 0)) za();
   e = f + 8 | 0;
   if ((c[e >> 2] | 0) == (n | 0)) {
    c[d >> 2] = f;
    c[e >> 2] = g;
    l = f;
    break;
   } else za();
  } while (0);
  if (i) {
   d = c[a + (28 - k) >> 2] | 0;
   e = 6440 + (d << 2) | 0;
   if ((n | 0) == (c[e >> 2] | 0)) {
    c[e >> 2] = l;
    if (!l) {
     c[1535] = c[1535] & ~(1 << d);
     t = n;
     h = m;
     break;
    }
   } else {
    if (i >>> 0 < (c[1538] | 0) >>> 0) za();
    d = i + 16 | 0;
    if ((c[d >> 2] | 0) == (n | 0)) c[d >> 2] = l; else c[i + 20 >> 2] = l;
    if (!l) {
     t = n;
     h = m;
     break;
    }
   }
   f = c[1538] | 0;
   if (l >>> 0 < f >>> 0) za();
   c[l + 24 >> 2] = i;
   d = 16 - k | 0;
   e = c[a + d >> 2] | 0;
   do if (e) if (e >>> 0 < f >>> 0) za(); else {
    c[l + 16 >> 2] = e;
    c[e + 24 >> 2] = l;
    break;
   } while (0);
   d = c[a + (d + 4) >> 2] | 0;
   if (d) if (d >>> 0 < (c[1538] | 0) >>> 0) za(); else {
    c[l + 20 >> 2] = d;
    c[d + 24 >> 2] = l;
    t = n;
    h = m;
    break;
   } else {
    t = n;
    h = m;
   }
  } else {
   t = n;
   h = m;
  }
 } else {
  t = a;
  h = b;
 } while (0);
 j = c[1538] | 0;
 if (q >>> 0 < j >>> 0) za();
 d = a + (b + 4) | 0;
 e = c[d >> 2] | 0;
 if (!(e & 2)) {
  if ((q | 0) == (c[1540] | 0)) {
   s = (c[1537] | 0) + h | 0;
   c[1537] = s;
   c[1540] = t;
   c[t + 4 >> 2] = s | 1;
   if ((t | 0) != (c[1539] | 0)) return;
   c[1539] = 0;
   c[1536] = 0;
   return;
  }
  if ((q | 0) == (c[1539] | 0)) {
   s = (c[1536] | 0) + h | 0;
   c[1536] = s;
   c[1539] = t;
   c[t + 4 >> 2] = s | 1;
   c[t + s >> 2] = s;
   return;
  }
  h = (e & -8) + h | 0;
  g = e >>> 3;
  do if (e >>> 0 >= 256) {
   i = c[a + (b + 24) >> 2] | 0;
   f = c[a + (b + 12) >> 2] | 0;
   do if ((f | 0) == (q | 0)) {
    e = a + (b + 20) | 0;
    d = c[e >> 2] | 0;
    if (!d) {
     e = a + (b + 16) | 0;
     d = c[e >> 2] | 0;
     if (!d) {
      p = 0;
      break;
     }
    }
    while (1) {
     f = d + 20 | 0;
     g = c[f >> 2] | 0;
     if (g) {
      d = g;
      e = f;
      continue;
     }
     f = d + 16 | 0;
     g = c[f >> 2] | 0;
     if (!g) break; else {
      d = g;
      e = f;
     }
    }
    if (e >>> 0 < j >>> 0) za(); else {
     c[e >> 2] = 0;
     p = d;
     break;
    }
   } else {
    g = c[a + (b + 8) >> 2] | 0;
    if (g >>> 0 < j >>> 0) za();
    d = g + 12 | 0;
    if ((c[d >> 2] | 0) != (q | 0)) za();
    e = f + 8 | 0;
    if ((c[e >> 2] | 0) == (q | 0)) {
     c[d >> 2] = f;
     c[e >> 2] = g;
     p = f;
     break;
    } else za();
   } while (0);
   if (i) {
    d = c[a + (b + 28) >> 2] | 0;
    e = 6440 + (d << 2) | 0;
    if ((q | 0) == (c[e >> 2] | 0)) {
     c[e >> 2] = p;
     if (!p) {
      c[1535] = c[1535] & ~(1 << d);
      break;
     }
    } else {
     if (i >>> 0 < (c[1538] | 0) >>> 0) za();
     d = i + 16 | 0;
     if ((c[d >> 2] | 0) == (q | 0)) c[d >> 2] = p; else c[i + 20 >> 2] = p;
     if (!p) break;
    }
    e = c[1538] | 0;
    if (p >>> 0 < e >>> 0) za();
    c[p + 24 >> 2] = i;
    d = c[a + (b + 16) >> 2] | 0;
    do if (d) if (d >>> 0 < e >>> 0) za(); else {
     c[p + 16 >> 2] = d;
     c[d + 24 >> 2] = p;
     break;
    } while (0);
    d = c[a + (b + 20) >> 2] | 0;
    if (d) if (d >>> 0 < (c[1538] | 0) >>> 0) za(); else {
     c[p + 20 >> 2] = d;
     c[d + 24 >> 2] = p;
     break;
    }
   }
  } else {
   f = c[a + (b + 8) >> 2] | 0;
   e = c[a + (b + 12) >> 2] | 0;
   d = 6176 + (g << 1 << 2) | 0;
   if ((f | 0) != (d | 0)) {
    if (f >>> 0 < j >>> 0) za();
    if ((c[f + 12 >> 2] | 0) != (q | 0)) za();
   }
   if ((e | 0) == (f | 0)) {
    c[1534] = c[1534] & ~(1 << g);
    break;
   }
   if ((e | 0) != (d | 0)) {
    if (e >>> 0 < j >>> 0) za();
    d = e + 8 | 0;
    if ((c[d >> 2] | 0) == (q | 0)) o = d; else za();
   } else o = e + 8 | 0;
   c[f + 12 >> 2] = e;
   c[o >> 2] = f;
  } while (0);
  c[t + 4 >> 2] = h | 1;
  c[t + h >> 2] = h;
  if ((t | 0) == (c[1539] | 0)) {
   c[1536] = h;
   return;
  }
 } else {
  c[d >> 2] = e & -2;
  c[t + 4 >> 2] = h | 1;
  c[t + h >> 2] = h;
 }
 d = h >>> 3;
 if (h >>> 0 < 256) {
  e = d << 1;
  g = 6176 + (e << 2) | 0;
  f = c[1534] | 0;
  d = 1 << d;
  if (f & d) {
   d = 6176 + (e + 2 << 2) | 0;
   e = c[d >> 2] | 0;
   if (e >>> 0 < (c[1538] | 0) >>> 0) za(); else {
    r = d;
    s = e;
   }
  } else {
   c[1534] = f | d;
   r = 6176 + (e + 2 << 2) | 0;
   s = g;
  }
  c[r >> 2] = t;
  c[s + 12 >> 2] = t;
  c[t + 8 >> 2] = s;
  c[t + 12 >> 2] = g;
  return;
 }
 d = h >>> 8;
 if (d) if (h >>> 0 > 16777215) g = 31; else {
  r = (d + 1048320 | 0) >>> 16 & 8;
  s = d << r;
  q = (s + 520192 | 0) >>> 16 & 4;
  s = s << q;
  g = (s + 245760 | 0) >>> 16 & 2;
  g = 14 - (q | r | g) + (s << g >>> 15) | 0;
  g = h >>> (g + 7 | 0) & 1 | g << 1;
 } else g = 0;
 d = 6440 + (g << 2) | 0;
 c[t + 28 >> 2] = g;
 c[t + 20 >> 2] = 0;
 c[t + 16 >> 2] = 0;
 e = c[1535] | 0;
 f = 1 << g;
 if (!(e & f)) {
  c[1535] = e | f;
  c[d >> 2] = t;
  c[t + 24 >> 2] = d;
  c[t + 12 >> 2] = t;
  c[t + 8 >> 2] = t;
  return;
 }
 d = c[d >> 2] | 0;
 a : do if ((c[d + 4 >> 2] & -8 | 0) != (h | 0)) {
  g = h << ((g | 0) == 31 ? 0 : 25 - (g >>> 1) | 0);
  while (1) {
   e = d + 16 + (g >>> 31 << 2) | 0;
   f = c[e >> 2] | 0;
   if (!f) break;
   if ((c[f + 4 >> 2] & -8 | 0) == (h | 0)) {
    d = f;
    break a;
   } else {
    g = g << 1;
    d = f;
   }
  }
  if (e >>> 0 < (c[1538] | 0) >>> 0) za();
  c[e >> 2] = t;
  c[t + 24 >> 2] = d;
  c[t + 12 >> 2] = t;
  c[t + 8 >> 2] = t;
  return;
 } while (0);
 e = d + 8 | 0;
 f = c[e >> 2] | 0;
 s = c[1538] | 0;
 if (!(f >>> 0 >= s >>> 0 & d >>> 0 >= s >>> 0)) za();
 c[f + 12 >> 2] = t;
 c[e >> 2] = t;
 c[t + 8 >> 2] = f;
 c[t + 12 >> 2] = d;
 c[t + 24 >> 2] = 0;
 return;
}

function Pc(b, e, f, g, h) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 a : do if (e >>> 0 > 36) {
  c[(Mc() | 0) >> 2] = 22;
  h = 0;
  g = 0;
 } else {
  r = b + 4 | 0;
  q = b + 100 | 0;
  do {
   i = c[r >> 2] | 0;
   if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
    c[r >> 2] = i + 1;
    i = d[i >> 0] | 0;
   } else i = Rc(b) | 0;
  } while ((Kc(i) | 0) != 0);
  b : do switch (i | 0) {
  case 43:
  case 45:
   {
    j = ((i | 0) == 45) << 31 >> 31;
    i = c[r >> 2] | 0;
    if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
     c[r >> 2] = i + 1;
     i = d[i >> 0] | 0;
     p = j;
     break b;
    } else {
     i = Rc(b) | 0;
     p = j;
     break b;
    }
   }
  default:
   p = 0;
  } while (0);
  j = (e | 0) == 0;
  do if ((e & -17 | 0) == 0 & (i | 0) == 48) {
   i = c[r >> 2] | 0;
   if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
    c[r >> 2] = i + 1;
    i = d[i >> 0] | 0;
   } else i = Rc(b) | 0;
   if ((i | 32 | 0) != 120) if (j) {
    e = 8;
    n = 46;
    break;
   } else {
    n = 32;
    break;
   }
   e = c[r >> 2] | 0;
   if (e >>> 0 < (c[q >> 2] | 0) >>> 0) {
    c[r >> 2] = e + 1;
    i = d[e >> 0] | 0;
   } else i = Rc(b) | 0;
   if ((d[16437 + (i + 1) >> 0] | 0) > 15) {
    g = (c[q >> 2] | 0) == 0;
    if (!g) c[r >> 2] = (c[r >> 2] | 0) + -1;
    if (!f) {
     Qc(b, 0);
     h = 0;
     g = 0;
     break a;
    }
    if (g) {
     h = 0;
     g = 0;
     break a;
    }
    c[r >> 2] = (c[r >> 2] | 0) + -1;
    h = 0;
    g = 0;
    break a;
   } else {
    e = 16;
    n = 46;
   }
  } else {
   e = j ? 10 : e;
   if ((d[16437 + (i + 1) >> 0] | 0) >>> 0 < e >>> 0) n = 32; else {
    if (c[q >> 2] | 0) c[r >> 2] = (c[r >> 2] | 0) + -1;
    Qc(b, 0);
    c[(Mc() | 0) >> 2] = 22;
    h = 0;
    g = 0;
    break a;
   }
  } while (0);
  if ((n | 0) == 32) if ((e | 0) == 10) {
   e = i + -48 | 0;
   if (e >>> 0 < 10) {
    i = 0;
    while (1) {
     j = (i * 10 | 0) + e | 0;
     e = c[r >> 2] | 0;
     if (e >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = e + 1;
      i = d[e >> 0] | 0;
     } else i = Rc(b) | 0;
     e = i + -48 | 0;
     if (!(e >>> 0 < 10 & j >>> 0 < 429496729)) {
      e = j;
      break;
     } else i = j;
    }
    j = 0;
   } else {
    e = 0;
    j = 0;
   }
   f = i + -48 | 0;
   if (f >>> 0 < 10) {
    while (1) {
     k = so(e | 0, j | 0, 10, 0) | 0;
     l = D;
     m = ((f | 0) < 0) << 31 >> 31;
     o = ~m;
     if (l >>> 0 > o >>> 0 | (l | 0) == (o | 0) & k >>> 0 > ~f >>> 0) {
      k = e;
      break;
     }
     e = io(k | 0, l | 0, f | 0, m | 0) | 0;
     j = D;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = Rc(b) | 0;
     f = i + -48 | 0;
     if (!(f >>> 0 < 10 & (j >>> 0 < 429496729 | (j | 0) == 429496729 & e >>> 0 < 2576980378))) {
      k = e;
      break;
     }
    }
    if (f >>> 0 > 9) {
     i = k;
     e = p;
    } else {
     e = 10;
     n = 72;
    }
   } else {
    i = e;
    e = p;
   }
  } else n = 46;
  c : do if ((n | 0) == 46) {
   if (!(e + -1 & e)) {
    n = a[16694 + ((e * 23 | 0) >>> 5 & 7) >> 0] | 0;
    j = a[16437 + (i + 1) >> 0] | 0;
    f = j & 255;
    if (f >>> 0 < e >>> 0) {
     i = 0;
     while (1) {
      k = f | i << n;
      i = c[r >> 2] | 0;
      if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
       c[r >> 2] = i + 1;
       i = d[i >> 0] | 0;
      } else i = Rc(b) | 0;
      j = a[16437 + (i + 1) >> 0] | 0;
      f = j & 255;
      if (!(k >>> 0 < 134217728 & f >>> 0 < e >>> 0)) break; else i = k;
     }
     f = 0;
    } else {
     f = 0;
     k = 0;
    }
    l = jo(-1, -1, n | 0) | 0;
    m = D;
    if ((j & 255) >>> 0 >= e >>> 0 | (f >>> 0 > m >>> 0 | (f | 0) == (m | 0) & k >>> 0 > l >>> 0)) {
     j = f;
     n = 72;
     break;
    } else i = f;
    while (1) {
     k = lo(k | 0, i | 0, n | 0) | 0;
     f = D;
     k = j & 255 | k;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = Rc(b) | 0;
     j = a[16437 + (i + 1) >> 0] | 0;
     if ((j & 255) >>> 0 >= e >>> 0 | (f >>> 0 > m >>> 0 | (f | 0) == (m | 0) & k >>> 0 > l >>> 0)) {
      j = f;
      n = 72;
      break c;
     } else i = f;
    }
   }
   j = a[16437 + (i + 1) >> 0] | 0;
   f = j & 255;
   if (f >>> 0 < e >>> 0) {
    i = 0;
    while (1) {
     k = f + ($(i, e) | 0) | 0;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = Rc(b) | 0;
     j = a[16437 + (i + 1) >> 0] | 0;
     f = j & 255;
     if (!(k >>> 0 < 119304647 & f >>> 0 < e >>> 0)) break; else i = k;
    }
    f = 0;
   } else {
    k = 0;
    f = 0;
   }
   if ((j & 255) >>> 0 < e >>> 0) {
    n = to(-1, -1, e | 0, 0) | 0;
    o = D;
    m = f;
    while (1) {
     if (m >>> 0 > o >>> 0 | (m | 0) == (o | 0) & k >>> 0 > n >>> 0) {
      j = m;
      n = 72;
      break c;
     }
     f = so(k | 0, m | 0, e | 0, 0) | 0;
     l = D;
     j = j & 255;
     if (l >>> 0 > 4294967295 | (l | 0) == -1 & f >>> 0 > ~j >>> 0) {
      j = m;
      n = 72;
      break c;
     }
     k = io(j | 0, 0, f | 0, l | 0) | 0;
     f = D;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = Rc(b) | 0;
     j = a[16437 + (i + 1) >> 0] | 0;
     if ((j & 255) >>> 0 >= e >>> 0) {
      j = f;
      n = 72;
      break;
     } else m = f;
    }
   } else {
    j = f;
    n = 72;
   }
  } while (0);
  if ((n | 0) == 72) if ((d[16437 + (i + 1) >> 0] | 0) >>> 0 < e >>> 0) {
   do {
    i = c[r >> 2] | 0;
    if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
     c[r >> 2] = i + 1;
     i = d[i >> 0] | 0;
    } else i = Rc(b) | 0;
   } while ((d[16437 + (i + 1) >> 0] | 0) >>> 0 < e >>> 0);
   c[(Mc() | 0) >> 2] = 34;
   j = h;
   i = g;
   e = (g & 1 | 0) == 0 & 0 == 0 ? p : 0;
  } else {
   i = k;
   e = p;
  }
  if (c[q >> 2] | 0) c[r >> 2] = (c[r >> 2] | 0) + -1;
  if (!(j >>> 0 < h >>> 0 | (j | 0) == (h | 0) & i >>> 0 < g >>> 0)) {
   if (!((g & 1 | 0) != 0 | 0 != 0 | (e | 0) != 0)) {
    c[(Mc() | 0) >> 2] = 34;
    g = io(g | 0, h | 0, -1, -1) | 0;
    h = D;
    break;
   }
   if (j >>> 0 > h >>> 0 | (j | 0) == (h | 0) & i >>> 0 > g >>> 0) {
    c[(Mc() | 0) >> 2] = 34;
    break;
   }
  }
  g = ((e | 0) < 0) << 31 >> 31;
  g = go(i ^ e | 0, j ^ g | 0, e | 0, g | 0) | 0;
  h = D;
 } while (0);
 D = h;
 return g | 0;
}

function mi(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0;
 w = i;
 i = i + 32 | 0;
 r = w + 16 | 0;
 q = w + 12 | 0;
 u = w + 8 | 0;
 s = w + 4 | 0;
 t = w;
 k = tf(e) | 0;
 c[u >> 2] = k;
 u = Fk(u, 9320) | 0;
 co(k) | 0;
 c[f >> 2] = 0;
 k = c[b >> 2] | 0;
 a : do if ((h | 0) != (j | 0)) {
  b : while (1) {
   m = k;
   if (k) {
    l = c[k + 12 >> 2] | 0;
    if ((l | 0) == (c[k + 16 >> 2] | 0)) l = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else l = c[l >> 2] | 0;
    if ((l | 0) == -1) {
     c[b >> 2] = 0;
     k = 0;
     o = 1;
     p = 0;
    } else {
     o = 0;
     p = m;
    }
   } else {
    k = 0;
    o = 1;
    p = m;
   }
   n = c[d >> 2] | 0;
   l = n;
   do if (n) {
    m = c[n + 12 >> 2] | 0;
    if ((m | 0) == (c[n + 16 >> 2] | 0)) m = tb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0; else m = c[m >> 2] | 0;
    if ((m | 0) != -1) if (o) break; else {
     v = 16;
     break b;
    } else {
     c[d >> 2] = 0;
     l = 0;
     v = 14;
     break;
    }
   } else v = 14; while (0);
   if ((v | 0) == 14) {
    v = 0;
    if (o) {
     v = 16;
     break;
    } else n = 0;
   }
   c : do if ((mb[c[(c[u >> 2] | 0) + 52 >> 2] & 31](u, c[h >> 2] | 0, 0) | 0) << 24 >> 24 == 37) {
    m = h + 4 | 0;
    if ((m | 0) == (j | 0)) {
     v = 19;
     break b;
    }
    o = mb[c[(c[u >> 2] | 0) + 52 >> 2] & 31](u, c[m >> 2] | 0, 0) | 0;
    switch (o << 24 >> 24) {
    case 48:
    case 69:
     {
      n = h + 8 | 0;
      if ((n | 0) == (j | 0)) {
       v = 22;
       break b;
      }
      h = m;
      m = mb[c[(c[u >> 2] | 0) + 52 >> 2] & 31](u, c[n >> 2] | 0, 0) | 0;
      k = o;
      break;
     }
    default:
     {
      m = o;
      k = 0;
     }
    }
    o = c[(c[a >> 2] | 0) + 36 >> 2] | 0;
    c[s >> 2] = p;
    c[t >> 2] = l;
    c[q >> 2] = c[s >> 2];
    c[r >> 2] = c[t >> 2];
    c[b >> 2] = wb[o & 15](a, q, r, e, f, g, m, k) | 0;
    h = h + 8 | 0;
   } else {
    if (!(mb[c[(c[u >> 2] | 0) + 12 >> 2] & 31](u, 8192, c[h >> 2] | 0) | 0)) {
     m = k + 12 | 0;
     l = c[m >> 2] | 0;
     n = k + 16 | 0;
     if ((l | 0) == (c[n >> 2] | 0)) l = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else l = c[l >> 2] | 0;
     p = zb[c[(c[u >> 2] | 0) + 28 >> 2] & 15](u, l) | 0;
     if ((p | 0) != (zb[c[(c[u >> 2] | 0) + 28 >> 2] & 15](u, c[h >> 2] | 0) | 0)) {
      v = 59;
      break b;
     }
     l = c[m >> 2] | 0;
     if ((l | 0) == (c[n >> 2] | 0)) tb[c[(c[k >> 2] | 0) + 40 >> 2] & 63](k) | 0; else c[m >> 2] = l + 4;
     h = h + 4 | 0;
     break;
    }
    do {
     h = h + 4 | 0;
     if ((h | 0) == (j | 0)) {
      h = j;
      break;
     }
    } while (mb[c[(c[u >> 2] | 0) + 12 >> 2] & 31](u, 8192, c[h >> 2] | 0) | 0);
    l = n;
    o = n;
    while (1) {
     if (k) {
      m = c[k + 12 >> 2] | 0;
      if ((m | 0) == (c[k + 16 >> 2] | 0)) m = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else m = c[m >> 2] | 0;
      if ((m | 0) == -1) {
       c[b >> 2] = 0;
       n = 1;
       k = 0;
      } else n = 0;
     } else {
      n = 1;
      k = 0;
     }
     do if (o) {
      m = c[o + 12 >> 2] | 0;
      if ((m | 0) == (c[o + 16 >> 2] | 0)) m = tb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0; else m = c[m >> 2] | 0;
      if ((m | 0) != -1) if (n ^ (l | 0) == 0) {
       p = l;
       o = l;
       break;
      } else break c; else {
       c[d >> 2] = 0;
       l = 0;
       v = 42;
       break;
      }
     } else v = 42; while (0);
     if ((v | 0) == 42) {
      v = 0;
      if (n) break c; else {
       p = l;
       o = 0;
      }
     }
     m = k + 12 | 0;
     l = c[m >> 2] | 0;
     n = k + 16 | 0;
     if ((l | 0) == (c[n >> 2] | 0)) l = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else l = c[l >> 2] | 0;
     if (!(mb[c[(c[u >> 2] | 0) + 12 >> 2] & 31](u, 8192, l) | 0)) break c;
     l = c[m >> 2] | 0;
     if ((l | 0) == (c[n >> 2] | 0)) {
      tb[c[(c[k >> 2] | 0) + 40 >> 2] & 63](k) | 0;
      l = p;
      continue;
     } else {
      c[m >> 2] = l + 4;
      l = p;
      continue;
     }
    }
   } while (0);
   k = c[b >> 2] | 0;
   if (!((h | 0) != (j | 0) & (c[f >> 2] | 0) == 0)) break a;
  }
  if ((v | 0) == 16) {
   c[f >> 2] = 4;
   break;
  } else if ((v | 0) == 19) {
   c[f >> 2] = 4;
   break;
  } else if ((v | 0) == 22) {
   c[f >> 2] = 4;
   break;
  } else if ((v | 0) == 59) {
   c[f >> 2] = 4;
   k = c[b >> 2] | 0;
   break;
  }
 } while (0);
 if (k) {
  h = c[k + 12 >> 2] | 0;
  if ((h | 0) == (c[k + 16 >> 2] | 0)) h = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else h = c[h >> 2] | 0;
  if ((h | 0) == -1) {
   c[b >> 2] = 0;
   k = 0;
   m = 1;
  } else m = 0;
 } else {
  k = 0;
  m = 1;
 }
 h = c[d >> 2] | 0;
 do if (h) {
  l = c[h + 12 >> 2] | 0;
  if ((l | 0) == (c[h + 16 >> 2] | 0)) h = tb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else h = c[l >> 2] | 0;
  if ((h | 0) != -1) if (m) break; else {
   v = 74;
   break;
  } else {
   c[d >> 2] = 0;
   v = 72;
   break;
  }
 } else v = 72; while (0);
 if ((v | 0) == 72 ? m : 0) v = 74;
 if ((v | 0) == 74) c[f >> 2] = c[f >> 2] | 2;
 i = w;
 return k | 0;
}

function yi(b, d, e, f, g, h, j, k) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0;
 S = i;
 i = i + 144 | 0;
 l = S + 132 | 0;
 k = S + 116 | 0;
 L = S + 128 | 0;
 w = S + 124 | 0;
 H = S + 120 | 0;
 M = S + 112 | 0;
 N = S + 108 | 0;
 O = S + 104 | 0;
 P = S + 100 | 0;
 Q = S + 96 | 0;
 R = S + 92 | 0;
 m = S + 88 | 0;
 n = S + 84 | 0;
 o = S + 80 | 0;
 p = S + 76 | 0;
 q = S + 72 | 0;
 r = S + 68 | 0;
 s = S + 64 | 0;
 t = S + 60 | 0;
 u = S + 56 | 0;
 v = S + 52 | 0;
 x = S + 48 | 0;
 y = S + 44 | 0;
 z = S + 40 | 0;
 A = S + 36 | 0;
 B = S + 32 | 0;
 C = S + 28 | 0;
 D = S + 24 | 0;
 E = S + 20 | 0;
 F = S + 16 | 0;
 G = S + 12 | 0;
 I = S + 8 | 0;
 J = S + 4 | 0;
 K = S;
 c[g >> 2] = 0;
 U = tf(f) | 0;
 c[L >> 2] = U;
 L = Fk(L, 9320) | 0;
 co(U) | 0;
 do switch (j << 24 >> 24 | 0) {
 case 65:
 case 97:
  {
   c[w >> 2] = c[e >> 2];
   c[l >> 2] = c[w >> 2];
   ti(b, h + 24 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 104:
 case 66:
 case 98:
  {
   c[H >> 2] = c[e >> 2];
   c[l >> 2] = c[H >> 2];
   vi(b, h + 16 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 99:
  {
   U = b + 8 | 0;
   U = tb[c[(c[U >> 2] | 0) + 12 >> 2] & 63](U) | 0;
   c[M >> 2] = c[d >> 2];
   c[N >> 2] = c[e >> 2];
   j = a[U >> 0] | 0;
   e = (j & 1) == 0;
   T = U + 4 | 0;
   U = e ? T : c[U + 8 >> 2] | 0;
   T = U + ((e ? (j & 255) >>> 1 : c[T >> 2] | 0) << 2) | 0;
   c[k >> 2] = c[M >> 2];
   c[l >> 2] = c[N >> 2];
   c[d >> 2] = mi(b, k, l, f, g, h, U, T) | 0;
   T = 26;
   break;
  }
 case 101:
 case 100:
  {
   c[O >> 2] = c[e >> 2];
   c[l >> 2] = c[O >> 2];
   zi(b, h + 12 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 68:
  {
   c[P >> 2] = c[d >> 2];
   c[Q >> 2] = c[e >> 2];
   c[k >> 2] = c[P >> 2];
   c[l >> 2] = c[Q >> 2];
   c[d >> 2] = mi(b, k, l, f, g, h, 9928, 9960) | 0;
   T = 26;
   break;
  }
 case 70:
  {
   c[R >> 2] = c[d >> 2];
   c[m >> 2] = c[e >> 2];
   c[k >> 2] = c[R >> 2];
   c[l >> 2] = c[m >> 2];
   c[d >> 2] = mi(b, k, l, f, g, h, 9960, 9992) | 0;
   T = 26;
   break;
  }
 case 72:
  {
   c[n >> 2] = c[e >> 2];
   c[l >> 2] = c[n >> 2];
   Ai(b, h + 8 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 73:
  {
   c[o >> 2] = c[e >> 2];
   c[l >> 2] = c[o >> 2];
   Bi(b, h + 8 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 106:
  {
   c[p >> 2] = c[e >> 2];
   c[l >> 2] = c[p >> 2];
   Ci(b, h + 28 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 109:
  {
   c[q >> 2] = c[e >> 2];
   c[l >> 2] = c[q >> 2];
   Di(b, h + 16 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 77:
  {
   c[r >> 2] = c[e >> 2];
   c[l >> 2] = c[r >> 2];
   Ei(b, h + 4 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 116:
 case 110:
  {
   c[s >> 2] = c[e >> 2];
   c[l >> 2] = c[s >> 2];
   Fi(b, d, l, g, L);
   T = 26;
   break;
  }
 case 112:
  {
   c[t >> 2] = c[e >> 2];
   c[l >> 2] = c[t >> 2];
   Gi(b, h + 8 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 114:
  {
   c[u >> 2] = c[d >> 2];
   c[v >> 2] = c[e >> 2];
   c[k >> 2] = c[u >> 2];
   c[l >> 2] = c[v >> 2];
   c[d >> 2] = mi(b, k, l, f, g, h, 9992, 10036) | 0;
   T = 26;
   break;
  }
 case 82:
  {
   c[x >> 2] = c[d >> 2];
   c[y >> 2] = c[e >> 2];
   c[k >> 2] = c[x >> 2];
   c[l >> 2] = c[y >> 2];
   c[d >> 2] = mi(b, k, l, f, g, h, 10036, 10056) | 0;
   T = 26;
   break;
  }
 case 83:
  {
   c[z >> 2] = c[e >> 2];
   c[l >> 2] = c[z >> 2];
   Hi(b, h, d, l, g, L);
   T = 26;
   break;
  }
 case 84:
  {
   c[A >> 2] = c[d >> 2];
   c[B >> 2] = c[e >> 2];
   c[k >> 2] = c[A >> 2];
   c[l >> 2] = c[B >> 2];
   c[d >> 2] = mi(b, k, l, f, g, h, 10056, 10088) | 0;
   T = 26;
   break;
  }
 case 119:
  {
   c[C >> 2] = c[e >> 2];
   c[l >> 2] = c[C >> 2];
   Ii(b, h + 24 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 120:
  {
   U = c[(c[b >> 2] | 0) + 20 >> 2] | 0;
   c[D >> 2] = c[d >> 2];
   c[E >> 2] = c[e >> 2];
   c[k >> 2] = c[D >> 2];
   c[l >> 2] = c[E >> 2];
   k = rb[U & 63](b, k, l, f, g, h) | 0;
   break;
  }
 case 88:
  {
   U = b + 8 | 0;
   U = tb[c[(c[U >> 2] | 0) + 24 >> 2] & 63](U) | 0;
   c[F >> 2] = c[d >> 2];
   c[G >> 2] = c[e >> 2];
   j = a[U >> 0] | 0;
   e = (j & 1) == 0;
   T = U + 4 | 0;
   U = e ? T : c[U + 8 >> 2] | 0;
   T = U + ((e ? (j & 255) >>> 1 : c[T >> 2] | 0) << 2) | 0;
   c[k >> 2] = c[F >> 2];
   c[l >> 2] = c[G >> 2];
   c[d >> 2] = mi(b, k, l, f, g, h, U, T) | 0;
   T = 26;
   break;
  }
 case 121:
  {
   c[I >> 2] = c[e >> 2];
   c[l >> 2] = c[I >> 2];
   xi(b, h + 20 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 89:
  {
   c[J >> 2] = c[e >> 2];
   c[l >> 2] = c[J >> 2];
   Ji(b, h + 20 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 37:
  {
   c[K >> 2] = c[e >> 2];
   c[l >> 2] = c[K >> 2];
   Ki(b, d, l, g, L);
   T = 26;
   break;
  }
 default:
  {
   c[g >> 2] = c[g >> 2] | 4;
   T = 26;
  }
 } while (0);
 if ((T | 0) == 26) k = c[d >> 2] | 0;
 i = S;
 return k | 0;
}

function $h(b, d, e, f, g, h, j, k) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0;
 S = i;
 i = i + 144 | 0;
 l = S + 132 | 0;
 k = S + 116 | 0;
 L = S + 128 | 0;
 w = S + 124 | 0;
 H = S + 120 | 0;
 M = S + 112 | 0;
 N = S + 108 | 0;
 O = S + 104 | 0;
 P = S + 100 | 0;
 Q = S + 96 | 0;
 R = S + 92 | 0;
 m = S + 88 | 0;
 n = S + 84 | 0;
 o = S + 80 | 0;
 p = S + 76 | 0;
 q = S + 72 | 0;
 r = S + 68 | 0;
 s = S + 64 | 0;
 t = S + 60 | 0;
 u = S + 56 | 0;
 v = S + 52 | 0;
 x = S + 48 | 0;
 y = S + 44 | 0;
 z = S + 40 | 0;
 A = S + 36 | 0;
 B = S + 32 | 0;
 C = S + 28 | 0;
 D = S + 24 | 0;
 E = S + 20 | 0;
 F = S + 16 | 0;
 G = S + 12 | 0;
 I = S + 8 | 0;
 J = S + 4 | 0;
 K = S;
 c[g >> 2] = 0;
 U = tf(f) | 0;
 c[L >> 2] = U;
 L = Fk(L, 9328) | 0;
 co(U) | 0;
 do switch (j << 24 >> 24 | 0) {
 case 65:
 case 97:
  {
   c[w >> 2] = c[e >> 2];
   c[l >> 2] = c[w >> 2];
   Wh(b, h + 24 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 104:
 case 66:
 case 98:
  {
   c[H >> 2] = c[e >> 2];
   c[l >> 2] = c[H >> 2];
   Yh(b, h + 16 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 99:
  {
   T = b + 8 | 0;
   T = tb[c[(c[T >> 2] | 0) + 12 >> 2] & 63](T) | 0;
   c[M >> 2] = c[d >> 2];
   c[N >> 2] = c[e >> 2];
   j = a[T >> 0] | 0;
   e = (j & 1) == 0;
   U = e ? T + 1 | 0 : c[T + 8 >> 2] | 0;
   T = U + (e ? (j & 255) >>> 1 : c[T + 4 >> 2] | 0) | 0;
   c[k >> 2] = c[M >> 2];
   c[l >> 2] = c[N >> 2];
   c[d >> 2] = Ph(b, k, l, f, g, h, U, T) | 0;
   T = 26;
   break;
  }
 case 101:
 case 100:
  {
   c[O >> 2] = c[e >> 2];
   c[l >> 2] = c[O >> 2];
   ai(b, h + 12 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 68:
  {
   c[P >> 2] = c[d >> 2];
   c[Q >> 2] = c[e >> 2];
   c[k >> 2] = c[P >> 2];
   c[l >> 2] = c[Q >> 2];
   c[d >> 2] = Ph(b, k, l, f, g, h, 21257, 21265) | 0;
   T = 26;
   break;
  }
 case 70:
  {
   c[R >> 2] = c[d >> 2];
   c[m >> 2] = c[e >> 2];
   c[k >> 2] = c[R >> 2];
   c[l >> 2] = c[m >> 2];
   c[d >> 2] = Ph(b, k, l, f, g, h, 21265, 21273) | 0;
   T = 26;
   break;
  }
 case 72:
  {
   c[n >> 2] = c[e >> 2];
   c[l >> 2] = c[n >> 2];
   bi(b, h + 8 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 73:
  {
   c[o >> 2] = c[e >> 2];
   c[l >> 2] = c[o >> 2];
   ci(b, h + 8 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 106:
  {
   c[p >> 2] = c[e >> 2];
   c[l >> 2] = c[p >> 2];
   di(b, h + 28 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 109:
  {
   c[q >> 2] = c[e >> 2];
   c[l >> 2] = c[q >> 2];
   ei(b, h + 16 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 77:
  {
   c[r >> 2] = c[e >> 2];
   c[l >> 2] = c[r >> 2];
   fi(b, h + 4 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 116:
 case 110:
  {
   c[s >> 2] = c[e >> 2];
   c[l >> 2] = c[s >> 2];
   gi(b, d, l, g, L);
   T = 26;
   break;
  }
 case 112:
  {
   c[t >> 2] = c[e >> 2];
   c[l >> 2] = c[t >> 2];
   hi(b, h + 8 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 114:
  {
   c[u >> 2] = c[d >> 2];
   c[v >> 2] = c[e >> 2];
   c[k >> 2] = c[u >> 2];
   c[l >> 2] = c[v >> 2];
   c[d >> 2] = Ph(b, k, l, f, g, h, 21273, 21284) | 0;
   T = 26;
   break;
  }
 case 82:
  {
   c[x >> 2] = c[d >> 2];
   c[y >> 2] = c[e >> 2];
   c[k >> 2] = c[x >> 2];
   c[l >> 2] = c[y >> 2];
   c[d >> 2] = Ph(b, k, l, f, g, h, 21284, 21289) | 0;
   T = 26;
   break;
  }
 case 83:
  {
   c[z >> 2] = c[e >> 2];
   c[l >> 2] = c[z >> 2];
   ii(b, h, d, l, g, L);
   T = 26;
   break;
  }
 case 84:
  {
   c[A >> 2] = c[d >> 2];
   c[B >> 2] = c[e >> 2];
   c[k >> 2] = c[A >> 2];
   c[l >> 2] = c[B >> 2];
   c[d >> 2] = Ph(b, k, l, f, g, h, 21289, 21297) | 0;
   T = 26;
   break;
  }
 case 119:
  {
   c[C >> 2] = c[e >> 2];
   c[l >> 2] = c[C >> 2];
   ji(b, h + 24 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 120:
  {
   U = c[(c[b >> 2] | 0) + 20 >> 2] | 0;
   c[D >> 2] = c[d >> 2];
   c[E >> 2] = c[e >> 2];
   c[k >> 2] = c[D >> 2];
   c[l >> 2] = c[E >> 2];
   k = rb[U & 63](b, k, l, f, g, h) | 0;
   break;
  }
 case 88:
  {
   T = b + 8 | 0;
   T = tb[c[(c[T >> 2] | 0) + 24 >> 2] & 63](T) | 0;
   c[F >> 2] = c[d >> 2];
   c[G >> 2] = c[e >> 2];
   j = a[T >> 0] | 0;
   e = (j & 1) == 0;
   U = e ? T + 1 | 0 : c[T + 8 >> 2] | 0;
   T = U + (e ? (j & 255) >>> 1 : c[T + 4 >> 2] | 0) | 0;
   c[k >> 2] = c[F >> 2];
   c[l >> 2] = c[G >> 2];
   c[d >> 2] = Ph(b, k, l, f, g, h, U, T) | 0;
   T = 26;
   break;
  }
 case 121:
  {
   c[I >> 2] = c[e >> 2];
   c[l >> 2] = c[I >> 2];
   _h(b, h + 20 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 89:
  {
   c[J >> 2] = c[e >> 2];
   c[l >> 2] = c[J >> 2];
   ki(b, h + 20 | 0, d, l, g, L);
   T = 26;
   break;
  }
 case 37:
  {
   c[K >> 2] = c[e >> 2];
   c[l >> 2] = c[K >> 2];
   li(b, d, l, g, L);
   T = 26;
   break;
  }
 default:
  {
   c[g >> 2] = c[g >> 2] | 4;
   T = 26;
  }
 } while (0);
 if ((T | 0) == 26) k = c[d >> 2] | 0;
 i = S;
 return k | 0;
}

function Ph(e, f, g, h, j, k, l, m) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 B = i;
 i = i + 32 | 0;
 u = B + 16 | 0;
 t = B + 12 | 0;
 x = B + 8 | 0;
 v = B + 4 | 0;
 w = B;
 y = tf(h) | 0;
 c[x >> 2] = y;
 x = Fk(x, 9328) | 0;
 co(y) | 0;
 c[j >> 2] = 0;
 y = x + 8 | 0;
 n = c[f >> 2] | 0;
 a : do if ((l | 0) != (m | 0)) {
  b : while (1) {
   o = n;
   if (n) {
    if ((c[n + 12 >> 2] | 0) == (c[n + 16 >> 2] | 0) ? (tb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0) == -1 : 0) {
     c[f >> 2] = 0;
     n = 0;
     o = 0;
    }
   } else n = 0;
   r = (n | 0) == 0;
   q = c[g >> 2] | 0;
   p = q;
   do if (q) {
    if ((c[q + 12 >> 2] | 0) == (c[q + 16 >> 2] | 0) ? (tb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0) == -1 : 0) {
     c[g >> 2] = 0;
     p = 0;
     A = 11;
     break;
    }
    if (!r) {
     A = 12;
     break b;
    }
   } else A = 11; while (0);
   if ((A | 0) == 11) {
    A = 0;
    if (r) {
     A = 12;
     break;
    } else q = 0;
   }
   c : do if ((mb[c[(c[x >> 2] | 0) + 36 >> 2] & 31](x, a[l >> 0] | 0, 0) | 0) << 24 >> 24 == 37) {
    q = l + 1 | 0;
    if ((q | 0) == (m | 0)) {
     A = 15;
     break b;
    }
    s = mb[c[(c[x >> 2] | 0) + 36 >> 2] & 31](x, a[q >> 0] | 0, 0) | 0;
    switch (s << 24 >> 24) {
    case 48:
    case 69:
     {
      r = l + 2 | 0;
      if ((r | 0) == (m | 0)) {
       A = 18;
       break b;
      }
      l = q;
      q = mb[c[(c[x >> 2] | 0) + 36 >> 2] & 31](x, a[r >> 0] | 0, 0) | 0;
      n = s;
      break;
     }
    default:
     {
      q = s;
      n = 0;
     }
    }
    s = c[(c[e >> 2] | 0) + 36 >> 2] | 0;
    c[v >> 2] = o;
    c[w >> 2] = p;
    c[t >> 2] = c[v >> 2];
    c[u >> 2] = c[w >> 2];
    c[f >> 2] = wb[s & 15](e, t, u, h, j, k, q, n) | 0;
    l = l + 2 | 0;
   } else {
    o = a[l >> 0] | 0;
    if (o << 24 >> 24 > -1 ? (z = c[y >> 2] | 0, (b[z + (o << 24 >> 24 << 1) >> 1] & 8192) != 0) : 0) {
     do {
      l = l + 1 | 0;
      if ((l | 0) == (m | 0)) {
       l = m;
       break;
      }
      o = a[l >> 0] | 0;
      if (o << 24 >> 24 <= -1) break;
     } while ((b[z + (o << 24 >> 24 << 1) >> 1] & 8192) != 0);
     o = q;
     while (1) {
      if (n) {
       if ((c[n + 12 >> 2] | 0) == (c[n + 16 >> 2] | 0) ? (tb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0) == -1 : 0) {
        c[f >> 2] = 0;
        n = 0;
       }
      } else n = 0;
      p = (n | 0) == 0;
      do if (q) {
       if ((c[q + 12 >> 2] | 0) != (c[q + 16 >> 2] | 0)) if (p) {
        s = o;
        break;
       } else break c;
       if ((tb[c[(c[q >> 2] | 0) + 36 >> 2] & 63](q) | 0) != -1) if (p ^ (o | 0) == 0) {
        s = o;
        q = o;
        break;
       } else break c; else {
        c[g >> 2] = 0;
        o = 0;
        A = 37;
        break;
       }
      } else A = 37; while (0);
      if ((A | 0) == 37) {
       A = 0;
       if (p) break c; else {
        s = o;
        q = 0;
       }
      }
      p = n + 12 | 0;
      o = c[p >> 2] | 0;
      r = n + 16 | 0;
      if ((o | 0) == (c[r >> 2] | 0)) o = tb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0; else o = d[o >> 0] | 0;
      if ((o & 255) << 24 >> 24 <= -1) break c;
      if (!(b[(c[y >> 2] | 0) + (o << 24 >> 24 << 1) >> 1] & 8192)) break c;
      o = c[p >> 2] | 0;
      if ((o | 0) == (c[r >> 2] | 0)) {
       tb[c[(c[n >> 2] | 0) + 40 >> 2] & 63](n) | 0;
       o = s;
       continue;
      } else {
       c[p >> 2] = o + 1;
       o = s;
       continue;
      }
     }
    }
    p = n + 12 | 0;
    o = c[p >> 2] | 0;
    q = n + 16 | 0;
    if ((o | 0) == (c[q >> 2] | 0)) o = tb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0; else o = d[o >> 0] | 0;
    s = zb[c[(c[x >> 2] | 0) + 12 >> 2] & 15](x, o & 255) | 0;
    if (s << 24 >> 24 != (zb[c[(c[x >> 2] | 0) + 12 >> 2] & 15](x, a[l >> 0] | 0) | 0) << 24 >> 24) {
     A = 55;
     break b;
    }
    o = c[p >> 2] | 0;
    if ((o | 0) == (c[q >> 2] | 0)) tb[c[(c[n >> 2] | 0) + 40 >> 2] & 63](n) | 0; else c[p >> 2] = o + 1;
    l = l + 1 | 0;
   } while (0);
   n = c[f >> 2] | 0;
   if (!((l | 0) != (m | 0) & (c[j >> 2] | 0) == 0)) break a;
  }
  if ((A | 0) == 12) {
   c[j >> 2] = 4;
   break;
  } else if ((A | 0) == 15) {
   c[j >> 2] = 4;
   break;
  } else if ((A | 0) == 18) {
   c[j >> 2] = 4;
   break;
  } else if ((A | 0) == 55) {
   c[j >> 2] = 4;
   n = c[f >> 2] | 0;
   break;
  }
 } while (0);
 if (n) {
  if ((c[n + 12 >> 2] | 0) == (c[n + 16 >> 2] | 0) ? (tb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   n = 0;
  }
 } else n = 0;
 l = (n | 0) == 0;
 o = c[g >> 2] | 0;
 do if (o) {
  if ((c[o + 12 >> 2] | 0) == (c[o + 16 >> 2] | 0) ? (tb[c[(c[o >> 2] | 0) + 36 >> 2] & 63](o) | 0) == -1 : 0) {
   c[g >> 2] = 0;
   A = 65;
   break;
  }
  if (!l) A = 66;
 } else A = 65; while (0);
 if ((A | 0) == 65 ? l : 0) A = 66;
 if ((A | 0) == 66) c[j >> 2] = c[j >> 2] | 2;
 i = B;
 return n | 0;
}
function bk(d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 n = n | 0;
 o = o | 0;
 p = p | 0;
 q = q | 0;
 r = r | 0;
 var s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0;
 c[f >> 2] = d;
 N = q + 4 | 0;
 O = q + 8 | 0;
 P = q + 1 | 0;
 H = p + 4 | 0;
 I = (g & 512 | 0) == 0;
 J = p + 8 | 0;
 K = p + 1 | 0;
 L = j + 8 | 0;
 M = (r | 0) > 0;
 A = o + 4 | 0;
 B = o + 8 | 0;
 C = o + 1 | 0;
 D = r + 1 | 0;
 F = -2 - r - ((r | 0) < 0 ? ~r : -1) | 0;
 G = (r | 0) > 0;
 z = 0;
 do {
  switch (a[l + z >> 0] | 0) {
  case 0:
   {
    c[e >> 2] = c[f >> 2];
    break;
   }
  case 1:
   {
    c[e >> 2] = c[f >> 2];
    x = zb[c[(c[j >> 2] | 0) + 28 >> 2] & 15](j, 32) | 0;
    y = c[f >> 2] | 0;
    c[f >> 2] = y + 1;
    a[y >> 0] = x;
    break;
   }
  case 3:
   {
    y = a[q >> 0] | 0;
    s = (y & 1) == 0;
    if ((s ? (y & 255) >>> 1 : c[N >> 2] | 0) | 0) {
     x = a[(s ? P : c[O >> 2] | 0) >> 0] | 0;
     y = c[f >> 2] | 0;
     c[f >> 2] = y + 1;
     a[y >> 0] = x;
    }
    break;
   }
  case 2:
   {
    u = a[p >> 0] | 0;
    s = (u & 1) == 0;
    u = s ? (u & 255) >>> 1 : c[H >> 2] | 0;
    if (!(I | (u | 0) == 0)) {
     t = s ? K : c[J >> 2] | 0;
     v = t + u | 0;
     s = c[f >> 2] | 0;
     if (u) do {
      a[s >> 0] = a[t >> 0] | 0;
      t = t + 1 | 0;
      s = s + 1 | 0;
     } while ((t | 0) != (v | 0));
     c[f >> 2] = s;
    }
    break;
   }
  case 4:
   {
    s = c[f >> 2] | 0;
    h = k ? h + 1 | 0 : h;
    w = h;
    v = c[L >> 2] | 0;
    a : do if (h >>> 0 < i >>> 0) {
     t = h;
     do {
      u = a[t >> 0] | 0;
      if (u << 24 >> 24 <= -1) break a;
      if (!(b[v + (u << 24 >> 24 << 1) >> 1] & 2048)) break a;
      t = t + 1 | 0;
     } while (t >>> 0 < i >>> 0);
    } else t = h; while (0);
    u = t;
    if (M) {
     x = -2 - u - ~(u >>> 0 > w >>> 0 ? w : u) | 0;
     x = F >>> 0 > x >>> 0 ? F : x;
     if (t >>> 0 > h >>> 0 & G) {
      u = t;
      w = r;
      while (1) {
       u = u + -1 | 0;
       y = a[u >> 0] | 0;
       v = c[f >> 2] | 0;
       c[f >> 2] = v + 1;
       a[v >> 0] = y;
       v = (w | 0) > 1;
       if (!(u >>> 0 > h >>> 0 & v)) break; else w = w + -1 | 0;
      }
     } else v = G;
     y = D + x | 0;
     u = t + (x + 1) | 0;
     if (v) w = zb[c[(c[j >> 2] | 0) + 28 >> 2] & 15](j, 48) | 0; else w = 0;
     t = c[f >> 2] | 0;
     c[f >> 2] = t + 1;
     if ((y | 0) > 0) {
      v = y;
      while (1) {
       a[t >> 0] = w;
       t = c[f >> 2] | 0;
       c[f >> 2] = t + 1;
       if ((v | 0) > 1) v = v + -1 | 0; else break;
      }
     }
     a[t >> 0] = m;
    } else u = t;
    if ((u | 0) != (h | 0)) {
     y = a[o >> 0] | 0;
     t = (y & 1) == 0;
     if (!((t ? (y & 255) >>> 1 : c[A >> 2] | 0) | 0)) t = -1; else t = a[(t ? C : c[B >> 2] | 0) >> 0] | 0;
     if ((u | 0) != (h | 0)) {
      v = 0;
      w = 0;
      while (1) {
       if ((w | 0) == (t | 0)) {
        y = c[f >> 2] | 0;
        c[f >> 2] = y + 1;
        a[y >> 0] = n;
        v = v + 1 | 0;
        y = a[o >> 0] | 0;
        t = (y & 1) == 0;
        if (v >>> 0 < (t ? (y & 255) >>> 1 : c[A >> 2] | 0) >>> 0) {
         t = a[(t ? C : c[B >> 2] | 0) + v >> 0] | 0;
         t = t << 24 >> 24 == 127 ? -1 : t << 24 >> 24;
         w = 0;
        } else {
         t = w;
         w = 0;
        }
       }
       u = u + -1 | 0;
       x = a[u >> 0] | 0;
       y = c[f >> 2] | 0;
       c[f >> 2] = y + 1;
       a[y >> 0] = x;
       if ((u | 0) == (h | 0)) break; else w = w + 1 | 0;
      }
     }
    } else {
     x = zb[c[(c[j >> 2] | 0) + 28 >> 2] & 15](j, 48) | 0;
     y = c[f >> 2] | 0;
     c[f >> 2] = y + 1;
     a[y >> 0] = x;
    }
    t = c[f >> 2] | 0;
    if ((s | 0) != (t | 0) ? (E = t + -1 | 0, s >>> 0 < E >>> 0) : 0) {
     t = E;
     do {
      y = a[s >> 0] | 0;
      a[s >> 0] = a[t >> 0] | 0;
      a[t >> 0] = y;
      s = s + 1 | 0;
      t = t + -1 | 0;
     } while (s >>> 0 < t >>> 0);
    }
    break;
   }
  default:
   {}
  }
  z = z + 1 | 0;
 } while ((z | 0) != 4);
 t = a[q >> 0] | 0;
 h = (t & 1) == 0;
 t = h ? (t & 255) >>> 1 : c[N >> 2] | 0;
 if (t >>> 0 > 1) {
  s = h ? P : c[O >> 2] | 0;
  u = s + t | 0;
  h = c[f >> 2] | 0;
  if ((t | 0) != 1) {
   s = s + 1 | 0;
   do {
    a[h >> 0] = a[s >> 0] | 0;
    h = h + 1 | 0;
    s = s + 1 | 0;
   } while ((s | 0) != (u | 0));
  }
  c[f >> 2] = h;
 }
 switch (g & 176 | 0) {
 case 32:
  {
   c[e >> 2] = c[f >> 2];
   break;
  }
 case 16:
  break;
 default:
  c[e >> 2] = d;
 }
 return;
}

function hk(b, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 n = n | 0;
 o = o | 0;
 p = p | 0;
 q = q | 0;
 var r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0;
 c[e >> 2] = b;
 J = p + 4 | 0;
 K = p + 8 | 0;
 C = o + 4 | 0;
 D = (f & 512 | 0) == 0;
 E = o + 8 | 0;
 F = (q | 0) > 0;
 G = n + 4 | 0;
 H = n + 8 | 0;
 I = n + 1 | 0;
 A = (q | 0) > 0;
 z = 0;
 do {
  switch (a[k + z >> 0] | 0) {
  case 0:
   {
    c[d >> 2] = c[e >> 2];
    break;
   }
  case 1:
   {
    c[d >> 2] = c[e >> 2];
    x = zb[c[(c[i >> 2] | 0) + 44 >> 2] & 15](i, 32) | 0;
    y = c[e >> 2] | 0;
    c[e >> 2] = y + 4;
    c[y >> 2] = x;
    break;
   }
  case 3:
   {
    y = a[p >> 0] | 0;
    r = (y & 1) == 0;
    if ((r ? (y & 255) >>> 1 : c[J >> 2] | 0) | 0) {
     x = c[(r ? J : c[K >> 2] | 0) >> 2] | 0;
     y = c[e >> 2] | 0;
     c[e >> 2] = y + 4;
     c[y >> 2] = x;
    }
    break;
   }
  case 2:
   {
    v = a[o >> 0] | 0;
    r = (v & 1) == 0;
    v = r ? (v & 255) >>> 1 : c[C >> 2] | 0;
    if (!(D | (v | 0) == 0)) {
     r = r ? C : c[E >> 2] | 0;
     t = r + (v << 2) | 0;
     u = c[e >> 2] | 0;
     if (v) {
      s = u;
      while (1) {
       c[s >> 2] = c[r >> 2];
       r = r + 4 | 0;
       if ((r | 0) == (t | 0)) break; else s = s + 4 | 0;
      }
     }
     c[e >> 2] = u + (v << 2);
    }
    break;
   }
  case 4:
   {
    r = c[e >> 2] | 0;
    g = j ? g + 4 | 0 : g;
    a : do if (g >>> 0 < h >>> 0) {
     s = g;
     do {
      if (!(mb[c[(c[i >> 2] | 0) + 12 >> 2] & 31](i, 2048, c[s >> 2] | 0) | 0)) break a;
      s = s + 4 | 0;
     } while (s >>> 0 < h >>> 0);
    } else s = g; while (0);
    if (F) {
     if (s >>> 0 > g >>> 0 & A) {
      v = c[e >> 2] | 0;
      u = q;
      while (1) {
       s = s + -4 | 0;
       t = v + 4 | 0;
       c[v >> 2] = c[s >> 2];
       w = u + -1 | 0;
       u = (u | 0) > 1;
       if (s >>> 0 > g >>> 0 & u) {
        v = t;
        u = w;
       } else {
        v = w;
        break;
       }
      }
      c[e >> 2] = t;
      t = v;
     } else {
      u = A;
      t = q;
     }
     if (u) w = zb[c[(c[i >> 2] | 0) + 44 >> 2] & 15](i, 48) | 0; else w = 0;
     x = c[e >> 2] | 0;
     u = t + ((t | 0) < 0 ? ~t : -1) | 0;
     if ((t | 0) > 0) {
      v = x;
      while (1) {
       c[v >> 2] = w;
       if ((t | 0) > 1) {
        v = v + 4 | 0;
        t = t + -1 | 0;
       } else break;
      }
     }
     c[e >> 2] = x + (u + 2 << 2);
     c[x + (u + 1 << 2) >> 2] = l;
    }
    if ((s | 0) == (g | 0)) {
     x = zb[c[(c[i >> 2] | 0) + 44 >> 2] & 15](i, 48) | 0;
     y = c[e >> 2] | 0;
     s = y + 4 | 0;
     c[e >> 2] = s;
     c[y >> 2] = x;
    } else {
     x = a[n >> 0] | 0;
     t = (x & 1) == 0;
     y = c[G >> 2] | 0;
     if (!((t ? (x & 255) >>> 1 : y) | 0)) t = -1; else t = a[(t ? I : c[H >> 2] | 0) >> 0] | 0;
     if ((s | 0) != (g | 0)) {
      w = 0;
      x = 0;
      while (1) {
       u = c[e >> 2] | 0;
       if ((x | 0) == (t | 0)) {
        v = u + 4 | 0;
        c[e >> 2] = v;
        c[u >> 2] = m;
        w = w + 1 | 0;
        u = a[n >> 0] | 0;
        t = (u & 1) == 0;
        if (w >>> 0 < (t ? (u & 255) >>> 1 : y) >>> 0) {
         t = a[(t ? I : c[H >> 2] | 0) + w >> 0] | 0;
         u = v;
         t = t << 24 >> 24 == 127 ? -1 : t << 24 >> 24;
         v = 0;
        } else {
         u = v;
         t = x;
         v = 0;
        }
       } else v = x;
       s = s + -4 | 0;
       x = c[s >> 2] | 0;
       c[e >> 2] = u + 4;
       c[u >> 2] = x;
       if ((s | 0) == (g | 0)) break; else x = v + 1 | 0;
      }
     }
     s = c[e >> 2] | 0;
    }
    if ((r | 0) != (s | 0) ? (B = s + -4 | 0, r >>> 0 < B >>> 0) : 0) {
     s = B;
     do {
      y = c[r >> 2] | 0;
      c[r >> 2] = c[s >> 2];
      c[s >> 2] = y;
      r = r + 4 | 0;
      s = s + -4 | 0;
     } while (r >>> 0 < s >>> 0);
    }
    break;
   }
  default:
   {}
  }
  z = z + 1 | 0;
 } while ((z | 0) != 4);
 r = a[p >> 0] | 0;
 g = (r & 1) == 0;
 r = g ? (r & 255) >>> 1 : c[J >> 2] | 0;
 if (r >>> 0 > 1) {
  s = g ? J : c[K >> 2] | 0;
  g = s + 4 | 0;
  s = s + (r << 2) | 0;
  t = c[e >> 2] | 0;
  u = s - g | 0;
  if ((r | 0) != 1) {
   r = t;
   while (1) {
    c[r >> 2] = c[g >> 2];
    g = g + 4 | 0;
    if ((g | 0) == (s | 0)) break; else r = r + 4 | 0;
   }
  }
  c[e >> 2] = t + (u >>> 2 << 2);
 }
 switch (f & 176 | 0) {
 case 32:
  {
   c[d >> 2] = c[e >> 2];
   break;
  }
 case 16:
  break;
 default:
  c[d >> 2] = b;
 }
 return;
}

function ak(b, d, e, f, g, h, j, k, l, m) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 z = i;
 i = i + 112 | 0;
 n = z + 108 | 0;
 o = z + 96 | 0;
 p = z + 92 | 0;
 q = z + 80 | 0;
 x = z + 68 | 0;
 y = z + 56 | 0;
 r = z + 52 | 0;
 s = z + 40 | 0;
 t = z + 36 | 0;
 u = z + 24 | 0;
 v = z + 12 | 0;
 w = z;
 if (b) {
  e = Fk(e, 8936) | 0;
  b = c[e >> 2] | 0;
  if (d) {
   qb[c[b + 44 >> 2] & 63](n, e);
   d = c[n >> 2] | 0;
   a[f >> 0] = d;
   a[f + 1 >> 0] = d >> 8;
   a[f + 2 >> 0] = d >> 16;
   a[f + 3 >> 0] = d >> 24;
   qb[c[(c[e >> 2] | 0) + 32 >> 2] & 63](o, e);
   if (!(a[l >> 0] & 1)) {
    a[l + 1 >> 0] = 0;
    a[l >> 0] = 0;
   } else {
    a[c[l + 8 >> 2] >> 0] = 0;
    c[l + 4 >> 2] = 0;
   }
   af(l, 0);
   c[l >> 2] = c[o >> 2];
   c[l + 4 >> 2] = c[o + 4 >> 2];
   c[l + 8 >> 2] = c[o + 8 >> 2];
   c[o >> 2] = 0;
   c[o + 4 >> 2] = 0;
   c[o + 8 >> 2] = 0;
   Xe(o);
   b = e;
  } else {
   qb[c[b + 40 >> 2] & 63](p, e);
   d = c[p >> 2] | 0;
   a[f >> 0] = d;
   a[f + 1 >> 0] = d >> 8;
   a[f + 2 >> 0] = d >> 16;
   a[f + 3 >> 0] = d >> 24;
   qb[c[(c[e >> 2] | 0) + 28 >> 2] & 63](q, e);
   if (!(a[l >> 0] & 1)) {
    a[l + 1 >> 0] = 0;
    a[l >> 0] = 0;
   } else {
    a[c[l + 8 >> 2] >> 0] = 0;
    c[l + 4 >> 2] = 0;
   }
   af(l, 0);
   c[l >> 2] = c[q >> 2];
   c[l + 4 >> 2] = c[q + 4 >> 2];
   c[l + 8 >> 2] = c[q + 8 >> 2];
   c[q >> 2] = 0;
   c[q + 4 >> 2] = 0;
   c[q + 8 >> 2] = 0;
   Xe(q);
   b = e;
  }
  a[g >> 0] = tb[c[(c[e >> 2] | 0) + 12 >> 2] & 63](e) | 0;
  a[h >> 0] = tb[c[(c[e >> 2] | 0) + 16 >> 2] & 63](e) | 0;
  qb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](x, e);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  af(j, 0);
  c[j >> 2] = c[x >> 2];
  c[j + 4 >> 2] = c[x + 4 >> 2];
  c[j + 8 >> 2] = c[x + 8 >> 2];
  c[x >> 2] = 0;
  c[x + 4 >> 2] = 0;
  c[x + 8 >> 2] = 0;
  Xe(x);
  qb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](y, e);
  if (!(a[k >> 0] & 1)) {
   a[k + 1 >> 0] = 0;
   a[k >> 0] = 0;
  } else {
   a[c[k + 8 >> 2] >> 0] = 0;
   c[k + 4 >> 2] = 0;
  }
  af(k, 0);
  c[k >> 2] = c[y >> 2];
  c[k + 4 >> 2] = c[y + 4 >> 2];
  c[k + 8 >> 2] = c[y + 8 >> 2];
  c[y >> 2] = 0;
  c[y + 4 >> 2] = 0;
  c[y + 8 >> 2] = 0;
  Xe(y);
  b = tb[c[(c[e >> 2] | 0) + 36 >> 2] & 63](e) | 0;
 } else {
  e = Fk(e, 8872) | 0;
  b = c[e >> 2] | 0;
  if (d) {
   qb[c[b + 44 >> 2] & 63](r, e);
   d = c[r >> 2] | 0;
   a[f >> 0] = d;
   a[f + 1 >> 0] = d >> 8;
   a[f + 2 >> 0] = d >> 16;
   a[f + 3 >> 0] = d >> 24;
   qb[c[(c[e >> 2] | 0) + 32 >> 2] & 63](s, e);
   if (!(a[l >> 0] & 1)) {
    a[l + 1 >> 0] = 0;
    a[l >> 0] = 0;
   } else {
    a[c[l + 8 >> 2] >> 0] = 0;
    c[l + 4 >> 2] = 0;
   }
   af(l, 0);
   c[l >> 2] = c[s >> 2];
   c[l + 4 >> 2] = c[s + 4 >> 2];
   c[l + 8 >> 2] = c[s + 8 >> 2];
   c[s >> 2] = 0;
   c[s + 4 >> 2] = 0;
   c[s + 8 >> 2] = 0;
   Xe(s);
   b = e;
  } else {
   qb[c[b + 40 >> 2] & 63](t, e);
   d = c[t >> 2] | 0;
   a[f >> 0] = d;
   a[f + 1 >> 0] = d >> 8;
   a[f + 2 >> 0] = d >> 16;
   a[f + 3 >> 0] = d >> 24;
   qb[c[(c[e >> 2] | 0) + 28 >> 2] & 63](u, e);
   if (!(a[l >> 0] & 1)) {
    a[l + 1 >> 0] = 0;
    a[l >> 0] = 0;
   } else {
    a[c[l + 8 >> 2] >> 0] = 0;
    c[l + 4 >> 2] = 0;
   }
   af(l, 0);
   c[l >> 2] = c[u >> 2];
   c[l + 4 >> 2] = c[u + 4 >> 2];
   c[l + 8 >> 2] = c[u + 8 >> 2];
   c[u >> 2] = 0;
   c[u + 4 >> 2] = 0;
   c[u + 8 >> 2] = 0;
   Xe(u);
   b = e;
  }
  a[g >> 0] = tb[c[(c[e >> 2] | 0) + 12 >> 2] & 63](e) | 0;
  a[h >> 0] = tb[c[(c[e >> 2] | 0) + 16 >> 2] & 63](e) | 0;
  qb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](v, e);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  af(j, 0);
  c[j >> 2] = c[v >> 2];
  c[j + 4 >> 2] = c[v + 4 >> 2];
  c[j + 8 >> 2] = c[v + 8 >> 2];
  c[v >> 2] = 0;
  c[v + 4 >> 2] = 0;
  c[v + 8 >> 2] = 0;
  Xe(v);
  qb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](w, e);
  if (!(a[k >> 0] & 1)) {
   a[k + 1 >> 0] = 0;
   a[k >> 0] = 0;
  } else {
   a[c[k + 8 >> 2] >> 0] = 0;
   c[k + 4 >> 2] = 0;
  }
  af(k, 0);
  c[k >> 2] = c[w >> 2];
  c[k + 4 >> 2] = c[w + 4 >> 2];
  c[k + 8 >> 2] = c[w + 8 >> 2];
  c[w >> 2] = 0;
  c[w + 4 >> 2] = 0;
  c[w + 8 >> 2] = 0;
  Xe(w);
  b = tb[c[(c[e >> 2] | 0) + 36 >> 2] & 63](e) | 0;
 }
 c[m >> 2] = b;
 i = z;
 return;
}

function gk(b, d, e, f, g, h, j, k, l, m) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 z = i;
 i = i + 112 | 0;
 n = z + 108 | 0;
 o = z + 96 | 0;
 r = z + 92 | 0;
 s = z + 80 | 0;
 t = z + 68 | 0;
 u = z + 56 | 0;
 v = z + 52 | 0;
 w = z + 40 | 0;
 x = z + 36 | 0;
 y = z + 24 | 0;
 p = z + 12 | 0;
 q = z;
 if (b) {
  b = Fk(e, 9064) | 0;
  e = c[b >> 2] | 0;
  if (d) {
   qb[c[e + 44 >> 2] & 63](n, b);
   d = c[n >> 2] | 0;
   a[f >> 0] = d;
   a[f + 1 >> 0] = d >> 8;
   a[f + 2 >> 0] = d >> 16;
   a[f + 3 >> 0] = d >> 24;
   qb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](o, b);
   if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
   c[l + 4 >> 2] = 0;
   kf(l, 0);
   c[l >> 2] = c[o >> 2];
   c[l + 4 >> 2] = c[o + 4 >> 2];
   c[l + 8 >> 2] = c[o + 8 >> 2];
   c[o >> 2] = 0;
   c[o + 4 >> 2] = 0;
   c[o + 8 >> 2] = 0;
   gf(o);
  } else {
   qb[c[e + 40 >> 2] & 63](r, b);
   d = c[r >> 2] | 0;
   a[f >> 0] = d;
   a[f + 1 >> 0] = d >> 8;
   a[f + 2 >> 0] = d >> 16;
   a[f + 3 >> 0] = d >> 24;
   qb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](s, b);
   if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
   c[l + 4 >> 2] = 0;
   kf(l, 0);
   c[l >> 2] = c[s >> 2];
   c[l + 4 >> 2] = c[s + 4 >> 2];
   c[l + 8 >> 2] = c[s + 8 >> 2];
   c[s >> 2] = 0;
   c[s + 4 >> 2] = 0;
   c[s + 8 >> 2] = 0;
   gf(s);
  }
  c[g >> 2] = tb[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  c[h >> 2] = tb[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  qb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](t, b);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  af(j, 0);
  c[j >> 2] = c[t >> 2];
  c[j + 4 >> 2] = c[t + 4 >> 2];
  c[j + 8 >> 2] = c[t + 8 >> 2];
  c[t >> 2] = 0;
  c[t + 4 >> 2] = 0;
  c[t + 8 >> 2] = 0;
  Xe(t);
  qb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](u, b);
  if (!(a[k >> 0] & 1)) a[k >> 0] = 0; else c[c[k + 8 >> 2] >> 2] = 0;
  c[k + 4 >> 2] = 0;
  kf(k, 0);
  c[k >> 2] = c[u >> 2];
  c[k + 4 >> 2] = c[u + 4 >> 2];
  c[k + 8 >> 2] = c[u + 8 >> 2];
  c[u >> 2] = 0;
  c[u + 4 >> 2] = 0;
  c[u + 8 >> 2] = 0;
  gf(u);
  b = tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 } else {
  b = Fk(e, 9e3) | 0;
  e = c[b >> 2] | 0;
  if (d) {
   qb[c[e + 44 >> 2] & 63](v, b);
   d = c[v >> 2] | 0;
   a[f >> 0] = d;
   a[f + 1 >> 0] = d >> 8;
   a[f + 2 >> 0] = d >> 16;
   a[f + 3 >> 0] = d >> 24;
   qb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](w, b);
   if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
   c[l + 4 >> 2] = 0;
   kf(l, 0);
   c[l >> 2] = c[w >> 2];
   c[l + 4 >> 2] = c[w + 4 >> 2];
   c[l + 8 >> 2] = c[w + 8 >> 2];
   c[w >> 2] = 0;
   c[w + 4 >> 2] = 0;
   c[w + 8 >> 2] = 0;
   gf(w);
  } else {
   qb[c[e + 40 >> 2] & 63](x, b);
   d = c[x >> 2] | 0;
   a[f >> 0] = d;
   a[f + 1 >> 0] = d >> 8;
   a[f + 2 >> 0] = d >> 16;
   a[f + 3 >> 0] = d >> 24;
   qb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](y, b);
   if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
   c[l + 4 >> 2] = 0;
   kf(l, 0);
   c[l >> 2] = c[y >> 2];
   c[l + 4 >> 2] = c[y + 4 >> 2];
   c[l + 8 >> 2] = c[y + 8 >> 2];
   c[y >> 2] = 0;
   c[y + 4 >> 2] = 0;
   c[y + 8 >> 2] = 0;
   gf(y);
  }
  c[g >> 2] = tb[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  c[h >> 2] = tb[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  qb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](p, b);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  af(j, 0);
  c[j >> 2] = c[p >> 2];
  c[j + 4 >> 2] = c[p + 4 >> 2];
  c[j + 8 >> 2] = c[p + 8 >> 2];
  c[p >> 2] = 0;
  c[p + 4 >> 2] = 0;
  c[p + 8 >> 2] = 0;
  Xe(p);
  qb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](q, b);
  if (!(a[k >> 0] & 1)) a[k >> 0] = 0; else c[c[k + 8 >> 2] >> 2] = 0;
  c[k + 4 >> 2] = 0;
  kf(k, 0);
  c[k >> 2] = c[q >> 2];
  c[k + 4 >> 2] = c[q + 4 >> 2];
  c[k + 8 >> 2] = c[q + 8 >> 2];
  c[q >> 2] = 0;
  c[q + 4 >> 2] = 0;
  c[q + 8 >> 2] = 0;
  gf(q);
  b = tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 }
 c[m >> 2] = b;
 i = z;
 return;
}

function Cm(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0;
 y = i;
 i = i + 112 | 0;
 l = y;
 m = (f - e | 0) / 12 | 0;
 if (m >>> 0 > 100) {
  l = ke(m) | 0;
  if (!l) zc(); else {
   w = l;
   k = l;
  }
 } else {
  w = 0;
  k = l;
 }
 if ((e | 0) == (f | 0)) l = 0; else {
  p = e;
  n = 0;
  o = k;
  while (1) {
   l = a[p >> 0] | 0;
   if (!(l & 1)) l = (l & 255) >>> 1; else l = c[p + 4 >> 2] | 0;
   if (!l) {
    a[o >> 0] = 2;
    l = n + 1 | 0;
    m = m + -1 | 0;
   } else {
    a[o >> 0] = 1;
    l = n;
   }
   p = p + 12 | 0;
   if ((p | 0) == (f | 0)) break; else {
    n = l;
    o = o + 1 | 0;
   }
  }
 }
 u = (e | 0) == (f | 0);
 v = (e | 0) == (f | 0);
 t = 0;
 q = m;
 a : while (1) {
  m = c[b >> 2] | 0;
  do if (m) {
   n = c[m + 12 >> 2] | 0;
   if ((n | 0) == (c[m + 16 >> 2] | 0)) m = tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else m = c[n >> 2] | 0;
   if ((m | 0) == -1) {
    c[b >> 2] = 0;
    p = 1;
    break;
   } else {
    p = (c[b >> 2] | 0) == 0;
    break;
   }
  } else p = 1; while (0);
  n = c[d >> 2] | 0;
  if (n) {
   m = c[n + 12 >> 2] | 0;
   if ((m | 0) == (c[n + 16 >> 2] | 0)) m = tb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0; else m = c[m >> 2] | 0;
   if ((m | 0) == -1) {
    c[d >> 2] = 0;
    n = 0;
    o = 1;
   } else o = 0;
  } else {
   n = 0;
   o = 1;
  }
  m = c[b >> 2] | 0;
  if (!((q | 0) != 0 & (p ^ o))) break;
  n = c[m + 12 >> 2] | 0;
  if ((n | 0) == (c[m + 16 >> 2] | 0)) m = tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else m = c[n >> 2] | 0;
  if (!j) m = zb[c[(c[g >> 2] | 0) + 28 >> 2] & 15](g, m) | 0;
  s = t + 1 | 0;
  if (u) {
   m = 0;
   p = q;
  } else {
   p = 0;
   r = e;
   o = q;
   q = k;
   while (1) {
    do if ((a[q >> 0] | 0) == 1) {
     if (!(a[r >> 0] & 1)) n = r + 4 | 0; else n = c[r + 8 >> 2] | 0;
     n = c[n + (t << 2) >> 2] | 0;
     if (!j) n = zb[c[(c[g >> 2] | 0) + 28 >> 2] & 15](g, n) | 0;
     if ((m | 0) != (n | 0)) {
      a[q >> 0] = 0;
      n = p;
      o = o + -1 | 0;
      break;
     }
     n = a[r >> 0] | 0;
     if (!(n & 1)) n = (n & 255) >>> 1; else n = c[r + 4 >> 2] | 0;
     if ((n | 0) == (s | 0)) {
      a[q >> 0] = 2;
      n = 1;
      l = l + 1 | 0;
      o = o + -1 | 0;
     } else n = 1;
    } else n = p; while (0);
    r = r + 12 | 0;
    if ((r | 0) == (f | 0)) {
     m = n;
     p = o;
     break;
    } else {
     p = n;
     q = q + 1 | 0;
    }
   }
  }
  if (!m) {
   t = s;
   q = p;
   continue;
  }
  m = c[b >> 2] | 0;
  n = m + 12 | 0;
  o = c[n >> 2] | 0;
  if ((o | 0) == (c[m + 16 >> 2] | 0)) tb[c[(c[m >> 2] | 0) + 40 >> 2] & 63](m) | 0; else c[n >> 2] = o + 4;
  if ((l + p | 0) >>> 0 < 2 | v) {
   t = s;
   q = p;
   continue;
  } else {
   m = e;
   o = k;
  }
  while (1) {
   if ((a[o >> 0] | 0) == 2) {
    n = a[m >> 0] | 0;
    if (!(n & 1)) n = (n & 255) >>> 1; else n = c[m + 4 >> 2] | 0;
    if ((n | 0) != (s | 0)) {
     a[o >> 0] = 0;
     l = l + -1 | 0;
    }
   }
   m = m + 12 | 0;
   if ((m | 0) == (f | 0)) {
    t = s;
    q = p;
    continue a;
   } else o = o + 1 | 0;
  }
 }
 do if (m) {
  l = c[m + 12 >> 2] | 0;
  if ((l | 0) == (c[m + 16 >> 2] | 0)) l = tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else l = c[l >> 2] | 0;
  if ((l | 0) == -1) {
   c[b >> 2] = 0;
   m = 1;
   break;
  } else {
   m = (c[b >> 2] | 0) == 0;
   break;
  }
 } else m = 1; while (0);
 do if (n) {
  l = c[n + 12 >> 2] | 0;
  if ((l | 0) == (c[n + 16 >> 2] | 0)) l = tb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0; else l = c[l >> 2] | 0;
  if ((l | 0) != -1) if (m) break; else {
   x = 74;
   break;
  } else {
   c[d >> 2] = 0;
   x = 72;
   break;
  }
 } else x = 72; while (0);
 if ((x | 0) == 72 ? m : 0) x = 74;
 if ((x | 0) == 74) c[h >> 2] = c[h >> 2] | 2;
 b : do if ((e | 0) == (f | 0)) x = 78; else while (1) {
  if ((a[k >> 0] | 0) == 2) break b;
  e = e + 12 | 0;
  if ((e | 0) == (f | 0)) {
   x = 78;
   break;
  } else k = k + 1 | 0;
 } while (0);
 if ((x | 0) == 78) {
  c[h >> 2] = c[h >> 2] | 4;
  e = f;
 }
 le(w);
 i = y;
 return e | 0;
}

function oe(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 o = a + 4 | 0;
 p = c[o >> 2] | 0;
 j = p & -8;
 l = a + j | 0;
 i = c[1538] | 0;
 d = p & 3;
 if (!((d | 0) != 1 & a >>> 0 >= i >>> 0 & a >>> 0 < l >>> 0)) za();
 e = a + (j | 4) | 0;
 f = c[e >> 2] | 0;
 if (!(f & 1)) za();
 if (!d) {
  if (b >>> 0 < 256) {
   a = 0;
   return a | 0;
  }
  if (j >>> 0 >= (b + 4 | 0) >>> 0 ? (j - b | 0) >>> 0 <= c[1654] << 1 >>> 0 : 0) return a | 0;
  a = 0;
  return a | 0;
 }
 if (j >>> 0 >= b >>> 0) {
  d = j - b | 0;
  if (d >>> 0 <= 15) return a | 0;
  c[o >> 2] = p & 1 | b | 2;
  c[a + (b + 4) >> 2] = d | 3;
  c[e >> 2] = c[e >> 2] | 1;
  pe(a + b | 0, d);
  return a | 0;
 }
 if ((l | 0) == (c[1540] | 0)) {
  d = (c[1537] | 0) + j | 0;
  if (d >>> 0 <= b >>> 0) {
   a = 0;
   return a | 0;
  }
  n = d - b | 0;
  c[o >> 2] = p & 1 | b | 2;
  c[a + (b + 4) >> 2] = n | 1;
  c[1540] = a + b;
  c[1537] = n;
  return a | 0;
 }
 if ((l | 0) == (c[1539] | 0)) {
  e = (c[1536] | 0) + j | 0;
  if (e >>> 0 < b >>> 0) {
   a = 0;
   return a | 0;
  }
  d = e - b | 0;
  if (d >>> 0 > 15) {
   c[o >> 2] = p & 1 | b | 2;
   c[a + (b + 4) >> 2] = d | 1;
   c[a + e >> 2] = d;
   e = a + (e + 4) | 0;
   c[e >> 2] = c[e >> 2] & -2;
   e = a + b | 0;
  } else {
   c[o >> 2] = p & 1 | e | 2;
   e = a + (e + 4) | 0;
   c[e >> 2] = c[e >> 2] | 1;
   e = 0;
   d = 0;
  }
  c[1536] = d;
  c[1539] = e;
  return a | 0;
 }
 if (f & 2) {
  a = 0;
  return a | 0;
 }
 m = (f & -8) + j | 0;
 if (m >>> 0 < b >>> 0) {
  a = 0;
  return a | 0;
 }
 n = m - b | 0;
 g = f >>> 3;
 do if (f >>> 0 >= 256) {
  h = c[a + (j + 24) >> 2] | 0;
  g = c[a + (j + 12) >> 2] | 0;
  do if ((g | 0) == (l | 0)) {
   e = a + (j + 20) | 0;
   d = c[e >> 2] | 0;
   if (!d) {
    e = a + (j + 16) | 0;
    d = c[e >> 2] | 0;
    if (!d) {
     k = 0;
     break;
    }
   }
   while (1) {
    f = d + 20 | 0;
    g = c[f >> 2] | 0;
    if (g) {
     d = g;
     e = f;
     continue;
    }
    f = d + 16 | 0;
    g = c[f >> 2] | 0;
    if (!g) break; else {
     d = g;
     e = f;
    }
   }
   if (e >>> 0 < i >>> 0) za(); else {
    c[e >> 2] = 0;
    k = d;
    break;
   }
  } else {
   f = c[a + (j + 8) >> 2] | 0;
   if (f >>> 0 < i >>> 0) za();
   d = f + 12 | 0;
   if ((c[d >> 2] | 0) != (l | 0)) za();
   e = g + 8 | 0;
   if ((c[e >> 2] | 0) == (l | 0)) {
    c[d >> 2] = g;
    c[e >> 2] = f;
    k = g;
    break;
   } else za();
  } while (0);
  if (h) {
   d = c[a + (j + 28) >> 2] | 0;
   e = 6440 + (d << 2) | 0;
   if ((l | 0) == (c[e >> 2] | 0)) {
    c[e >> 2] = k;
    if (!k) {
     c[1535] = c[1535] & ~(1 << d);
     break;
    }
   } else {
    if (h >>> 0 < (c[1538] | 0) >>> 0) za();
    d = h + 16 | 0;
    if ((c[d >> 2] | 0) == (l | 0)) c[d >> 2] = k; else c[h + 20 >> 2] = k;
    if (!k) break;
   }
   e = c[1538] | 0;
   if (k >>> 0 < e >>> 0) za();
   c[k + 24 >> 2] = h;
   d = c[a + (j + 16) >> 2] | 0;
   do if (d) if (d >>> 0 < e >>> 0) za(); else {
    c[k + 16 >> 2] = d;
    c[d + 24 >> 2] = k;
    break;
   } while (0);
   d = c[a + (j + 20) >> 2] | 0;
   if (d) if (d >>> 0 < (c[1538] | 0) >>> 0) za(); else {
    c[k + 20 >> 2] = d;
    c[d + 24 >> 2] = k;
    break;
   }
  }
 } else {
  f = c[a + (j + 8) >> 2] | 0;
  e = c[a + (j + 12) >> 2] | 0;
  d = 6176 + (g << 1 << 2) | 0;
  if ((f | 0) != (d | 0)) {
   if (f >>> 0 < i >>> 0) za();
   if ((c[f + 12 >> 2] | 0) != (l | 0)) za();
  }
  if ((e | 0) == (f | 0)) {
   c[1534] = c[1534] & ~(1 << g);
   break;
  }
  if ((e | 0) != (d | 0)) {
   if (e >>> 0 < i >>> 0) za();
   d = e + 8 | 0;
   if ((c[d >> 2] | 0) == (l | 0)) h = d; else za();
  } else h = e + 8 | 0;
  c[f + 12 >> 2] = e;
  c[h >> 2] = f;
 } while (0);
 if (n >>> 0 < 16) {
  c[o >> 2] = m | p & 1 | 2;
  b = a + (m | 4) | 0;
  c[b >> 2] = c[b >> 2] | 1;
  return a | 0;
 } else {
  c[o >> 2] = p & 1 | b | 2;
  c[a + (b + 4) >> 2] = n | 3;
  p = a + (m | 4) | 0;
  c[p >> 2] = c[p >> 2] | 1;
  pe(a + b | 0, n);
  return a | 0;
 }
 return 0;
}

function rm(b, e, f, g, h, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 A = i;
 i = i + 112 | 0;
 m = A;
 n = (g - f | 0) / 12 | 0;
 if (n >>> 0 > 100) {
  m = ke(n) | 0;
  if (!m) zc(); else {
   y = m;
   l = m;
  }
 } else {
  y = 0;
  l = m;
 }
 if ((f | 0) == (g | 0)) m = 0; else {
  q = f;
  o = 0;
  p = l;
  while (1) {
   m = a[q >> 0] | 0;
   if (!(m & 1)) m = (m & 255) >>> 1; else m = c[q + 4 >> 2] | 0;
   if (!m) {
    a[p >> 0] = 2;
    m = o + 1 | 0;
    n = n + -1 | 0;
   } else {
    a[p >> 0] = 1;
    m = o;
   }
   q = q + 12 | 0;
   if ((q | 0) == (g | 0)) break; else {
    o = m;
    p = p + 1 | 0;
   }
  }
 }
 w = (f | 0) == (g | 0);
 x = (f | 0) == (g | 0);
 v = 0;
 r = m;
 t = n;
 a : while (1) {
  m = c[b >> 2] | 0;
  do if (m) {
   if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
    c[b >> 2] = 0;
    m = 0;
    break;
   } else {
    m = c[b >> 2] | 0;
    break;
   }
  } else m = 0; while (0);
  p = (m | 0) == 0;
  n = c[e >> 2] | 0;
  if (n) {
   if ((c[n + 12 >> 2] | 0) == (c[n + 16 >> 2] | 0) ? (tb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    n = 0;
   }
  } else n = 0;
  o = (n | 0) == 0;
  m = c[b >> 2] | 0;
  if (!((t | 0) != 0 & (p ^ o))) break;
  n = c[m + 12 >> 2] | 0;
  if ((n | 0) == (c[m + 16 >> 2] | 0)) m = tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0; else m = d[n >> 0] | 0;
  m = m & 255;
  if (!k) m = zb[c[(c[h >> 2] | 0) + 12 >> 2] & 15](h, m) | 0;
  u = v + 1 | 0;
  if (w) {
   m = 0;
   p = r;
   q = t;
  } else {
   q = 0;
   s = f;
   p = r;
   o = t;
   r = l;
   while (1) {
    do if ((a[r >> 0] | 0) == 1) {
     if (!(a[s >> 0] & 1)) n = s + 1 | 0; else n = c[s + 8 >> 2] | 0;
     n = a[n + v >> 0] | 0;
     if (!k) n = zb[c[(c[h >> 2] | 0) + 12 >> 2] & 15](h, n) | 0;
     if (m << 24 >> 24 != n << 24 >> 24) {
      a[r >> 0] = 0;
      n = q;
      o = o + -1 | 0;
      break;
     }
     n = a[s >> 0] | 0;
     if (!(n & 1)) n = (n & 255) >>> 1; else n = c[s + 4 >> 2] | 0;
     if ((n | 0) == (u | 0)) {
      a[r >> 0] = 2;
      n = 1;
      p = p + 1 | 0;
      o = o + -1 | 0;
     } else n = 1;
    } else n = q; while (0);
    s = s + 12 | 0;
    if ((s | 0) == (g | 0)) {
     m = n;
     q = o;
     break;
    } else {
     q = n;
     r = r + 1 | 0;
    }
   }
  }
  if (!m) {
   v = u;
   r = p;
   t = q;
   continue;
  }
  m = c[b >> 2] | 0;
  n = m + 12 | 0;
  o = c[n >> 2] | 0;
  if ((o | 0) == (c[m + 16 >> 2] | 0)) tb[c[(c[m >> 2] | 0) + 40 >> 2] & 63](m) | 0; else c[n >> 2] = o + 1;
  if ((p + q | 0) >>> 0 < 2 | x) {
   v = u;
   r = p;
   t = q;
   continue;
  } else {
   m = f;
   o = p;
   p = l;
  }
  while (1) {
   if ((a[p >> 0] | 0) == 2) {
    n = a[m >> 0] | 0;
    if (!(n & 1)) n = (n & 255) >>> 1; else n = c[m + 4 >> 2] | 0;
    if ((n | 0) != (u | 0)) {
     a[p >> 0] = 0;
     o = o + -1 | 0;
    }
   }
   m = m + 12 | 0;
   if ((m | 0) == (g | 0)) {
    v = u;
    r = o;
    t = q;
    continue a;
   } else p = p + 1 | 0;
  }
 }
 do if (m) {
  if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0)) if ((tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1) {
   c[b >> 2] = 0;
   m = 0;
   break;
  } else {
   m = c[b >> 2] | 0;
   break;
  }
 } else m = 0; while (0);
 m = (m | 0) == 0;
 do if (!o) {
  if ((c[n + 12 >> 2] | 0) == (c[n + 16 >> 2] | 0) ? (tb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](n) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   z = 65;
   break;
  }
  if (!m) z = 66;
 } else z = 65; while (0);
 if ((z | 0) == 65 ? m : 0) z = 66;
 if ((z | 0) == 66) c[j >> 2] = c[j >> 2] | 2;
 b : do if ((f | 0) == (g | 0)) z = 70; else while (1) {
  if ((a[l >> 0] | 0) == 2) break b;
  f = f + 12 | 0;
  if ((f | 0) == (g | 0)) {
   z = 70;
   break;
  } else l = l + 1 | 0;
 } while (0);
 if ((z | 0) == 70) {
  c[j >> 2] = c[j >> 2] | 4;
  f = g;
 }
 le(y);
 i = A;
 return f | 0;
}

function Rj(b, d, e, f, g, h, j, k, l, m) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 x = i;
 i = i + 112 | 0;
 n = x + 100 | 0;
 o = x + 88 | 0;
 p = x + 76 | 0;
 q = x + 64 | 0;
 r = x + 52 | 0;
 s = x + 48 | 0;
 t = x + 36 | 0;
 u = x + 24 | 0;
 v = x + 12 | 0;
 w = x;
 if (b) {
  b = Fk(d, 8936) | 0;
  qb[c[(c[b >> 2] | 0) + 44 >> 2] & 63](n, b);
  w = c[n >> 2] | 0;
  a[e >> 0] = w;
  a[e + 1 >> 0] = w >> 8;
  a[e + 2 >> 0] = w >> 16;
  a[e + 3 >> 0] = w >> 24;
  qb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](o, b);
  if (!(a[l >> 0] & 1)) {
   a[l + 1 >> 0] = 0;
   a[l >> 0] = 0;
  } else {
   a[c[l + 8 >> 2] >> 0] = 0;
   c[l + 4 >> 2] = 0;
  }
  af(l, 0);
  c[l >> 2] = c[o >> 2];
  c[l + 4 >> 2] = c[o + 4 >> 2];
  c[l + 8 >> 2] = c[o + 8 >> 2];
  c[o >> 2] = 0;
  c[o + 4 >> 2] = 0;
  c[o + 8 >> 2] = 0;
  Xe(o);
  qb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](p, b);
  if (!(a[k >> 0] & 1)) {
   a[k + 1 >> 0] = 0;
   a[k >> 0] = 0;
  } else {
   a[c[k + 8 >> 2] >> 0] = 0;
   c[k + 4 >> 2] = 0;
  }
  af(k, 0);
  c[k >> 2] = c[p >> 2];
  c[k + 4 >> 2] = c[p + 4 >> 2];
  c[k + 8 >> 2] = c[p + 8 >> 2];
  c[p >> 2] = 0;
  c[p + 4 >> 2] = 0;
  c[p + 8 >> 2] = 0;
  Xe(p);
  a[f >> 0] = tb[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  a[g >> 0] = tb[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  qb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](q, b);
  if (!(a[h >> 0] & 1)) {
   a[h + 1 >> 0] = 0;
   a[h >> 0] = 0;
  } else {
   a[c[h + 8 >> 2] >> 0] = 0;
   c[h + 4 >> 2] = 0;
  }
  af(h, 0);
  c[h >> 2] = c[q >> 2];
  c[h + 4 >> 2] = c[q + 4 >> 2];
  c[h + 8 >> 2] = c[q + 8 >> 2];
  c[q >> 2] = 0;
  c[q + 4 >> 2] = 0;
  c[q + 8 >> 2] = 0;
  Xe(q);
  qb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](r, b);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  af(j, 0);
  c[j >> 2] = c[r >> 2];
  c[j + 4 >> 2] = c[r + 4 >> 2];
  c[j + 8 >> 2] = c[r + 8 >> 2];
  c[r >> 2] = 0;
  c[r + 4 >> 2] = 0;
  c[r + 8 >> 2] = 0;
  Xe(r);
  b = tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 } else {
  b = Fk(d, 8872) | 0;
  qb[c[(c[b >> 2] | 0) + 44 >> 2] & 63](s, b);
  s = c[s >> 2] | 0;
  a[e >> 0] = s;
  a[e + 1 >> 0] = s >> 8;
  a[e + 2 >> 0] = s >> 16;
  a[e + 3 >> 0] = s >> 24;
  qb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](t, b);
  if (!(a[l >> 0] & 1)) {
   a[l + 1 >> 0] = 0;
   a[l >> 0] = 0;
  } else {
   a[c[l + 8 >> 2] >> 0] = 0;
   c[l + 4 >> 2] = 0;
  }
  af(l, 0);
  c[l >> 2] = c[t >> 2];
  c[l + 4 >> 2] = c[t + 4 >> 2];
  c[l + 8 >> 2] = c[t + 8 >> 2];
  c[t >> 2] = 0;
  c[t + 4 >> 2] = 0;
  c[t + 8 >> 2] = 0;
  Xe(t);
  qb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](u, b);
  if (!(a[k >> 0] & 1)) {
   a[k + 1 >> 0] = 0;
   a[k >> 0] = 0;
  } else {
   a[c[k + 8 >> 2] >> 0] = 0;
   c[k + 4 >> 2] = 0;
  }
  af(k, 0);
  c[k >> 2] = c[u >> 2];
  c[k + 4 >> 2] = c[u + 4 >> 2];
  c[k + 8 >> 2] = c[u + 8 >> 2];
  c[u >> 2] = 0;
  c[u + 4 >> 2] = 0;
  c[u + 8 >> 2] = 0;
  Xe(u);
  a[f >> 0] = tb[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  a[g >> 0] = tb[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  qb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](v, b);
  if (!(a[h >> 0] & 1)) {
   a[h + 1 >> 0] = 0;
   a[h >> 0] = 0;
  } else {
   a[c[h + 8 >> 2] >> 0] = 0;
   c[h + 4 >> 2] = 0;
  }
  af(h, 0);
  c[h >> 2] = c[v >> 2];
  c[h + 4 >> 2] = c[v + 4 >> 2];
  c[h + 8 >> 2] = c[v + 8 >> 2];
  c[v >> 2] = 0;
  c[v + 4 >> 2] = 0;
  c[v + 8 >> 2] = 0;
  Xe(v);
  qb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](w, b);
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  af(j, 0);
  c[j >> 2] = c[w >> 2];
  c[j + 4 >> 2] = c[w + 4 >> 2];
  c[j + 8 >> 2] = c[w + 8 >> 2];
  c[w >> 2] = 0;
  c[w + 4 >> 2] = 0;
  c[w + 8 >> 2] = 0;
  Xe(w);
  b = tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 }
 c[m >> 2] = b;
 i = x;
 return;
}

function ld(b, e, f, g) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 h = c[e >> 2] | 0;
 if ((g | 0) != 0 ? (i = c[g >> 2] | 0, (i | 0) != 0) : 0) if (!b) {
  g = f;
  j = h;
  m = 16;
 } else {
  c[g >> 2] = 0;
  l = b;
  g = f;
  k = i;
  m = 37;
 } else if (!b) {
  g = f;
  m = 7;
 } else {
  i = b;
  g = f;
  m = 6;
 }
 a : while (1) if ((m | 0) == 6) {
  if (!g) {
   m = 26;
   break;
  } else b = i;
  while (1) {
   i = a[h >> 0] | 0;
   do if (((i & 255) + -1 | 0) >>> 0 < 127 ? g >>> 0 > 4 & (h & 3 | 0) == 0 : 0) {
    j = h;
    while (1) {
     h = c[j >> 2] | 0;
     if ((h + -16843009 | h) & -2139062144) {
      i = h;
      h = j;
      m = 32;
      break;
     }
     c[b >> 2] = h & 255;
     c[b + 4 >> 2] = d[j + 1 >> 0];
     c[b + 8 >> 2] = d[j + 2 >> 0];
     h = j + 4 | 0;
     i = b + 16 | 0;
     c[b + 12 >> 2] = d[j + 3 >> 0];
     g = g + -4 | 0;
     if (g >>> 0 > 4) {
      b = i;
      j = h;
     } else {
      m = 31;
      break;
     }
    }
    if ((m | 0) == 31) {
     b = i;
     i = a[h >> 0] | 0;
     break;
    } else if ((m | 0) == 32) {
     i = i & 255;
     break;
    }
   } while (0);
   i = i & 255;
   if ((i + -1 | 0) >>> 0 >= 127) break;
   h = h + 1 | 0;
   c[b >> 2] = i;
   g = g + -1 | 0;
   if (!g) {
    m = 26;
    break a;
   } else b = b + 4 | 0;
  }
  i = i + -194 | 0;
  if (i >>> 0 > 50) {
   m = 48;
   break;
  }
  l = b;
  k = c[2340 + (i << 2) >> 2] | 0;
  h = h + 1 | 0;
  m = 37;
  continue;
 } else if ((m | 0) == 7) {
  i = a[h >> 0] | 0;
  if (((i & 255) + -1 | 0) >>> 0 < 127 ? (h & 3 | 0) == 0 : 0) {
   i = c[h >> 2] | 0;
   if (!((i + -16843009 | i) & -2139062144)) do {
    h = h + 4 | 0;
    g = g + -4 | 0;
    i = c[h >> 2] | 0;
   } while (((i + -16843009 | i) & -2139062144 | 0) == 0);
   i = i & 255;
  }
  i = i & 255;
  if ((i + -1 | 0) >>> 0 < 127) {
   g = g + -1 | 0;
   h = h + 1 | 0;
   m = 7;
   continue;
  }
  i = i + -194 | 0;
  if (i >>> 0 > 50) {
   m = 48;
   break;
  }
  i = c[2340 + (i << 2) >> 2] | 0;
  j = h + 1 | 0;
  m = 16;
  continue;
 } else if ((m | 0) == 16) {
  m = (d[j >> 0] | 0) >>> 3;
  if ((m + -16 | m + (i >> 26)) >>> 0 > 7) {
   m = 17;
   break;
  }
  h = j + 1 | 0;
  if (i & 33554432) {
   if ((a[h >> 0] & -64) << 24 >> 24 != -128) {
    m = 20;
    break;
   }
   h = j + 2 | 0;
   if (i & 524288) {
    if ((a[h >> 0] & -64) << 24 >> 24 != -128) {
     m = 23;
     break;
    }
    h = j + 3 | 0;
   }
  }
  g = g + -1 | 0;
  m = 7;
  continue;
 } else if ((m | 0) == 37) {
  i = d[h >> 0] | 0;
  m = i >>> 3;
  if ((m + -16 | m + (k >> 26)) >>> 0 > 7) {
   m = 38;
   break;
  }
  j = h + 1 | 0;
  b = i + -128 | k << 6;
  if ((b | 0) < 0) {
   i = d[j >> 0] | 0;
   if ((i & 192 | 0) != 128) {
    m = 41;
    break;
   }
   j = h + 2 | 0;
   b = i + -128 | b << 6;
   if ((b | 0) < 0) {
    i = d[j >> 0] | 0;
    if ((i & 192 | 0) != 128) {
     m = 44;
     break;
    }
    b = i + -128 | b << 6;
    h = h + 3 | 0;
   } else h = j;
  } else h = j;
  c[l >> 2] = b;
  i = l + 4 | 0;
  g = g + -1 | 0;
  m = 6;
  continue;
 }
 if ((m | 0) == 17) {
  h = j + -1 | 0;
  m = 47;
 } else if ((m | 0) == 20) {
  h = j + -1 | 0;
  m = 47;
 } else if ((m | 0) == 23) {
  h = j + -1 | 0;
  m = 47;
 } else if ((m | 0) == 26) c[e >> 2] = h; else if ((m | 0) == 38) {
  b = l;
  i = k;
  h = h + -1 | 0;
  m = 47;
 } else if ((m | 0) == 41) {
  g = l;
  f = h + -1 | 0;
  m = 52;
 } else if ((m | 0) == 44) {
  g = l;
  f = h + -1 | 0;
  m = 52;
 }
 if ((m | 0) == 47) if (!i) m = 48; else {
  g = b;
  f = h;
  m = 52;
 }
 if ((m | 0) == 48) if (!(a[h >> 0] | 0)) {
  if (b) {
   c[b >> 2] = 0;
   c[e >> 2] = 0;
  }
  f = f - g | 0;
 } else {
  g = b;
  f = h;
  m = 52;
 }
 if ((m | 0) == 52) {
  c[(Mc() | 0) >> 2] = 84;
  if (!g) f = -1; else {
   c[e >> 2] = f;
   f = -1;
  }
 }
 return f | 0;
}

function Mh(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0;
 w = i;
 i = i + 16 | 0;
 v = w;
 u = Fk(j, 9320) | 0;
 s = Fk(j, 9476) | 0;
 qb[c[(c[s >> 2] | 0) + 20 >> 2] & 63](v, s);
 c[h >> 2] = f;
 j = a[b >> 0] | 0;
 switch (j << 24 >> 24) {
 case 43:
 case 45:
  {
   t = zb[c[(c[u >> 2] | 0) + 44 >> 2] & 15](u, j) | 0;
   l = c[h >> 2] | 0;
   c[h >> 2] = l + 4;
   c[l >> 2] = t;
   l = b + 1 | 0;
   break;
  }
 default:
  l = b;
 }
 t = e;
 a : do if ((t - l | 0) > 1 ? (a[l >> 0] | 0) == 48 : 0) {
  j = l + 1 | 0;
  switch (a[j >> 0] | 0) {
  case 88:
  case 120:
   break;
  default:
   {
    m = 4;
    break a;
   }
  }
  r = zb[c[(c[u >> 2] | 0) + 44 >> 2] & 15](u, 48) | 0;
  q = c[h >> 2] | 0;
  c[h >> 2] = q + 4;
  c[q >> 2] = r;
  l = l + 2 | 0;
  q = zb[c[(c[u >> 2] | 0) + 44 >> 2] & 15](u, a[j >> 0] | 0) | 0;
  r = c[h >> 2] | 0;
  c[h >> 2] = r + 4;
  c[r >> 2] = q;
  if (l >>> 0 < e >>> 0) {
   j = l;
   while (1) {
    r = a[j >> 0] | 0;
    if (!(Yc(r, Vg() | 0) | 0)) {
     r = l;
     break a;
    }
    j = j + 1 | 0;
    if (j >>> 0 >= e >>> 0) {
     r = l;
     break;
    }
   }
  } else {
   r = l;
   j = l;
  }
 } else m = 4; while (0);
 b : do if ((m | 0) == 4) if (l >>> 0 < e >>> 0) {
  j = l;
  while (1) {
   r = a[j >> 0] | 0;
   if (!(Xc(r, Vg() | 0) | 0)) {
    r = l;
    break b;
   }
   j = j + 1 | 0;
   if (j >>> 0 >= e >>> 0) {
    r = l;
    break;
   }
  }
 } else {
  r = l;
  j = l;
 } while (0);
 p = a[v >> 0] | 0;
 q = v + 4 | 0;
 if (((p & 1) == 0 ? (p & 255) >>> 1 : c[q >> 2] | 0) | 0) {
  if ((r | 0) != (j | 0) ? (k = j + -1 | 0, r >>> 0 < k >>> 0) : 0) {
   l = r;
   do {
    p = a[l >> 0] | 0;
    a[l >> 0] = a[k >> 0] | 0;
    a[k >> 0] = p;
    l = l + 1 | 0;
    k = k + -1 | 0;
   } while (l >>> 0 < k >>> 0);
  }
  m = tb[c[(c[s >> 2] | 0) + 16 >> 2] & 63](s) | 0;
  n = v + 8 | 0;
  o = v + 1 | 0;
  if (r >>> 0 < j >>> 0) {
   k = 0;
   l = 0;
   p = r;
   while (1) {
    x = a[((a[v >> 0] & 1) == 0 ? o : c[n >> 2] | 0) + l >> 0] | 0;
    if (x << 24 >> 24 > 0 & (k | 0) == (x << 24 >> 24 | 0)) {
     x = c[h >> 2] | 0;
     c[h >> 2] = x + 4;
     c[x >> 2] = m;
     x = a[v >> 0] | 0;
     k = 0;
     l = (l >>> 0 < (((x & 1) == 0 ? (x & 255) >>> 1 : c[q >> 2] | 0) + -1 | 0) >>> 0 & 1) + l | 0;
    }
    y = zb[c[(c[u >> 2] | 0) + 44 >> 2] & 15](u, a[p >> 0] | 0) | 0;
    x = c[h >> 2] | 0;
    c[h >> 2] = x + 4;
    c[x >> 2] = y;
    p = p + 1 | 0;
    if (p >>> 0 >= j >>> 0) break; else k = k + 1 | 0;
   }
  }
  k = f + (r - b << 2) | 0;
  m = c[h >> 2] | 0;
  if ((k | 0) != (m | 0)) {
   l = m + -4 | 0;
   if (k >>> 0 < l >>> 0) {
    do {
     y = c[k >> 2] | 0;
     c[k >> 2] = c[l >> 2];
     c[l >> 2] = y;
     k = k + 4 | 0;
     l = l + -4 | 0;
    } while (k >>> 0 < l >>> 0);
    l = u;
    k = m;
   } else {
    l = u;
    k = m;
   }
  } else l = u;
 } else {
  xb[c[(c[u >> 2] | 0) + 48 >> 2] & 7](u, r, j, c[h >> 2] | 0) | 0;
  k = (c[h >> 2] | 0) + (j - r << 2) | 0;
  c[h >> 2] = k;
  l = u;
 }
 c : do if (j >>> 0 < e >>> 0) {
  while (1) {
   k = a[j >> 0] | 0;
   if (k << 24 >> 24 == 46) break;
   x = zb[c[(c[l >> 2] | 0) + 44 >> 2] & 15](u, k) | 0;
   y = c[h >> 2] | 0;
   k = y + 4 | 0;
   c[h >> 2] = k;
   c[y >> 2] = x;
   j = j + 1 | 0;
   if (j >>> 0 >= e >>> 0) break c;
  }
  x = tb[c[(c[s >> 2] | 0) + 12 >> 2] & 63](s) | 0;
  y = c[h >> 2] | 0;
  k = y + 4 | 0;
  c[h >> 2] = k;
  c[y >> 2] = x;
  j = j + 1 | 0;
 } while (0);
 xb[c[(c[u >> 2] | 0) + 48 >> 2] & 7](u, j, e, k) | 0;
 y = (c[h >> 2] | 0) + (t - j << 2) | 0;
 c[h >> 2] = y;
 c[g >> 2] = (d | 0) == (e | 0) ? y : f + (d - b << 2) | 0;
 Xe(v);
 i = w;
 return;
}

function Yj(b, d, e, f, g, h, j, k, l, m) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 x = i;
 i = i + 112 | 0;
 n = x + 100 | 0;
 o = x + 88 | 0;
 p = x + 76 | 0;
 q = x + 64 | 0;
 r = x + 52 | 0;
 s = x + 48 | 0;
 t = x + 36 | 0;
 u = x + 24 | 0;
 v = x + 12 | 0;
 w = x;
 if (b) {
  b = Fk(d, 9064) | 0;
  qb[c[(c[b >> 2] | 0) + 44 >> 2] & 63](n, b);
  w = c[n >> 2] | 0;
  a[e >> 0] = w;
  a[e + 1 >> 0] = w >> 8;
  a[e + 2 >> 0] = w >> 16;
  a[e + 3 >> 0] = w >> 24;
  qb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](o, b);
  if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
  c[l + 4 >> 2] = 0;
  kf(l, 0);
  c[l >> 2] = c[o >> 2];
  c[l + 4 >> 2] = c[o + 4 >> 2];
  c[l + 8 >> 2] = c[o + 8 >> 2];
  c[o >> 2] = 0;
  c[o + 4 >> 2] = 0;
  c[o + 8 >> 2] = 0;
  gf(o);
  qb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](p, b);
  if (!(a[k >> 0] & 1)) a[k >> 0] = 0; else c[c[k + 8 >> 2] >> 2] = 0;
  c[k + 4 >> 2] = 0;
  kf(k, 0);
  c[k >> 2] = c[p >> 2];
  c[k + 4 >> 2] = c[p + 4 >> 2];
  c[k + 8 >> 2] = c[p + 8 >> 2];
  c[p >> 2] = 0;
  c[p + 4 >> 2] = 0;
  c[p + 8 >> 2] = 0;
  gf(p);
  c[f >> 2] = tb[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  c[g >> 2] = tb[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  qb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](q, b);
  if (!(a[h >> 0] & 1)) {
   a[h + 1 >> 0] = 0;
   a[h >> 0] = 0;
  } else {
   a[c[h + 8 >> 2] >> 0] = 0;
   c[h + 4 >> 2] = 0;
  }
  af(h, 0);
  c[h >> 2] = c[q >> 2];
  c[h + 4 >> 2] = c[q + 4 >> 2];
  c[h + 8 >> 2] = c[q + 8 >> 2];
  c[q >> 2] = 0;
  c[q + 4 >> 2] = 0;
  c[q + 8 >> 2] = 0;
  Xe(q);
  qb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](r, b);
  if (!(a[j >> 0] & 1)) a[j >> 0] = 0; else c[c[j + 8 >> 2] >> 2] = 0;
  c[j + 4 >> 2] = 0;
  kf(j, 0);
  c[j >> 2] = c[r >> 2];
  c[j + 4 >> 2] = c[r + 4 >> 2];
  c[j + 8 >> 2] = c[r + 8 >> 2];
  c[r >> 2] = 0;
  c[r + 4 >> 2] = 0;
  c[r + 8 >> 2] = 0;
  gf(r);
  b = tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 } else {
  b = Fk(d, 9e3) | 0;
  qb[c[(c[b >> 2] | 0) + 44 >> 2] & 63](s, b);
  s = c[s >> 2] | 0;
  a[e >> 0] = s;
  a[e + 1 >> 0] = s >> 8;
  a[e + 2 >> 0] = s >> 16;
  a[e + 3 >> 0] = s >> 24;
  qb[c[(c[b >> 2] | 0) + 32 >> 2] & 63](t, b);
  if (!(a[l >> 0] & 1)) a[l >> 0] = 0; else c[c[l + 8 >> 2] >> 2] = 0;
  c[l + 4 >> 2] = 0;
  kf(l, 0);
  c[l >> 2] = c[t >> 2];
  c[l + 4 >> 2] = c[t + 4 >> 2];
  c[l + 8 >> 2] = c[t + 8 >> 2];
  c[t >> 2] = 0;
  c[t + 4 >> 2] = 0;
  c[t + 8 >> 2] = 0;
  gf(t);
  qb[c[(c[b >> 2] | 0) + 28 >> 2] & 63](u, b);
  if (!(a[k >> 0] & 1)) a[k >> 0] = 0; else c[c[k + 8 >> 2] >> 2] = 0;
  c[k + 4 >> 2] = 0;
  kf(k, 0);
  c[k >> 2] = c[u >> 2];
  c[k + 4 >> 2] = c[u + 4 >> 2];
  c[k + 8 >> 2] = c[u + 8 >> 2];
  c[u >> 2] = 0;
  c[u + 4 >> 2] = 0;
  c[u + 8 >> 2] = 0;
  gf(u);
  c[f >> 2] = tb[c[(c[b >> 2] | 0) + 12 >> 2] & 63](b) | 0;
  c[g >> 2] = tb[c[(c[b >> 2] | 0) + 16 >> 2] & 63](b) | 0;
  qb[c[(c[b >> 2] | 0) + 20 >> 2] & 63](v, b);
  if (!(a[h >> 0] & 1)) {
   a[h + 1 >> 0] = 0;
   a[h >> 0] = 0;
  } else {
   a[c[h + 8 >> 2] >> 0] = 0;
   c[h + 4 >> 2] = 0;
  }
  af(h, 0);
  c[h >> 2] = c[v >> 2];
  c[h + 4 >> 2] = c[v + 4 >> 2];
  c[h + 8 >> 2] = c[v + 8 >> 2];
  c[v >> 2] = 0;
  c[v + 4 >> 2] = 0;
  c[v + 8 >> 2] = 0;
  Xe(v);
  qb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](w, b);
  if (!(a[j >> 0] & 1)) a[j >> 0] = 0; else c[c[j + 8 >> 2] >> 2] = 0;
  c[j + 4 >> 2] = 0;
  kf(j, 0);
  c[j >> 2] = c[w >> 2];
  c[j + 4 >> 2] = c[w + 4 >> 2];
  c[j + 8 >> 2] = c[w + 8 >> 2];
  c[w >> 2] = 0;
  c[w + 4 >> 2] = 0;
  c[w + 8 >> 2] = 0;
  gf(w);
  b = tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0;
 }
 c[m >> 2] = b;
 i = x;
 return;
}

function Ah(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 x = i;
 i = i + 16 | 0;
 w = x;
 v = Fk(j, 9328) | 0;
 t = Fk(j, 9468) | 0;
 qb[c[(c[t >> 2] | 0) + 20 >> 2] & 63](w, t);
 c[h >> 2] = f;
 j = a[b >> 0] | 0;
 switch (j << 24 >> 24) {
 case 43:
 case 45:
  {
   u = zb[c[(c[v >> 2] | 0) + 28 >> 2] & 15](v, j) | 0;
   m = c[h >> 2] | 0;
   c[h >> 2] = m + 1;
   a[m >> 0] = u;
   m = b + 1 | 0;
   break;
  }
 default:
  m = b;
 }
 u = e;
 a : do if ((u - m | 0) > 1 ? (a[m >> 0] | 0) == 48 : 0) {
  j = m + 1 | 0;
  switch (a[j >> 0] | 0) {
  case 88:
  case 120:
   break;
  default:
   {
    n = 4;
    break a;
   }
  }
  s = zb[c[(c[v >> 2] | 0) + 28 >> 2] & 15](v, 48) | 0;
  r = c[h >> 2] | 0;
  c[h >> 2] = r + 1;
  a[r >> 0] = s;
  m = m + 2 | 0;
  r = zb[c[(c[v >> 2] | 0) + 28 >> 2] & 15](v, a[j >> 0] | 0) | 0;
  s = c[h >> 2] | 0;
  c[h >> 2] = s + 1;
  a[s >> 0] = r;
  if (m >>> 0 < e >>> 0) {
   j = m;
   while (1) {
    s = a[j >> 0] | 0;
    if (!(Yc(s, Vg() | 0) | 0)) {
     s = m;
     break a;
    }
    j = j + 1 | 0;
    if (j >>> 0 >= e >>> 0) {
     s = m;
     break;
    }
   }
  } else {
   s = m;
   j = m;
  }
 } else n = 4; while (0);
 b : do if ((n | 0) == 4) if (m >>> 0 < e >>> 0) {
  j = m;
  while (1) {
   s = a[j >> 0] | 0;
   if (!(Xc(s, Vg() | 0) | 0)) {
    s = m;
    break b;
   }
   j = j + 1 | 0;
   if (j >>> 0 >= e >>> 0) {
    s = m;
    break;
   }
  }
 } else {
  s = m;
  j = m;
 } while (0);
 q = a[w >> 0] | 0;
 r = w + 4 | 0;
 if (((q & 1) == 0 ? (q & 255) >>> 1 : c[r >> 2] | 0) | 0) {
  if ((s | 0) != (j | 0) ? (l = j + -1 | 0, s >>> 0 < l >>> 0) : 0) {
   m = s;
   do {
    q = a[m >> 0] | 0;
    a[m >> 0] = a[l >> 0] | 0;
    a[l >> 0] = q;
    m = m + 1 | 0;
    l = l + -1 | 0;
   } while (m >>> 0 < l >>> 0);
  }
  n = tb[c[(c[t >> 2] | 0) + 16 >> 2] & 63](t) | 0;
  o = w + 8 | 0;
  p = w + 1 | 0;
  if (s >>> 0 < j >>> 0) {
   l = 0;
   m = 0;
   q = s;
   while (1) {
    y = a[((a[w >> 0] & 1) == 0 ? p : c[o >> 2] | 0) + m >> 0] | 0;
    if (y << 24 >> 24 > 0 & (l | 0) == (y << 24 >> 24 | 0)) {
     y = c[h >> 2] | 0;
     c[h >> 2] = y + 1;
     a[y >> 0] = n;
     y = a[w >> 0] | 0;
     l = 0;
     m = (m >>> 0 < (((y & 1) == 0 ? (y & 255) >>> 1 : c[r >> 2] | 0) + -1 | 0) >>> 0 & 1) + m | 0;
    }
    z = zb[c[(c[v >> 2] | 0) + 28 >> 2] & 15](v, a[q >> 0] | 0) | 0;
    y = c[h >> 2] | 0;
    c[h >> 2] = y + 1;
    a[y >> 0] = z;
    q = q + 1 | 0;
    if (q >>> 0 >= j >>> 0) break; else l = l + 1 | 0;
   }
  }
  l = f + (s - b) | 0;
  m = c[h >> 2] | 0;
  if ((l | 0) != (m | 0) ? (k = m + -1 | 0, l >>> 0 < k >>> 0) : 0) {
   do {
    z = a[l >> 0] | 0;
    a[l >> 0] = a[k >> 0] | 0;
    a[k >> 0] = z;
    l = l + 1 | 0;
    k = k + -1 | 0;
   } while (l >>> 0 < k >>> 0);
   l = v;
  } else l = v;
 } else {
  xb[c[(c[v >> 2] | 0) + 32 >> 2] & 7](v, s, j, c[h >> 2] | 0) | 0;
  c[h >> 2] = (c[h >> 2] | 0) + (j - s);
  l = v;
 }
 c : do if (j >>> 0 < e >>> 0) {
  while (1) {
   k = a[j >> 0] | 0;
   if (k << 24 >> 24 == 46) break;
   y = zb[c[(c[l >> 2] | 0) + 28 >> 2] & 15](v, k) | 0;
   z = c[h >> 2] | 0;
   c[h >> 2] = z + 1;
   a[z >> 0] = y;
   j = j + 1 | 0;
   if (j >>> 0 >= e >>> 0) break c;
  }
  y = tb[c[(c[t >> 2] | 0) + 12 >> 2] & 63](t) | 0;
  z = c[h >> 2] | 0;
  c[h >> 2] = z + 1;
  a[z >> 0] = y;
  j = j + 1 | 0;
 } while (0);
 xb[c[(c[v >> 2] | 0) + 32 >> 2] & 7](v, j, e, c[h >> 2] | 0) | 0;
 z = (c[h >> 2] | 0) + (u - j) | 0;
 c[h >> 2] = z;
 c[g >> 2] = (d | 0) == (e | 0) ? z : f + (d - b) | 0;
 Xe(w);
 i = x;
 return;
}

function Qm(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 g = c[a >> 2] | 0;
 do if (g) {
  h = c[g + 12 >> 2] | 0;
  if ((h | 0) == (c[g + 16 >> 2] | 0)) g = tb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else g = c[h >> 2] | 0;
  if ((g | 0) == -1) {
   c[a >> 2] = 0;
   i = 1;
   break;
  } else {
   i = (c[a >> 2] | 0) == 0;
   break;
  }
 } else i = 1; while (0);
 h = c[b >> 2] | 0;
 do if (h) {
  g = c[h + 12 >> 2] | 0;
  if ((g | 0) == (c[h + 16 >> 2] | 0)) g = tb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else g = c[g >> 2] | 0;
  if ((g | 0) != -1) if (i) {
   o = 17;
   break;
  } else {
   o = 16;
   break;
  } else {
   c[b >> 2] = 0;
   o = 14;
   break;
  }
 } else o = 14; while (0);
 if ((o | 0) == 14) if (i) o = 16; else {
  h = 0;
  o = 17;
 }
 a : do if ((o | 0) == 16) {
  c[d >> 2] = c[d >> 2] | 6;
  g = 0;
 } else if ((o | 0) == 17) {
  g = c[a >> 2] | 0;
  i = c[g + 12 >> 2] | 0;
  if ((i | 0) == (c[g + 16 >> 2] | 0)) g = tb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else g = c[i >> 2] | 0;
  if (!(mb[c[(c[e >> 2] | 0) + 12 >> 2] & 31](e, 2048, g) | 0)) {
   c[d >> 2] = c[d >> 2] | 4;
   g = 0;
   break;
  }
  g = (mb[c[(c[e >> 2] | 0) + 52 >> 2] & 31](e, g, 0) | 0) << 24 >> 24;
  i = c[a >> 2] | 0;
  j = i + 12 | 0;
  k = c[j >> 2] | 0;
  if ((k | 0) == (c[i + 16 >> 2] | 0)) {
   tb[c[(c[i >> 2] | 0) + 40 >> 2] & 63](i) | 0;
   m = f;
   l = h;
   j = h;
  } else {
   c[j >> 2] = k + 4;
   m = f;
   l = h;
   j = h;
  }
  while (1) {
   g = g + -48 | 0;
   n = m + -1 | 0;
   h = c[a >> 2] | 0;
   do if (h) {
    i = c[h + 12 >> 2] | 0;
    if ((i | 0) == (c[h + 16 >> 2] | 0)) h = tb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else h = c[i >> 2] | 0;
    if ((h | 0) == -1) {
     c[a >> 2] = 0;
     k = 1;
     break;
    } else {
     k = (c[a >> 2] | 0) == 0;
     break;
    }
   } else k = 1; while (0);
   do if (j) {
    h = c[j + 12 >> 2] | 0;
    if ((h | 0) == (c[j + 16 >> 2] | 0)) h = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else h = c[h >> 2] | 0;
    if ((h | 0) == -1) {
     c[b >> 2] = 0;
     j = 0;
     f = 0;
     h = 1;
     break;
    } else {
     j = l;
     f = l;
     h = (l | 0) == 0;
     break;
    }
   } else {
    j = l;
    f = 0;
    h = 1;
   } while (0);
   i = c[a >> 2] | 0;
   if (!((m | 0) > 1 & (k ^ h))) break;
   h = c[i + 12 >> 2] | 0;
   if ((h | 0) == (c[i + 16 >> 2] | 0)) h = tb[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0; else h = c[h >> 2] | 0;
   if (!(mb[c[(c[e >> 2] | 0) + 12 >> 2] & 31](e, 2048, h) | 0)) break a;
   g = ((mb[c[(c[e >> 2] | 0) + 52 >> 2] & 31](e, h, 0) | 0) << 24 >> 24) + (g * 10 | 0) | 0;
   h = c[a >> 2] | 0;
   i = h + 12 | 0;
   k = c[i >> 2] | 0;
   if ((k | 0) == (c[h + 16 >> 2] | 0)) {
    tb[c[(c[h >> 2] | 0) + 40 >> 2] & 63](h) | 0;
    m = n;
    l = j;
    j = f;
    continue;
   } else {
    c[i >> 2] = k + 4;
    m = n;
    l = j;
    j = f;
    continue;
   }
  }
  do if (i) {
   h = c[i + 12 >> 2] | 0;
   if ((h | 0) == (c[i + 16 >> 2] | 0)) h = tb[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0; else h = c[h >> 2] | 0;
   if ((h | 0) == -1) {
    c[a >> 2] = 0;
    i = 1;
    break;
   } else {
    i = (c[a >> 2] | 0) == 0;
    break;
   }
  } else i = 1; while (0);
  do if (j) {
   h = c[j + 12 >> 2] | 0;
   if ((h | 0) == (c[j + 16 >> 2] | 0)) h = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else h = c[h >> 2] | 0;
   if ((h | 0) != -1) if (i) break a; else break; else {
    c[b >> 2] = 0;
    o = 60;
    break;
   }
  } else o = 60; while (0);
  if ((o | 0) == 60 ? !i : 0) break;
  c[d >> 2] = c[d >> 2] | 2;
 } while (0);
 return g | 0;
}

function Pm(a, e, f, g, h) {
 a = a | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 i = c[a >> 2] | 0;
 do if (i) {
  if ((c[i + 12 >> 2] | 0) == (c[i + 16 >> 2] | 0)) if ((tb[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0) == -1) {
   c[a >> 2] = 0;
   i = 0;
   break;
  } else {
   i = c[a >> 2] | 0;
   break;
  }
 } else i = 0; while (0);
 j = (i | 0) == 0;
 i = c[e >> 2] | 0;
 do if (i) {
  if ((c[i + 12 >> 2] | 0) == (c[i + 16 >> 2] | 0) ? (tb[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   r = 11;
   break;
  }
  if (j) r = 13; else r = 12;
 } else r = 11; while (0);
 if ((r | 0) == 11) if (j) r = 12; else {
  i = 0;
  r = 13;
 }
 a : do if ((r | 0) == 12) {
  c[f >> 2] = c[f >> 2] | 6;
  i = 0;
 } else if ((r | 0) == 13) {
  j = c[a >> 2] | 0;
  k = c[j + 12 >> 2] | 0;
  if ((k | 0) == (c[j + 16 >> 2] | 0)) j = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else j = d[k >> 0] | 0;
  k = j & 255;
  if (k << 24 >> 24 > -1 ? (q = g + 8 | 0, (b[(c[q >> 2] | 0) + (j << 24 >> 24 << 1) >> 1] & 2048) != 0) : 0) {
   m = (mb[c[(c[g >> 2] | 0) + 36 >> 2] & 31](g, k, 0) | 0) << 24 >> 24;
   j = c[a >> 2] | 0;
   k = j + 12 | 0;
   l = c[k >> 2] | 0;
   if ((l | 0) == (c[j + 16 >> 2] | 0)) {
    tb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
    o = h;
    n = i;
    h = i;
    i = m;
   } else {
    c[k >> 2] = l + 1;
    o = h;
    n = i;
    h = i;
    i = m;
   }
   while (1) {
    i = i + -48 | 0;
    p = o + -1 | 0;
    j = c[a >> 2] | 0;
    do if (j) {
     if ((c[j + 12 >> 2] | 0) == (c[j + 16 >> 2] | 0)) if ((tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0) == -1) {
      c[a >> 2] = 0;
      j = 0;
      break;
     } else {
      j = c[a >> 2] | 0;
      break;
     }
    } else j = 0; while (0);
    l = (j | 0) == 0;
    if (h) if ((c[h + 12 >> 2] | 0) == (c[h + 16 >> 2] | 0)) if ((tb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0) == -1) {
     c[e >> 2] = 0;
     k = 0;
     h = 0;
    } else {
     k = n;
     h = n;
    } else k = n; else {
     k = n;
     h = 0;
    }
    j = c[a >> 2] | 0;
    if (!((o | 0) > 1 & (l ^ (h | 0) == 0))) break;
    l = c[j + 12 >> 2] | 0;
    if ((l | 0) == (c[j + 16 >> 2] | 0)) j = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else j = d[l >> 0] | 0;
    l = j & 255;
    if (l << 24 >> 24 <= -1) break a;
    if (!(b[(c[q >> 2] | 0) + (j << 24 >> 24 << 1) >> 1] & 2048)) break a;
    i = ((mb[c[(c[g >> 2] | 0) + 36 >> 2] & 31](g, l, 0) | 0) << 24 >> 24) + (i * 10 | 0) | 0;
    j = c[a >> 2] | 0;
    l = j + 12 | 0;
    m = c[l >> 2] | 0;
    if ((m | 0) == (c[j + 16 >> 2] | 0)) {
     tb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
     o = p;
     n = k;
     continue;
    } else {
     c[l >> 2] = m + 1;
     o = p;
     n = k;
     continue;
    }
   }
   do if (j) {
    if ((c[j + 12 >> 2] | 0) == (c[j + 16 >> 2] | 0)) if ((tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0) == -1) {
     c[a >> 2] = 0;
     j = 0;
     break;
    } else {
     j = c[a >> 2] | 0;
     break;
    }
   } else j = 0; while (0);
   j = (j | 0) == 0;
   do if (k) {
    if ((c[k + 12 >> 2] | 0) == (c[k + 16 >> 2] | 0) ? (tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0) == -1 : 0) {
     c[e >> 2] = 0;
     r = 50;
     break;
    }
    if (j) break a;
   } else r = 50; while (0);
   if ((r | 0) == 50 ? !j : 0) break;
   c[f >> 2] = c[f >> 2] | 2;
   break;
  }
  c[f >> 2] = c[f >> 2] | 4;
  i = 0;
 } while (0);
 return i | 0;
}

function Dn(b, c, e, f, g) {
 b = b | 0;
 c = c | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = c;
 if ((((g & 4 | 0) != 0 ? (n - b | 0) > 2 : 0) ? (a[b >> 0] | 0) == -17 : 0) ? (a[b + 1 >> 0] | 0) == -69 : 0) g = (a[b + 2 >> 0] | 0) == -65 ? b + 3 | 0 : b; else g = b;
 a : do if ((e | 0) != 0 & g >>> 0 < c >>> 0) {
  m = g;
  h = 0;
  b : while (1) {
   g = a[m >> 0] | 0;
   l = g & 255;
   if (l >>> 0 > f >>> 0) {
    g = m;
    h = 42;
    break a;
   }
   do if (g << 24 >> 24 > -1) g = m + 1 | 0; else {
    if ((g & 255) < 194) {
     g = m;
     h = 42;
     break a;
    }
    if ((g & 255) < 224) {
     if ((n - m | 0) < 2) {
      g = m;
      h = 42;
      break a;
     }
     g = d[m + 1 >> 0] | 0;
     if ((g & 192 | 0) != 128) {
      g = m;
      h = 42;
      break a;
     }
     if ((g & 63 | l << 6 & 1984) >>> 0 > f >>> 0) {
      g = m;
      h = 42;
      break a;
     }
     g = m + 2 | 0;
     break;
    }
    if ((g & 255) < 240) {
     g = m;
     if ((n - g | 0) < 3) {
      g = m;
      h = 42;
      break a;
     }
     j = a[m + 1 >> 0] | 0;
     i = a[m + 2 >> 0] | 0;
     switch (l | 0) {
     case 224:
      {
       if ((j & -32) << 24 >> 24 != -96) {
        h = 20;
        break b;
       }
       break;
      }
     case 237:
      {
       if ((j & -32) << 24 >> 24 != -128) {
        h = 22;
        break b;
       }
       break;
      }
     default:
      if ((j & -64) << 24 >> 24 != -128) {
       h = 24;
       break b;
      }
     }
     g = i & 255;
     if ((g & 192 | 0) != 128) {
      g = m;
      h = 42;
      break a;
     }
     if (((j & 255) << 6 & 4032 | l << 12 & 61440 | g & 63) >>> 0 > f >>> 0) {
      g = m;
      h = 42;
      break a;
     }
     g = m + 3 | 0;
     break;
    }
    if ((g & 255) >= 245) {
     g = m;
     h = 42;
     break a;
    }
    g = m;
    if ((e - h | 0) >>> 0 < 2 | (n - g | 0) < 4) {
     g = m;
     h = 42;
     break a;
    }
    k = a[m + 1 >> 0] | 0;
    i = a[m + 2 >> 0] | 0;
    j = a[m + 3 >> 0] | 0;
    switch (l | 0) {
    case 240:
     {
      if ((k + 112 & 255) >= 48) {
       h = 32;
       break b;
      }
      break;
     }
    case 244:
     {
      if ((k & -16) << 24 >> 24 != -128) {
       h = 34;
       break b;
      }
      break;
     }
    default:
     if ((k & -64) << 24 >> 24 != -128) {
      h = 36;
      break b;
     }
    }
    i = i & 255;
    if ((i & 192 | 0) != 128) {
     g = m;
     h = 42;
     break a;
    }
    g = j & 255;
    if ((g & 192 | 0) != 128) {
     g = m;
     h = 42;
     break a;
    }
    if (((k & 255) << 12 & 258048 | l << 18 & 1835008 | i << 6 & 4032 | g & 63) >>> 0 > f >>> 0) {
     g = m;
     h = 42;
     break a;
    }
    g = m + 4 | 0;
    h = h + 1 | 0;
   } while (0);
   h = h + 1 | 0;
   if (!(h >>> 0 < e >>> 0 & g >>> 0 < c >>> 0)) {
    h = 42;
    break a;
   } else m = g;
  }
  if ((h | 0) == 20) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 22) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 24) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 32) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 34) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 36) {
   g = g - b | 0;
   break;
  }
 } else h = 42; while (0);
 if ((h | 0) == 42) g = g - b | 0;
 return g | 0;
}

function Gn(b, c, e, f, g) {
 b = b | 0;
 c = c | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = c;
 if ((((g & 4 | 0) != 0 ? (n - b | 0) > 2 : 0) ? (a[b >> 0] | 0) == -17 : 0) ? (a[b + 1 >> 0] | 0) == -69 : 0) g = (a[b + 2 >> 0] | 0) == -65 ? b + 3 | 0 : b; else g = b;
 a : do if ((e | 0) != 0 & g >>> 0 < c >>> 0) {
  l = g;
  m = 0;
  b : while (1) {
   g = a[l >> 0] | 0;
   k = g & 255;
   do if (g << 24 >> 24 > -1) {
    if (k >>> 0 > f >>> 0) {
     g = l;
     h = 42;
     break a;
    }
    g = l + 1 | 0;
   } else {
    if ((g & 255) < 194) {
     g = l;
     h = 42;
     break a;
    }
    if ((g & 255) < 224) {
     if ((n - l | 0) < 2) {
      g = l;
      h = 42;
      break a;
     }
     g = d[l + 1 >> 0] | 0;
     if ((g & 192 | 0) != 128) {
      g = l;
      h = 42;
      break a;
     }
     if ((g & 63 | k << 6 & 1984) >>> 0 > f >>> 0) {
      g = l;
      h = 42;
      break a;
     }
     g = l + 2 | 0;
     break;
    }
    if ((g & 255) < 240) {
     g = l;
     if ((n - g | 0) < 3) {
      g = l;
      h = 42;
      break a;
     }
     i = a[l + 1 >> 0] | 0;
     h = a[l + 2 >> 0] | 0;
     switch (k | 0) {
     case 224:
      {
       if ((i & -32) << 24 >> 24 != -96) {
        h = 20;
        break b;
       }
       break;
      }
     case 237:
      {
       if ((i & -32) << 24 >> 24 != -128) {
        h = 22;
        break b;
       }
       break;
      }
     default:
      if ((i & -64) << 24 >> 24 != -128) {
       h = 24;
       break b;
      }
     }
     g = h & 255;
     if ((g & 192 | 0) != 128) {
      g = l;
      h = 42;
      break a;
     }
     if (((i & 255) << 6 & 4032 | k << 12 & 61440 | g & 63) >>> 0 > f >>> 0) {
      g = l;
      h = 42;
      break a;
     }
     g = l + 3 | 0;
     break;
    }
    if ((g & 255) >= 245) {
     g = l;
     h = 42;
     break a;
    }
    g = l;
    if ((n - g | 0) < 4) {
     g = l;
     h = 42;
     break a;
    }
    j = a[l + 1 >> 0] | 0;
    h = a[l + 2 >> 0] | 0;
    i = a[l + 3 >> 0] | 0;
    switch (k | 0) {
    case 240:
     {
      if ((j + 112 & 255) >= 48) {
       h = 32;
       break b;
      }
      break;
     }
    case 244:
     {
      if ((j & -16) << 24 >> 24 != -128) {
       h = 34;
       break b;
      }
      break;
     }
    default:
     if ((j & -64) << 24 >> 24 != -128) {
      h = 36;
      break b;
     }
    }
    h = h & 255;
    if ((h & 192 | 0) != 128) {
     g = l;
     h = 42;
     break a;
    }
    g = i & 255;
    if ((g & 192 | 0) != 128) {
     g = l;
     h = 42;
     break a;
    }
    if (((j & 255) << 12 & 258048 | k << 18 & 1835008 | h << 6 & 4032 | g & 63) >>> 0 > f >>> 0) {
     g = l;
     h = 42;
     break a;
    }
    g = l + 4 | 0;
   } while (0);
   m = m + 1 | 0;
   if (!(m >>> 0 < e >>> 0 & g >>> 0 < c >>> 0)) {
    h = 42;
    break a;
   } else l = g;
  }
  if ((h | 0) == 20) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 22) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 24) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 32) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 34) {
   g = g - b | 0;
   break;
  } else if ((h | 0) == 36) {
   g = g - b | 0;
   break;
  }
 } else h = 42; while (0);
 if ((h | 0) == 42) g = g - b | 0;
 return g | 0;
}

function vo(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 l = a;
 j = b;
 k = j;
 h = d;
 n = e;
 i = n;
 if (!k) {
  g = (f | 0) != 0;
  if (!i) {
   if (g) {
    c[f >> 2] = (l >>> 0) % (h >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   f = (l >>> 0) / (h >>> 0) >>> 0;
   return (D = n, f) | 0;
  } else {
   if (!g) {
    n = 0;
    f = 0;
    return (D = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = b & 0;
   n = 0;
   f = 0;
   return (D = n, f) | 0;
  }
 }
 g = (i | 0) == 0;
 do if (h) {
  if (!g) {
   g = (ba(i | 0) | 0) - (ba(k | 0) | 0) | 0;
   if (g >>> 0 <= 31) {
    m = g + 1 | 0;
    i = 31 - g | 0;
    b = g - 31 >> 31;
    h = m;
    a = l >>> (m >>> 0) & b | k << i;
    b = k >>> (m >>> 0) & b;
    g = 0;
    i = l << i;
    break;
   }
   if (!f) {
    n = 0;
    f = 0;
    return (D = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = j | b & 0;
   n = 0;
   f = 0;
   return (D = n, f) | 0;
  }
  g = h - 1 | 0;
  if (g & h) {
   i = (ba(h | 0) | 0) + 33 - (ba(k | 0) | 0) | 0;
   p = 64 - i | 0;
   m = 32 - i | 0;
   j = m >> 31;
   o = i - 32 | 0;
   b = o >> 31;
   h = i;
   a = m - 1 >> 31 & k >>> (o >>> 0) | (k << m | l >>> (i >>> 0)) & b;
   b = b & k >>> (i >>> 0);
   g = l << p & j;
   i = (k << p | l >>> (o >>> 0)) & j | l << m & i - 33 >> 31;
   break;
  }
  if (f) {
   c[f >> 2] = g & l;
   c[f + 4 >> 2] = 0;
  }
  if ((h | 0) == 1) {
   o = j | b & 0;
   p = a | 0 | 0;
   return (D = o, p) | 0;
  } else {
   p = oo(h | 0) | 0;
   o = k >>> (p >>> 0) | 0;
   p = k << 32 - p | l >>> (p >>> 0) | 0;
   return (D = o, p) | 0;
  }
 } else {
  if (g) {
   if (f) {
    c[f >> 2] = (k >>> 0) % (h >>> 0);
    c[f + 4 >> 2] = 0;
   }
   o = 0;
   p = (k >>> 0) / (h >>> 0) >>> 0;
   return (D = o, p) | 0;
  }
  if (!l) {
   if (f) {
    c[f >> 2] = 0;
    c[f + 4 >> 2] = (k >>> 0) % (i >>> 0);
   }
   o = 0;
   p = (k >>> 0) / (i >>> 0) >>> 0;
   return (D = o, p) | 0;
  }
  g = i - 1 | 0;
  if (!(g & i)) {
   if (f) {
    c[f >> 2] = a | 0;
    c[f + 4 >> 2] = g & k | b & 0;
   }
   o = 0;
   p = k >>> ((oo(i | 0) | 0) >>> 0);
   return (D = o, p) | 0;
  }
  g = (ba(i | 0) | 0) - (ba(k | 0) | 0) | 0;
  if (g >>> 0 <= 30) {
   b = g + 1 | 0;
   i = 31 - g | 0;
   h = b;
   a = k << i | l >>> (b >>> 0);
   b = k >>> (b >>> 0);
   g = 0;
   i = l << i;
   break;
  }
  if (!f) {
   o = 0;
   p = 0;
   return (D = o, p) | 0;
  }
  c[f >> 2] = a | 0;
  c[f + 4 >> 2] = j | b & 0;
  o = 0;
  p = 0;
  return (D = o, p) | 0;
 } while (0);
 if (!h) {
  k = i;
  j = 0;
  i = 0;
 } else {
  m = d | 0 | 0;
  l = n | e & 0;
  k = io(m | 0, l | 0, -1, -1) | 0;
  d = D;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   go(k, d, e, n) | 0;
   p = D;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = go(e, n, o & m, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l) | 0;
   b = D;
   h = h - 1 | 0;
  } while ((h | 0) != 0);
  k = j;
  j = 0;
 }
 h = 0;
 if (f) {
  c[f >> 2] = a;
  c[f + 4 >> 2] = b;
 }
 o = (g | 0) >>> 31 | (k | h) << 1 | (h << 1 | g >>> 31) & 0 | j;
 p = (g << 1 | 0 >>> 31) & -2 | i;
 return (D = o, p) | 0;
}

function Cn(e, f, g, h, i, j, k, l) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 c[g >> 2] = e;
 c[j >> 2] = h;
 if (l & 4) {
  e = c[g >> 2] | 0;
  l = f;
  if ((((l - e | 0) > 2 ? (a[e >> 0] | 0) == -17 : 0) ? (a[e + 1 >> 0] | 0) == -69 : 0) ? (a[e + 2 >> 0] | 0) == -65 : 0) {
   c[g >> 2] = e + 3;
   m = c[j >> 2] | 0;
  } else m = h;
 } else {
  m = h;
  l = f;
 }
 q = i;
 h = c[g >> 2] | 0;
 e = h >>> 0 < f >>> 0;
 a : do if (e & m >>> 0 < i >>> 0) while (1) {
  e = a[h >> 0] | 0;
  o = e & 255;
  if (o >>> 0 > k >>> 0) {
   e = 2;
   break a;
  }
  do if (e << 24 >> 24 > -1) {
   b[m >> 1] = e & 255;
   c[g >> 2] = h + 1;
  } else {
   if ((e & 255) < 194) {
    e = 2;
    break a;
   }
   if ((e & 255) < 224) {
    if ((l - h | 0) < 2) {
     e = 1;
     break a;
    }
    e = d[h + 1 >> 0] | 0;
    if ((e & 192 | 0) != 128) {
     e = 2;
     break a;
    }
    e = e & 63 | o << 6 & 1984;
    if (e >>> 0 > k >>> 0) {
     e = 2;
     break a;
    }
    b[m >> 1] = e;
    c[g >> 2] = h + 2;
    break;
   }
   if ((e & 255) < 240) {
    if ((l - h | 0) < 3) {
     e = 1;
     break a;
    }
    n = a[h + 1 >> 0] | 0;
    e = a[h + 2 >> 0] | 0;
    switch (o | 0) {
    case 224:
     {
      if ((n & -32) << 24 >> 24 != -96) {
       e = 2;
       break a;
      }
      break;
     }
    case 237:
     {
      if ((n & -32) << 24 >> 24 != -128) {
       e = 2;
       break a;
      }
      break;
     }
    default:
     if ((n & -64) << 24 >> 24 != -128) {
      e = 2;
      break a;
     }
    }
    e = e & 255;
    if ((e & 192 | 0) != 128) {
     e = 2;
     break a;
    }
    e = (n & 255) << 6 & 4032 | o << 12 | e & 63;
    if ((e & 65535) >>> 0 > k >>> 0) {
     e = 2;
     break a;
    }
    b[m >> 1] = e;
    c[g >> 2] = h + 3;
    break;
   }
   if ((e & 255) >= 245) {
    e = 2;
    break a;
   }
   if ((l - h | 0) < 4) {
    e = 1;
    break a;
   }
   n = a[h + 1 >> 0] | 0;
   e = a[h + 2 >> 0] | 0;
   h = a[h + 3 >> 0] | 0;
   switch (o | 0) {
   case 240:
    {
     if ((n + 112 & 255) >= 48) {
      e = 2;
      break a;
     }
     break;
    }
   case 244:
    {
     if ((n & -16) << 24 >> 24 != -128) {
      e = 2;
      break a;
     }
     break;
    }
   default:
    if ((n & -64) << 24 >> 24 != -128) {
     e = 2;
     break a;
    }
   }
   p = e & 255;
   if ((p & 192 | 0) != 128) {
    e = 2;
    break a;
   }
   e = h & 255;
   if ((e & 192 | 0) != 128) {
    e = 2;
    break a;
   }
   if ((q - m | 0) < 4) {
    e = 1;
    break a;
   }
   o = o & 7;
   h = n & 255;
   n = p << 6;
   e = e & 63;
   if ((h << 12 & 258048 | o << 18 | n & 4032 | e) >>> 0 > k >>> 0) {
    e = 2;
    break a;
   }
   b[m >> 1] = h << 2 & 60 | p >>> 4 & 3 | ((h >>> 4 & 3 | o << 2) << 6) + 16320 | 55296;
   p = m + 2 | 0;
   c[j >> 2] = p;
   b[p >> 1] = e | n & 960 | 56320;
   c[g >> 2] = (c[g >> 2] | 0) + 4;
  } while (0);
  m = (c[j >> 2] | 0) + 2 | 0;
  c[j >> 2] = m;
  h = c[g >> 2] | 0;
  e = h >>> 0 < f >>> 0;
  if (!(e & m >>> 0 < i >>> 0)) {
   r = 39;
   break;
  }
 } else r = 39; while (0);
 if ((r | 0) == 39) e = e & 1;
 return e | 0;
}

function Lm(b, d, e, f, g, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 C = i;
 i = i + 352 | 0;
 t = C + 208 | 0;
 k = C + 40 | 0;
 l = C + 36 | 0;
 B = C + 24 | 0;
 A = C + 12 | 0;
 y = C + 8 | 0;
 z = C + 48 | 0;
 w = C + 4 | 0;
 v = C;
 x = C + 337 | 0;
 u = C + 336 | 0;
 mh(B, f, t, k, l);
 c[A >> 2] = 0;
 c[A + 4 >> 2] = 0;
 c[A + 8 >> 2] = 0;
 if (!(a[A >> 0] & 1)) b = 10; else b = (c[A >> 2] & -2) + -1 | 0;
 _e(A, b, 0);
 q = A + 8 | 0;
 r = A + 1 | 0;
 f = (a[A >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
 c[y >> 2] = f;
 c[w >> 2] = z;
 c[v >> 2] = 0;
 a[x >> 0] = 1;
 a[u >> 0] = 69;
 s = A + 4 | 0;
 p = c[k >> 2] | 0;
 o = c[l >> 2] | 0;
 k = c[d >> 2] | 0;
 a : while (1) {
  if (k) {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    k = 0;
    m = 1;
   } else m = 0;
  } else {
   k = 0;
   m = 1;
  }
  l = c[e >> 2] | 0;
  do if (l) {
   b = c[l + 12 >> 2] | 0;
   if ((b | 0) == (c[l + 16 >> 2] | 0)) b = tb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) != -1) if (m) break; else break a; else {
    c[e >> 2] = 0;
    D = 16;
    break;
   }
  } else D = 16; while (0);
  if ((D | 0) == 16) {
   D = 0;
   if (m) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[A >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[s >> 2] | 0;
  if ((c[y >> 2] | 0) == (f + m | 0)) {
   _e(A, m << 1, 0);
   if (!(a[A >> 0] & 1)) b = 10; else b = (c[A >> 2] & -2) + -1 | 0;
   _e(A, b, 0);
   f = (a[A >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
   c[y >> 2] = f + m;
  }
  m = k + 12 | 0;
  b = c[m >> 2] | 0;
  n = k + 16 | 0;
  if ((b | 0) == (c[n >> 2] | 0)) b = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if (nh(b, x, u, f, y, p, o, B, z, w, v, t) | 0) break;
  b = c[m >> 2] | 0;
  if ((b | 0) == (c[n >> 2] | 0)) {
   tb[c[(c[k >> 2] | 0) + 40 >> 2] & 63](k) | 0;
   continue;
  } else {
   c[m >> 2] = b + 4;
   continue;
  }
 }
 u = a[B >> 0] | 0;
 b = c[w >> 2] | 0;
 if (!((a[x >> 0] | 0) == 0 ? 1 : (((u & 1) == 0 ? (u & 255) >>> 1 : c[B + 4 >> 2] | 0) | 0) == 0) ? (b - z | 0) < 160 : 0) {
  v = c[v >> 2] | 0;
  x = b + 4 | 0;
  c[w >> 2] = x;
  c[b >> 2] = v;
  b = x;
 }
 h[j >> 3] = +Tn(f, c[y >> 2] | 0, g);
 Sj(B, z, b, g);
 if (k) {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 } else f = 1;
 do if (l) {
  b = c[l + 12 >> 2] | 0;
  if ((b | 0) == (c[l + 16 >> 2] | 0)) b = tb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (f) break; else {
   D = 46;
   break;
  } else {
   c[e >> 2] = 0;
   D = 44;
   break;
  }
 } else D = 44; while (0);
 if ((D | 0) == 44 ? f : 0) D = 46;
 if ((D | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 D = c[d >> 2] | 0;
 Xe(A);
 Xe(B);
 i = C;
 return D | 0;
}

function Km(b, d, e, f, g, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 C = i;
 i = i + 352 | 0;
 t = C + 208 | 0;
 k = C + 40 | 0;
 l = C + 36 | 0;
 B = C + 24 | 0;
 A = C + 12 | 0;
 y = C + 8 | 0;
 z = C + 48 | 0;
 w = C + 4 | 0;
 v = C;
 x = C + 337 | 0;
 u = C + 336 | 0;
 mh(B, f, t, k, l);
 c[A >> 2] = 0;
 c[A + 4 >> 2] = 0;
 c[A + 8 >> 2] = 0;
 if (!(a[A >> 0] & 1)) b = 10; else b = (c[A >> 2] & -2) + -1 | 0;
 _e(A, b, 0);
 q = A + 8 | 0;
 r = A + 1 | 0;
 f = (a[A >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
 c[y >> 2] = f;
 c[w >> 2] = z;
 c[v >> 2] = 0;
 a[x >> 0] = 1;
 a[u >> 0] = 69;
 s = A + 4 | 0;
 p = c[k >> 2] | 0;
 o = c[l >> 2] | 0;
 k = c[d >> 2] | 0;
 a : while (1) {
  if (k) {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    k = 0;
    m = 1;
   } else m = 0;
  } else {
   k = 0;
   m = 1;
  }
  l = c[e >> 2] | 0;
  do if (l) {
   b = c[l + 12 >> 2] | 0;
   if ((b | 0) == (c[l + 16 >> 2] | 0)) b = tb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) != -1) if (m) break; else break a; else {
    c[e >> 2] = 0;
    D = 16;
    break;
   }
  } else D = 16; while (0);
  if ((D | 0) == 16) {
   D = 0;
   if (m) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[A >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[s >> 2] | 0;
  if ((c[y >> 2] | 0) == (f + m | 0)) {
   _e(A, m << 1, 0);
   if (!(a[A >> 0] & 1)) b = 10; else b = (c[A >> 2] & -2) + -1 | 0;
   _e(A, b, 0);
   f = (a[A >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
   c[y >> 2] = f + m;
  }
  m = k + 12 | 0;
  b = c[m >> 2] | 0;
  n = k + 16 | 0;
  if ((b | 0) == (c[n >> 2] | 0)) b = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if (nh(b, x, u, f, y, p, o, B, z, w, v, t) | 0) break;
  b = c[m >> 2] | 0;
  if ((b | 0) == (c[n >> 2] | 0)) {
   tb[c[(c[k >> 2] | 0) + 40 >> 2] & 63](k) | 0;
   continue;
  } else {
   c[m >> 2] = b + 4;
   continue;
  }
 }
 u = a[B >> 0] | 0;
 b = c[w >> 2] | 0;
 if (!((a[x >> 0] | 0) == 0 ? 1 : (((u & 1) == 0 ? (u & 255) >>> 1 : c[B + 4 >> 2] | 0) | 0) == 0) ? (b - z | 0) < 160 : 0) {
  v = c[v >> 2] | 0;
  x = b + 4 | 0;
  c[w >> 2] = x;
  c[b >> 2] = v;
  b = x;
 }
 h[j >> 3] = +Un(f, c[y >> 2] | 0, g);
 Sj(B, z, b, g);
 if (k) {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 } else f = 1;
 do if (l) {
  b = c[l + 12 >> 2] | 0;
  if ((b | 0) == (c[l + 16 >> 2] | 0)) b = tb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (f) break; else {
   D = 46;
   break;
  } else {
   c[e >> 2] = 0;
   D = 44;
   break;
  }
 } else D = 44; while (0);
 if ((D | 0) == 44 ? f : 0) D = 46;
 if ((D | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 D = c[d >> 2] | 0;
 Xe(A);
 Xe(B);
 i = C;
 return D | 0;
}

function Jm(b, d, e, f, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 C = i;
 i = i + 352 | 0;
 t = C + 208 | 0;
 k = C + 40 | 0;
 l = C + 36 | 0;
 B = C + 24 | 0;
 A = C + 12 | 0;
 y = C + 8 | 0;
 z = C + 48 | 0;
 w = C + 4 | 0;
 v = C;
 x = C + 337 | 0;
 u = C + 336 | 0;
 mh(B, f, t, k, l);
 c[A >> 2] = 0;
 c[A + 4 >> 2] = 0;
 c[A + 8 >> 2] = 0;
 if (!(a[A >> 0] & 1)) b = 10; else b = (c[A >> 2] & -2) + -1 | 0;
 _e(A, b, 0);
 q = A + 8 | 0;
 r = A + 1 | 0;
 f = (a[A >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
 c[y >> 2] = f;
 c[w >> 2] = z;
 c[v >> 2] = 0;
 a[x >> 0] = 1;
 a[u >> 0] = 69;
 s = A + 4 | 0;
 p = c[k >> 2] | 0;
 o = c[l >> 2] | 0;
 k = c[d >> 2] | 0;
 a : while (1) {
  if (k) {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    k = 0;
    m = 1;
   } else m = 0;
  } else {
   k = 0;
   m = 1;
  }
  l = c[e >> 2] | 0;
  do if (l) {
   b = c[l + 12 >> 2] | 0;
   if ((b | 0) == (c[l + 16 >> 2] | 0)) b = tb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) != -1) if (m) break; else break a; else {
    c[e >> 2] = 0;
    D = 16;
    break;
   }
  } else D = 16; while (0);
  if ((D | 0) == 16) {
   D = 0;
   if (m) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[A >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[s >> 2] | 0;
  if ((c[y >> 2] | 0) == (f + m | 0)) {
   _e(A, m << 1, 0);
   if (!(a[A >> 0] & 1)) b = 10; else b = (c[A >> 2] & -2) + -1 | 0;
   _e(A, b, 0);
   f = (a[A >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
   c[y >> 2] = f + m;
  }
  m = k + 12 | 0;
  b = c[m >> 2] | 0;
  n = k + 16 | 0;
  if ((b | 0) == (c[n >> 2] | 0)) b = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if (nh(b, x, u, f, y, p, o, B, z, w, v, t) | 0) break;
  b = c[m >> 2] | 0;
  if ((b | 0) == (c[n >> 2] | 0)) {
   tb[c[(c[k >> 2] | 0) + 40 >> 2] & 63](k) | 0;
   continue;
  } else {
   c[m >> 2] = b + 4;
   continue;
  }
 }
 u = a[B >> 0] | 0;
 b = c[w >> 2] | 0;
 if (!((a[x >> 0] | 0) == 0 ? 1 : (((u & 1) == 0 ? (u & 255) >>> 1 : c[B + 4 >> 2] | 0) | 0) == 0) ? (b - z | 0) < 160 : 0) {
  v = c[v >> 2] | 0;
  x = b + 4 | 0;
  c[w >> 2] = x;
  c[b >> 2] = v;
  b = x;
 }
 g[j >> 2] = +Vn(f, c[y >> 2] | 0, h);
 Sj(B, z, b, h);
 if (k) {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 } else f = 1;
 do if (l) {
  b = c[l + 12 >> 2] | 0;
  if ((b | 0) == (c[l + 16 >> 2] | 0)) b = tb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (f) break; else {
   D = 46;
   break;
  } else {
   c[e >> 2] = 0;
   D = 44;
   break;
  }
 } else D = 44; while (0);
 if ((D | 0) == 44 ? f : 0) D = 46;
 if ((D | 0) == 46) c[h >> 2] = c[h >> 2] | 2;
 D = c[d >> 2] | 0;
 Xe(A);
 Xe(B);
 i = C;
 return D | 0;
}

function Im(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 320 | 0;
 r = z + 208 | 0;
 j = z + 200 | 0;
 y = z + 24 | 0;
 x = z + 12 | 0;
 v = z + 8 | 0;
 w = z + 40 | 0;
 t = z + 4 | 0;
 s = z;
 u = bm(f) | 0;
 lh(y, f, r, j);
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
 _e(x, b, 0);
 o = x + 8 | 0;
 p = x + 1 | 0;
 f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
 c[v >> 2] = f;
 c[t >> 2] = w;
 c[s >> 2] = 0;
 q = x + 4 | 0;
 n = c[j >> 2] | 0;
 j = c[d >> 2] | 0;
 a : while (1) {
  if (j) {
   b = c[j + 12 >> 2] | 0;
   if ((b | 0) == (c[j + 16 >> 2] | 0)) b = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    j = 0;
    l = 1;
   } else l = 0;
  } else {
   j = 0;
   l = 1;
  }
  k = c[e >> 2] | 0;
  do if (k) {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) != -1) if (l) {
    m = k;
    break;
   } else break a; else {
    c[e >> 2] = 0;
    A = 16;
    break;
   }
  } else A = 16; while (0);
  if ((A | 0) == 16) {
   A = 0;
   if (l) {
    k = 0;
    break;
   } else m = 0;
  }
  k = a[x >> 0] | 0;
  k = (k & 1) == 0 ? (k & 255) >>> 1 : c[q >> 2] | 0;
  if ((c[v >> 2] | 0) == (f + k | 0)) {
   _e(x, k << 1, 0);
   if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
   _e(x, b, 0);
   f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
   c[v >> 2] = f + k;
  }
  k = j + 12 | 0;
  b = c[k >> 2] | 0;
  l = j + 16 | 0;
  if ((b | 0) == (c[l >> 2] | 0)) b = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if (hh(b, u, f, v, s, n, y, w, t, r) | 0) {
   k = m;
   break;
  }
  b = c[k >> 2] | 0;
  if ((b | 0) == (c[l >> 2] | 0)) {
   tb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
   continue;
  } else {
   c[k >> 2] = b + 4;
   continue;
  }
 }
 r = a[y >> 0] | 0;
 b = c[t >> 2] | 0;
 if ((((r & 1) == 0 ? (r & 255) >>> 1 : c[y + 4 >> 2] | 0) | 0) != 0 ? (b - w | 0) < 160 : 0) {
  r = c[s >> 2] | 0;
  s = b + 4 | 0;
  c[t >> 2] = s;
  c[b >> 2] = r;
  b = s;
 }
 v = Wn(f, c[v >> 2] | 0, g, u) | 0;
 c[h >> 2] = v;
 c[h + 4 >> 2] = D;
 Sj(y, w, b, g);
 if (j) {
  b = c[j + 12 >> 2] | 0;
  if ((b | 0) == (c[j + 16 >> 2] | 0)) b = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 } else f = 1;
 do if (k) {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (f) break; else {
   A = 46;
   break;
  } else {
   c[e >> 2] = 0;
   A = 44;
   break;
  }
 } else A = 44; while (0);
 if ((A | 0) == 44 ? f : 0) A = 46;
 if ((A | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 A = c[d >> 2] | 0;
 Xe(x);
 Xe(y);
 i = z;
 return A | 0;
}

function Em(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 320 | 0;
 r = z + 208 | 0;
 j = z + 200 | 0;
 y = z + 24 | 0;
 x = z + 12 | 0;
 v = z + 8 | 0;
 w = z + 40 | 0;
 t = z + 4 | 0;
 s = z;
 u = bm(f) | 0;
 lh(y, f, r, j);
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
 _e(x, b, 0);
 o = x + 8 | 0;
 p = x + 1 | 0;
 f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
 c[v >> 2] = f;
 c[t >> 2] = w;
 c[s >> 2] = 0;
 q = x + 4 | 0;
 n = c[j >> 2] | 0;
 j = c[d >> 2] | 0;
 a : while (1) {
  if (j) {
   b = c[j + 12 >> 2] | 0;
   if ((b | 0) == (c[j + 16 >> 2] | 0)) b = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    j = 0;
    l = 1;
   } else l = 0;
  } else {
   j = 0;
   l = 1;
  }
  k = c[e >> 2] | 0;
  do if (k) {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) != -1) if (l) {
    m = k;
    break;
   } else break a; else {
    c[e >> 2] = 0;
    A = 16;
    break;
   }
  } else A = 16; while (0);
  if ((A | 0) == 16) {
   A = 0;
   if (l) {
    k = 0;
    break;
   } else m = 0;
  }
  k = a[x >> 0] | 0;
  k = (k & 1) == 0 ? (k & 255) >>> 1 : c[q >> 2] | 0;
  if ((c[v >> 2] | 0) == (f + k | 0)) {
   _e(x, k << 1, 0);
   if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
   _e(x, b, 0);
   f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
   c[v >> 2] = f + k;
  }
  k = j + 12 | 0;
  b = c[k >> 2] | 0;
  l = j + 16 | 0;
  if ((b | 0) == (c[l >> 2] | 0)) b = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if (hh(b, u, f, v, s, n, y, w, t, r) | 0) {
   k = m;
   break;
  }
  b = c[k >> 2] | 0;
  if ((b | 0) == (c[l >> 2] | 0)) {
   tb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
   continue;
  } else {
   c[k >> 2] = b + 4;
   continue;
  }
 }
 r = a[y >> 0] | 0;
 b = c[t >> 2] | 0;
 if ((((r & 1) == 0 ? (r & 255) >>> 1 : c[y + 4 >> 2] | 0) | 0) != 0 ? (b - w | 0) < 160 : 0) {
  r = c[s >> 2] | 0;
  s = b + 4 | 0;
  c[t >> 2] = s;
  c[b >> 2] = r;
  b = s;
 }
 v = _n(f, c[v >> 2] | 0, g, u) | 0;
 c[h >> 2] = v;
 c[h + 4 >> 2] = D;
 Sj(y, w, b, g);
 if (j) {
  b = c[j + 12 >> 2] | 0;
  if ((b | 0) == (c[j + 16 >> 2] | 0)) b = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 } else f = 1;
 do if (k) {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (f) break; else {
   A = 46;
   break;
  } else {
   c[e >> 2] = 0;
   A = 44;
   break;
  }
 } else A = 44; while (0);
 if ((A | 0) == 44 ? f : 0) A = 46;
 if ((A | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 A = c[d >> 2] | 0;
 Xe(x);
 Xe(y);
 i = z;
 return A | 0;
}

function gh(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 y = i;
 i = i + 320 | 0;
 v = y;
 o = y + 208 | 0;
 x = y + 32 | 0;
 s = y + 28 | 0;
 w = y + 16 | 0;
 u = y + 12 | 0;
 q = y + 48 | 0;
 r = y + 8 | 0;
 p = y + 4 | 0;
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 t = tf(f) | 0;
 c[s >> 2] = t;
 s = Fk(s, 9320) | 0;
 xb[c[(c[s >> 2] | 0) + 48 >> 2] & 7](s, 19840, 19866, o) | 0;
 co(t) | 0;
 c[w >> 2] = 0;
 c[w + 4 >> 2] = 0;
 c[w + 8 >> 2] = 0;
 if (!(a[w >> 0] & 1)) b = 10; else b = (c[w >> 2] & -2) + -1 | 0;
 _e(w, b, 0);
 s = w + 8 | 0;
 t = w + 1 | 0;
 b = (a[w >> 0] & 1) == 0 ? t : c[s >> 2] | 0;
 c[u >> 2] = b;
 c[r >> 2] = q;
 c[p >> 2] = 0;
 n = w + 4 | 0;
 j = c[d >> 2] | 0;
 a : while (1) {
  if (j) {
   f = c[j + 12 >> 2] | 0;
   if ((f | 0) == (c[j + 16 >> 2] | 0)) f = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else f = c[f >> 2] | 0;
   if ((f | 0) == -1) {
    c[d >> 2] = 0;
    f = 0;
    l = 1;
   } else {
    f = j;
    l = 0;
   }
  } else {
   f = 0;
   l = 1;
  }
  j = c[e >> 2] | 0;
  do if (j) {
   k = c[j + 12 >> 2] | 0;
   if ((k | 0) == (c[j + 16 >> 2] | 0)) k = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else k = c[k >> 2] | 0;
   if ((k | 0) != -1) if (l) break; else break a; else {
    c[e >> 2] = 0;
    z = 16;
    break;
   }
  } else z = 16; while (0);
  if ((z | 0) == 16) {
   z = 0;
   if (l) {
    j = 0;
    break;
   } else j = 0;
  }
  k = a[w >> 0] | 0;
  k = (k & 1) == 0 ? (k & 255) >>> 1 : c[n >> 2] | 0;
  if ((c[u >> 2] | 0) == (b + k | 0)) {
   _e(w, k << 1, 0);
   if (!(a[w >> 0] & 1)) b = 10; else b = (c[w >> 2] & -2) + -1 | 0;
   _e(w, b, 0);
   b = (a[w >> 0] & 1) == 0 ? t : c[s >> 2] | 0;
   c[u >> 2] = b + k;
  }
  l = f + 12 | 0;
  k = c[l >> 2] | 0;
  m = f + 16 | 0;
  if ((k | 0) == (c[m >> 2] | 0)) k = tb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else k = c[k >> 2] | 0;
  if (hh(k, 16, b, u, p, 0, x, q, r, o) | 0) break;
  j = c[l >> 2] | 0;
  if ((j | 0) == (c[m >> 2] | 0)) {
   tb[c[(c[f >> 2] | 0) + 40 >> 2] & 63](f) | 0;
   j = f;
   continue;
  } else {
   c[l >> 2] = j + 4;
   j = f;
   continue;
  }
 }
 _e(w, (c[u >> 2] | 0) - b | 0, 0);
 t = (a[w >> 0] & 1) == 0 ? t : c[s >> 2] | 0;
 u = Vg() | 0;
 c[v >> 2] = h;
 if ((Bm(t, u, 21224, v) | 0) != 1) c[g >> 2] = 4;
 if (f) {
  b = c[f + 12 >> 2] | 0;
  if ((b | 0) == (c[f + 16 >> 2] | 0)) b = tb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 } else f = 1;
 do if (j) {
  b = c[j + 12 >> 2] | 0;
  if ((b | 0) == (c[j + 16 >> 2] | 0)) b = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (f) break; else {
   z = 45;
   break;
  } else {
   c[e >> 2] = 0;
   z = 43;
   break;
  }
 } else z = 43; while (0);
 if ((z | 0) == 43 ? f : 0) z = 45;
 if ((z | 0) == 45) c[g >> 2] = c[g >> 2] | 2;
 z = c[d >> 2] | 0;
 Xe(w);
 Xe(x);
 i = y;
 return z | 0;
}

function Hm(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 320 | 0;
 r = z + 208 | 0;
 j = z + 200 | 0;
 y = z + 24 | 0;
 x = z + 12 | 0;
 v = z + 8 | 0;
 w = z + 40 | 0;
 t = z + 4 | 0;
 s = z;
 u = bm(f) | 0;
 lh(y, f, r, j);
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
 _e(x, b, 0);
 o = x + 8 | 0;
 p = x + 1 | 0;
 f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
 c[v >> 2] = f;
 c[t >> 2] = w;
 c[s >> 2] = 0;
 q = x + 4 | 0;
 n = c[j >> 2] | 0;
 j = c[d >> 2] | 0;
 a : while (1) {
  if (j) {
   b = c[j + 12 >> 2] | 0;
   if ((b | 0) == (c[j + 16 >> 2] | 0)) b = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    j = 0;
    l = 1;
   } else l = 0;
  } else {
   j = 0;
   l = 1;
  }
  k = c[e >> 2] | 0;
  do if (k) {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) != -1) if (l) {
    m = k;
    break;
   } else break a; else {
    c[e >> 2] = 0;
    A = 16;
    break;
   }
  } else A = 16; while (0);
  if ((A | 0) == 16) {
   A = 0;
   if (l) {
    k = 0;
    break;
   } else m = 0;
  }
  k = a[x >> 0] | 0;
  k = (k & 1) == 0 ? (k & 255) >>> 1 : c[q >> 2] | 0;
  if ((c[v >> 2] | 0) == (f + k | 0)) {
   _e(x, k << 1, 0);
   if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
   _e(x, b, 0);
   f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
   c[v >> 2] = f + k;
  }
  k = j + 12 | 0;
  b = c[k >> 2] | 0;
  l = j + 16 | 0;
  if ((b | 0) == (c[l >> 2] | 0)) b = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if (hh(b, u, f, v, s, n, y, w, t, r) | 0) {
   k = m;
   break;
  }
  b = c[k >> 2] | 0;
  if ((b | 0) == (c[l >> 2] | 0)) {
   tb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
   continue;
  } else {
   c[k >> 2] = b + 4;
   continue;
  }
 }
 r = a[y >> 0] | 0;
 b = c[t >> 2] | 0;
 if ((((r & 1) == 0 ? (r & 255) >>> 1 : c[y + 4 >> 2] | 0) | 0) != 0 ? (b - w | 0) < 160 : 0) {
  r = c[s >> 2] | 0;
  s = b + 4 | 0;
  c[t >> 2] = s;
  c[b >> 2] = r;
  b = s;
 }
 c[h >> 2] = Xn(f, c[v >> 2] | 0, g, u) | 0;
 Sj(y, w, b, g);
 if (j) {
  b = c[j + 12 >> 2] | 0;
  if ((b | 0) == (c[j + 16 >> 2] | 0)) b = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 } else f = 1;
 do if (k) {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (f) break; else {
   A = 46;
   break;
  } else {
   c[e >> 2] = 0;
   A = 44;
   break;
  }
 } else A = 44; while (0);
 if ((A | 0) == 44 ? f : 0) A = 46;
 if ((A | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 A = c[d >> 2] | 0;
 Xe(x);
 Xe(y);
 i = z;
 return A | 0;
}

function Gm(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 320 | 0;
 r = z + 208 | 0;
 j = z + 200 | 0;
 y = z + 24 | 0;
 x = z + 12 | 0;
 v = z + 8 | 0;
 w = z + 40 | 0;
 t = z + 4 | 0;
 s = z;
 u = bm(f) | 0;
 lh(y, f, r, j);
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
 _e(x, b, 0);
 o = x + 8 | 0;
 p = x + 1 | 0;
 f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
 c[v >> 2] = f;
 c[t >> 2] = w;
 c[s >> 2] = 0;
 q = x + 4 | 0;
 n = c[j >> 2] | 0;
 j = c[d >> 2] | 0;
 a : while (1) {
  if (j) {
   b = c[j + 12 >> 2] | 0;
   if ((b | 0) == (c[j + 16 >> 2] | 0)) b = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    j = 0;
    l = 1;
   } else l = 0;
  } else {
   j = 0;
   l = 1;
  }
  k = c[e >> 2] | 0;
  do if (k) {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) != -1) if (l) {
    m = k;
    break;
   } else break a; else {
    c[e >> 2] = 0;
    A = 16;
    break;
   }
  } else A = 16; while (0);
  if ((A | 0) == 16) {
   A = 0;
   if (l) {
    k = 0;
    break;
   } else m = 0;
  }
  k = a[x >> 0] | 0;
  k = (k & 1) == 0 ? (k & 255) >>> 1 : c[q >> 2] | 0;
  if ((c[v >> 2] | 0) == (f + k | 0)) {
   _e(x, k << 1, 0);
   if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
   _e(x, b, 0);
   f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
   c[v >> 2] = f + k;
  }
  k = j + 12 | 0;
  b = c[k >> 2] | 0;
  l = j + 16 | 0;
  if ((b | 0) == (c[l >> 2] | 0)) b = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if (hh(b, u, f, v, s, n, y, w, t, r) | 0) {
   k = m;
   break;
  }
  b = c[k >> 2] | 0;
  if ((b | 0) == (c[l >> 2] | 0)) {
   tb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
   continue;
  } else {
   c[k >> 2] = b + 4;
   continue;
  }
 }
 r = a[y >> 0] | 0;
 b = c[t >> 2] | 0;
 if ((((r & 1) == 0 ? (r & 255) >>> 1 : c[y + 4 >> 2] | 0) | 0) != 0 ? (b - w | 0) < 160 : 0) {
  r = c[s >> 2] | 0;
  s = b + 4 | 0;
  c[t >> 2] = s;
  c[b >> 2] = r;
  b = s;
 }
 c[h >> 2] = Yn(f, c[v >> 2] | 0, g, u) | 0;
 Sj(y, w, b, g);
 if (j) {
  b = c[j + 12 >> 2] | 0;
  if ((b | 0) == (c[j + 16 >> 2] | 0)) b = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 } else f = 1;
 do if (k) {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (f) break; else {
   A = 46;
   break;
  } else {
   c[e >> 2] = 0;
   A = 44;
   break;
  }
 } else A = 44; while (0);
 if ((A | 0) == 44 ? f : 0) A = 46;
 if ((A | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 A = c[d >> 2] | 0;
 Xe(x);
 Xe(y);
 i = z;
 return A | 0;
}

function Fm(d, e, f, g, h, j) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = i;
 i = i + 320 | 0;
 s = A + 208 | 0;
 k = A + 200 | 0;
 z = A + 24 | 0;
 y = A + 12 | 0;
 w = A + 8 | 0;
 x = A + 40 | 0;
 u = A + 4 | 0;
 t = A;
 v = bm(g) | 0;
 lh(z, g, s, k);
 c[y >> 2] = 0;
 c[y + 4 >> 2] = 0;
 c[y + 8 >> 2] = 0;
 if (!(a[y >> 0] & 1)) d = 10; else d = (c[y >> 2] & -2) + -1 | 0;
 _e(y, d, 0);
 p = y + 8 | 0;
 q = y + 1 | 0;
 g = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 c[w >> 2] = g;
 c[u >> 2] = x;
 c[t >> 2] = 0;
 r = y + 4 | 0;
 o = c[k >> 2] | 0;
 k = c[e >> 2] | 0;
 a : while (1) {
  if (k) {
   d = c[k + 12 >> 2] | 0;
   if ((d | 0) == (c[k + 16 >> 2] | 0)) d = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else d = c[d >> 2] | 0;
   if ((d | 0) == -1) {
    c[e >> 2] = 0;
    k = 0;
    m = 1;
   } else m = 0;
  } else {
   k = 0;
   m = 1;
  }
  l = c[f >> 2] | 0;
  do if (l) {
   d = c[l + 12 >> 2] | 0;
   if ((d | 0) == (c[l + 16 >> 2] | 0)) d = tb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else d = c[d >> 2] | 0;
   if ((d | 0) != -1) if (m) {
    n = l;
    break;
   } else break a; else {
    c[f >> 2] = 0;
    B = 16;
    break;
   }
  } else B = 16; while (0);
  if ((B | 0) == 16) {
   B = 0;
   if (m) {
    l = 0;
    break;
   } else n = 0;
  }
  l = a[y >> 0] | 0;
  l = (l & 1) == 0 ? (l & 255) >>> 1 : c[r >> 2] | 0;
  if ((c[w >> 2] | 0) == (g + l | 0)) {
   _e(y, l << 1, 0);
   if (!(a[y >> 0] & 1)) d = 10; else d = (c[y >> 2] & -2) + -1 | 0;
   _e(y, d, 0);
   g = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
   c[w >> 2] = g + l;
  }
  l = k + 12 | 0;
  d = c[l >> 2] | 0;
  m = k + 16 | 0;
  if ((d | 0) == (c[m >> 2] | 0)) d = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else d = c[d >> 2] | 0;
  if (hh(d, v, g, w, t, o, z, x, u, s) | 0) {
   l = n;
   break;
  }
  d = c[l >> 2] | 0;
  if ((d | 0) == (c[m >> 2] | 0)) {
   tb[c[(c[k >> 2] | 0) + 40 >> 2] & 63](k) | 0;
   continue;
  } else {
   c[l >> 2] = d + 4;
   continue;
  }
 }
 s = a[z >> 0] | 0;
 d = c[u >> 2] | 0;
 if ((((s & 1) == 0 ? (s & 255) >>> 1 : c[z + 4 >> 2] | 0) | 0) != 0 ? (d - x | 0) < 160 : 0) {
  s = c[t >> 2] | 0;
  t = d + 4 | 0;
  c[u >> 2] = t;
  c[d >> 2] = s;
  d = t;
 }
 b[j >> 1] = Zn(g, c[w >> 2] | 0, h, v) | 0;
 Sj(z, x, d, h);
 if (k) {
  d = c[k + 12 >> 2] | 0;
  if ((d | 0) == (c[k + 16 >> 2] | 0)) d = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else d = c[d >> 2] | 0;
  if ((d | 0) == -1) {
   c[e >> 2] = 0;
   g = 1;
  } else g = 0;
 } else g = 1;
 do if (l) {
  d = c[l + 12 >> 2] | 0;
  if ((d | 0) == (c[l + 16 >> 2] | 0)) d = tb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0; else d = c[d >> 2] | 0;
  if ((d | 0) != -1) if (g) break; else {
   B = 46;
   break;
  } else {
   c[f >> 2] = 0;
   B = 44;
   break;
  }
 } else B = 44; while (0);
 if ((B | 0) == 44 ? g : 0) B = 46;
 if ((B | 0) == 46) c[h >> 2] = c[h >> 2] | 2;
 B = c[e >> 2] | 0;
 Xe(y);
 Xe(z);
 i = A;
 return B | 0;
}

function Dm(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 320 | 0;
 r = z + 208 | 0;
 j = z + 200 | 0;
 y = z + 24 | 0;
 x = z + 12 | 0;
 v = z + 8 | 0;
 w = z + 40 | 0;
 t = z + 4 | 0;
 s = z;
 u = bm(f) | 0;
 lh(y, f, r, j);
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
 _e(x, b, 0);
 o = x + 8 | 0;
 p = x + 1 | 0;
 f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
 c[v >> 2] = f;
 c[t >> 2] = w;
 c[s >> 2] = 0;
 q = x + 4 | 0;
 n = c[j >> 2] | 0;
 j = c[d >> 2] | 0;
 a : while (1) {
  if (j) {
   b = c[j + 12 >> 2] | 0;
   if ((b | 0) == (c[j + 16 >> 2] | 0)) b = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) == -1) {
    c[d >> 2] = 0;
    j = 0;
    l = 1;
   } else l = 0;
  } else {
   j = 0;
   l = 1;
  }
  k = c[e >> 2] | 0;
  do if (k) {
   b = c[k + 12 >> 2] | 0;
   if ((b | 0) == (c[k + 16 >> 2] | 0)) b = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
   if ((b | 0) != -1) if (l) {
    m = k;
    break;
   } else break a; else {
    c[e >> 2] = 0;
    A = 16;
    break;
   }
  } else A = 16; while (0);
  if ((A | 0) == 16) {
   A = 0;
   if (l) {
    k = 0;
    break;
   } else m = 0;
  }
  k = a[x >> 0] | 0;
  k = (k & 1) == 0 ? (k & 255) >>> 1 : c[q >> 2] | 0;
  if ((c[v >> 2] | 0) == (f + k | 0)) {
   _e(x, k << 1, 0);
   if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
   _e(x, b, 0);
   f = (a[x >> 0] & 1) == 0 ? p : c[o >> 2] | 0;
   c[v >> 2] = f + k;
  }
  k = j + 12 | 0;
  b = c[k >> 2] | 0;
  l = j + 16 | 0;
  if ((b | 0) == (c[l >> 2] | 0)) b = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if (hh(b, u, f, v, s, n, y, w, t, r) | 0) {
   k = m;
   break;
  }
  b = c[k >> 2] | 0;
  if ((b | 0) == (c[l >> 2] | 0)) {
   tb[c[(c[j >> 2] | 0) + 40 >> 2] & 63](j) | 0;
   continue;
  } else {
   c[k >> 2] = b + 4;
   continue;
  }
 }
 r = a[y >> 0] | 0;
 b = c[t >> 2] | 0;
 if ((((r & 1) == 0 ? (r & 255) >>> 1 : c[y + 4 >> 2] | 0) | 0) != 0 ? (b - w | 0) < 160 : 0) {
  r = c[s >> 2] | 0;
  s = b + 4 | 0;
  c[t >> 2] = s;
  c[b >> 2] = r;
  b = s;
 }
 c[h >> 2] = $n(f, c[v >> 2] | 0, g, u) | 0;
 Sj(y, w, b, g);
 if (j) {
  b = c[j + 12 >> 2] | 0;
  if ((b | 0) == (c[j + 16 >> 2] | 0)) b = tb[c[(c[j >> 2] | 0) + 36 >> 2] & 63](j) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   f = 1;
  } else f = 0;
 } else f = 1;
 do if (k) {
  b = c[k + 12 >> 2] | 0;
  if ((b | 0) == (c[k + 16 >> 2] | 0)) b = tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (f) break; else {
   A = 46;
   break;
  } else {
   c[e >> 2] = 0;
   A = 44;
   break;
  }
 } else A = 44; while (0);
 if ((A | 0) == 44 ? f : 0) A = 46;
 if ((A | 0) == 46) c[g >> 2] = c[g >> 2] | 2;
 A = c[d >> 2] | 0;
 Xe(x);
 Xe(y);
 i = z;
 return A | 0;
}

function zm(b, e, f, g, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 D = i;
 i = i + 240 | 0;
 u = D + 208 | 0;
 l = D + 203 | 0;
 m = D + 202 | 0;
 C = D + 24 | 0;
 B = D + 12 | 0;
 z = D + 8 | 0;
 A = D + 40 | 0;
 x = D + 4 | 0;
 w = D;
 y = D + 201 | 0;
 v = D + 200 | 0;
 jh(C, g, u, l, m);
 c[B >> 2] = 0;
 c[B + 4 >> 2] = 0;
 c[B + 8 >> 2] = 0;
 if (!(a[B >> 0] & 1)) b = 10; else b = (c[B >> 2] & -2) + -1 | 0;
 _e(B, b, 0);
 r = B + 8 | 0;
 s = B + 1 | 0;
 o = (a[B >> 0] & 1) == 0 ? s : c[r >> 2] | 0;
 c[z >> 2] = o;
 c[x >> 2] = A;
 c[w >> 2] = 0;
 a[y >> 0] = 1;
 a[v >> 0] = 69;
 t = B + 4 | 0;
 q = a[l >> 0] | 0;
 p = a[m >> 0] | 0;
 b = c[e >> 2] | 0;
 l = o;
 a : while (1) {
  if (b) {
   if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    b = 0;
   }
  } else b = 0;
  g = (b | 0) == 0;
  m = c[f >> 2] | 0;
  do if (m) {
   if ((c[m + 12 >> 2] | 0) != (c[m + 16 >> 2] | 0)) if (g) break; else break a;
   if ((tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) != -1) if (g) break; else break a; else {
    c[f >> 2] = 0;
    E = 13;
    break;
   }
  } else E = 13; while (0);
  if ((E | 0) == 13) {
   E = 0;
   if (g) {
    m = 0;
    break;
   } else m = 0;
  }
  n = a[B >> 0] | 0;
  n = (n & 1) == 0 ? (n & 255) >>> 1 : c[t >> 2] | 0;
  if ((c[z >> 2] | 0) == (l + n | 0)) {
   _e(B, n << 1, 0);
   if (!(a[B >> 0] & 1)) g = 10; else g = (c[B >> 2] & -2) + -1 | 0;
   _e(B, g, 0);
   l = (a[B >> 0] & 1) == 0 ? s : c[r >> 2] | 0;
   c[z >> 2] = l + n;
  }
  n = b + 12 | 0;
  g = c[n >> 2] | 0;
  o = b + 16 | 0;
  if ((g | 0) == (c[o >> 2] | 0)) g = tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (kh(g & 255, y, v, l, z, q, p, C, A, x, w, u) | 0) break;
  g = c[n >> 2] | 0;
  if ((g | 0) == (c[o >> 2] | 0)) {
   tb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[n >> 2] = g + 1;
   continue;
  }
 }
 v = a[C >> 0] | 0;
 g = c[x >> 2] | 0;
 if (!((a[y >> 0] | 0) == 0 ? 1 : (((v & 1) == 0 ? (v & 255) >>> 1 : c[C + 4 >> 2] | 0) | 0) == 0) ? (g - A | 0) < 160 : 0) {
  w = c[w >> 2] | 0;
  y = g + 4 | 0;
  c[x >> 2] = y;
  c[g >> 2] = w;
  g = y;
 }
 h[k >> 3] = +Un(l, c[z >> 2] | 0, j);
 Sj(C, A, g, j);
 if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   b = 0;
  }
 } else b = 0;
 b = (b | 0) == 0;
 do if (m) {
  if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0) ? (tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   E = 38;
   break;
  }
  if (!b) E = 39;
 } else E = 38; while (0);
 if ((E | 0) == 38 ? b : 0) E = 39;
 if ((E | 0) == 39) c[j >> 2] = c[j >> 2] | 2;
 E = c[e >> 2] | 0;
 Xe(B);
 Xe(C);
 i = D;
 return E | 0;
}

function ym(b, e, f, h, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 D = i;
 i = i + 240 | 0;
 u = D + 208 | 0;
 l = D + 203 | 0;
 m = D + 202 | 0;
 C = D + 24 | 0;
 B = D + 12 | 0;
 z = D + 8 | 0;
 A = D + 40 | 0;
 x = D + 4 | 0;
 w = D;
 y = D + 201 | 0;
 v = D + 200 | 0;
 jh(C, h, u, l, m);
 c[B >> 2] = 0;
 c[B + 4 >> 2] = 0;
 c[B + 8 >> 2] = 0;
 if (!(a[B >> 0] & 1)) b = 10; else b = (c[B >> 2] & -2) + -1 | 0;
 _e(B, b, 0);
 r = B + 8 | 0;
 s = B + 1 | 0;
 o = (a[B >> 0] & 1) == 0 ? s : c[r >> 2] | 0;
 c[z >> 2] = o;
 c[x >> 2] = A;
 c[w >> 2] = 0;
 a[y >> 0] = 1;
 a[v >> 0] = 69;
 t = B + 4 | 0;
 q = a[l >> 0] | 0;
 p = a[m >> 0] | 0;
 b = c[e >> 2] | 0;
 l = o;
 a : while (1) {
  if (b) {
   if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    b = 0;
   }
  } else b = 0;
  h = (b | 0) == 0;
  m = c[f >> 2] | 0;
  do if (m) {
   if ((c[m + 12 >> 2] | 0) != (c[m + 16 >> 2] | 0)) if (h) break; else break a;
   if ((tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) != -1) if (h) break; else break a; else {
    c[f >> 2] = 0;
    E = 13;
    break;
   }
  } else E = 13; while (0);
  if ((E | 0) == 13) {
   E = 0;
   if (h) {
    m = 0;
    break;
   } else m = 0;
  }
  n = a[B >> 0] | 0;
  n = (n & 1) == 0 ? (n & 255) >>> 1 : c[t >> 2] | 0;
  if ((c[z >> 2] | 0) == (l + n | 0)) {
   _e(B, n << 1, 0);
   if (!(a[B >> 0] & 1)) h = 10; else h = (c[B >> 2] & -2) + -1 | 0;
   _e(B, h, 0);
   l = (a[B >> 0] & 1) == 0 ? s : c[r >> 2] | 0;
   c[z >> 2] = l + n;
  }
  n = b + 12 | 0;
  h = c[n >> 2] | 0;
  o = b + 16 | 0;
  if ((h | 0) == (c[o >> 2] | 0)) h = tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else h = d[h >> 0] | 0;
  if (kh(h & 255, y, v, l, z, q, p, C, A, x, w, u) | 0) break;
  h = c[n >> 2] | 0;
  if ((h | 0) == (c[o >> 2] | 0)) {
   tb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[n >> 2] = h + 1;
   continue;
  }
 }
 v = a[C >> 0] | 0;
 h = c[x >> 2] | 0;
 if (!((a[y >> 0] | 0) == 0 ? 1 : (((v & 1) == 0 ? (v & 255) >>> 1 : c[C + 4 >> 2] | 0) | 0) == 0) ? (h - A | 0) < 160 : 0) {
  w = c[w >> 2] | 0;
  y = h + 4 | 0;
  c[x >> 2] = y;
  c[h >> 2] = w;
  h = y;
 }
 g[k >> 2] = +Vn(l, c[z >> 2] | 0, j);
 Sj(C, A, h, j);
 if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   b = 0;
  }
 } else b = 0;
 b = (b | 0) == 0;
 do if (m) {
  if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0) ? (tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   E = 38;
   break;
  }
  if (!b) E = 39;
 } else E = 38; while (0);
 if ((E | 0) == 38 ? b : 0) E = 39;
 if ((E | 0) == 39) c[j >> 2] = c[j >> 2] | 2;
 E = c[e >> 2] | 0;
 Xe(B);
 Xe(C);
 i = D;
 return E | 0;
}

function Am(b, e, f, g, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 D = i;
 i = i + 240 | 0;
 u = D + 208 | 0;
 l = D + 203 | 0;
 m = D + 202 | 0;
 C = D + 24 | 0;
 B = D + 12 | 0;
 z = D + 8 | 0;
 A = D + 40 | 0;
 x = D + 4 | 0;
 w = D;
 y = D + 201 | 0;
 v = D + 200 | 0;
 jh(C, g, u, l, m);
 c[B >> 2] = 0;
 c[B + 4 >> 2] = 0;
 c[B + 8 >> 2] = 0;
 if (!(a[B >> 0] & 1)) b = 10; else b = (c[B >> 2] & -2) + -1 | 0;
 _e(B, b, 0);
 r = B + 8 | 0;
 s = B + 1 | 0;
 o = (a[B >> 0] & 1) == 0 ? s : c[r >> 2] | 0;
 c[z >> 2] = o;
 c[x >> 2] = A;
 c[w >> 2] = 0;
 a[y >> 0] = 1;
 a[v >> 0] = 69;
 t = B + 4 | 0;
 q = a[l >> 0] | 0;
 p = a[m >> 0] | 0;
 b = c[e >> 2] | 0;
 l = o;
 a : while (1) {
  if (b) {
   if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    b = 0;
   }
  } else b = 0;
  g = (b | 0) == 0;
  m = c[f >> 2] | 0;
  do if (m) {
   if ((c[m + 12 >> 2] | 0) != (c[m + 16 >> 2] | 0)) if (g) break; else break a;
   if ((tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) != -1) if (g) break; else break a; else {
    c[f >> 2] = 0;
    E = 13;
    break;
   }
  } else E = 13; while (0);
  if ((E | 0) == 13) {
   E = 0;
   if (g) {
    m = 0;
    break;
   } else m = 0;
  }
  n = a[B >> 0] | 0;
  n = (n & 1) == 0 ? (n & 255) >>> 1 : c[t >> 2] | 0;
  if ((c[z >> 2] | 0) == (l + n | 0)) {
   _e(B, n << 1, 0);
   if (!(a[B >> 0] & 1)) g = 10; else g = (c[B >> 2] & -2) + -1 | 0;
   _e(B, g, 0);
   l = (a[B >> 0] & 1) == 0 ? s : c[r >> 2] | 0;
   c[z >> 2] = l + n;
  }
  n = b + 12 | 0;
  g = c[n >> 2] | 0;
  o = b + 16 | 0;
  if ((g | 0) == (c[o >> 2] | 0)) g = tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (kh(g & 255, y, v, l, z, q, p, C, A, x, w, u) | 0) break;
  g = c[n >> 2] | 0;
  if ((g | 0) == (c[o >> 2] | 0)) {
   tb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[n >> 2] = g + 1;
   continue;
  }
 }
 v = a[C >> 0] | 0;
 g = c[x >> 2] | 0;
 if (!((a[y >> 0] | 0) == 0 ? 1 : (((v & 1) == 0 ? (v & 255) >>> 1 : c[C + 4 >> 2] | 0) | 0) == 0) ? (g - A | 0) < 160 : 0) {
  w = c[w >> 2] | 0;
  y = g + 4 | 0;
  c[x >> 2] = y;
  c[g >> 2] = w;
  g = y;
 }
 h[k >> 3] = +Tn(l, c[z >> 2] | 0, j);
 Sj(C, A, g, j);
 if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   b = 0;
  }
 } else b = 0;
 b = (b | 0) == 0;
 do if (m) {
  if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0) ? (tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   E = 38;
   break;
  }
  if (!b) E = 39;
 } else E = 38; while (0);
 if ((E | 0) == 38 ? b : 0) E = 39;
 if ((E | 0) == 39) c[j >> 2] = c[j >> 2] | 2;
 E = c[e >> 2] | 0;
 Xe(B);
 Xe(C);
 i = D;
 return E | 0;
}

function Fn(b, e, f, g, h, i, j, k) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 c[f >> 2] = b;
 c[i >> 2] = g;
 if (k & 4) {
  b = c[f >> 2] | 0;
  k = e;
  if ((((k - b | 0) > 2 ? (a[b >> 0] | 0) == -17 : 0) ? (a[b + 1 >> 0] | 0) == -69 : 0) ? (a[b + 2 >> 0] | 0) == -65 : 0) {
   c[f >> 2] = b + 3;
   g = c[i >> 2] | 0;
   p = k;
  } else p = k;
 } else p = e;
 k = c[f >> 2] | 0;
 b = k >>> 0 < e >>> 0;
 a : do if (b & g >>> 0 < h >>> 0) while (1) {
  b = a[k >> 0] | 0;
  o = b & 255;
  do if (b << 24 >> 24 > -1) {
   if (o >>> 0 > j >>> 0) {
    b = 2;
    break a;
   }
   c[g >> 2] = o;
   c[f >> 2] = k + 1;
  } else {
   if ((b & 255) < 194) {
    b = 2;
    break a;
   }
   if ((b & 255) < 224) {
    if ((p - k | 0) < 2) {
     b = 1;
     break a;
    }
    b = d[k + 1 >> 0] | 0;
    if ((b & 192 | 0) != 128) {
     b = 2;
     break a;
    }
    b = b & 63 | o << 6 & 1984;
    if (b >>> 0 > j >>> 0) {
     b = 2;
     break a;
    }
    c[g >> 2] = b;
    c[f >> 2] = k + 2;
    break;
   }
   if ((b & 255) < 240) {
    if ((p - k | 0) < 3) {
     b = 1;
     break a;
    }
    l = a[k + 1 >> 0] | 0;
    b = a[k + 2 >> 0] | 0;
    switch (o | 0) {
    case 224:
     {
      if ((l & -32) << 24 >> 24 != -96) {
       b = 2;
       break a;
      }
      break;
     }
    case 237:
     {
      if ((l & -32) << 24 >> 24 != -128) {
       b = 2;
       break a;
      }
      break;
     }
    default:
     if ((l & -64) << 24 >> 24 != -128) {
      b = 2;
      break a;
     }
    }
    b = b & 255;
    if ((b & 192 | 0) != 128) {
     b = 2;
     break a;
    }
    b = (l & 255) << 6 & 4032 | o << 12 & 61440 | b & 63;
    if (b >>> 0 > j >>> 0) {
     b = 2;
     break a;
    }
    c[g >> 2] = b;
    c[f >> 2] = k + 3;
    break;
   }
   if ((b & 255) >= 245) {
    b = 2;
    break a;
   }
   if ((p - k | 0) < 4) {
    b = 1;
    break a;
   }
   n = a[k + 1 >> 0] | 0;
   b = a[k + 2 >> 0] | 0;
   l = a[k + 3 >> 0] | 0;
   switch (o | 0) {
   case 240:
    {
     if ((n + 112 & 255) >= 48) {
      b = 2;
      break a;
     }
     break;
    }
   case 244:
    {
     if ((n & -16) << 24 >> 24 != -128) {
      b = 2;
      break a;
     }
     break;
    }
   default:
    if ((n & -64) << 24 >> 24 != -128) {
     b = 2;
     break a;
    }
   }
   m = b & 255;
   if ((m & 192 | 0) != 128) {
    b = 2;
    break a;
   }
   b = l & 255;
   if ((b & 192 | 0) != 128) {
    b = 2;
    break a;
   }
   b = (n & 255) << 12 & 258048 | o << 18 & 1835008 | m << 6 & 4032 | b & 63;
   if (b >>> 0 > j >>> 0) {
    b = 2;
    break a;
   }
   c[g >> 2] = b;
   c[f >> 2] = k + 4;
  } while (0);
  g = (c[i >> 2] | 0) + 4 | 0;
  c[i >> 2] = g;
  k = c[f >> 2] | 0;
  b = k >>> 0 < e >>> 0;
  if (!(b & g >>> 0 < h >>> 0)) {
   q = 38;
   break;
  }
 } else q = 38; while (0);
 if ((q | 0) == 38) b = b & 1;
 return b | 0;
}

function xm(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = i;
 i = i + 240 | 0;
 s = A + 202 | 0;
 k = A + 200 | 0;
 z = A + 24 | 0;
 y = A + 12 | 0;
 w = A + 8 | 0;
 x = A + 40 | 0;
 u = A + 4 | 0;
 t = A;
 v = bm(g) | 0;
 ih(z, g, s, k);
 c[y >> 2] = 0;
 c[y + 4 >> 2] = 0;
 c[y + 8 >> 2] = 0;
 if (!(a[y >> 0] & 1)) b = 10; else b = (c[y >> 2] & -2) + -1 | 0;
 _e(y, b, 0);
 p = y + 8 | 0;
 q = y + 1 | 0;
 n = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 c[w >> 2] = n;
 c[u >> 2] = x;
 c[t >> 2] = 0;
 r = y + 4 | 0;
 o = a[k >> 0] | 0;
 b = c[e >> 2] | 0;
 k = n;
 a : while (1) {
  if (b) {
   if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    b = 0;
   }
  } else b = 0;
  g = (b | 0) == 0;
  l = c[f >> 2] | 0;
  do if (l) {
   if ((c[l + 12 >> 2] | 0) != (c[l + 16 >> 2] | 0)) if (g) break; else break a;
   if ((tb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) != -1) if (g) break; else break a; else {
    c[f >> 2] = 0;
    B = 13;
    break;
   }
  } else B = 13; while (0);
  if ((B | 0) == 13) {
   B = 0;
   if (g) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[y >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[r >> 2] | 0;
  if ((c[w >> 2] | 0) == (k + m | 0)) {
   _e(y, m << 1, 0);
   if (!(a[y >> 0] & 1)) g = 10; else g = (c[y >> 2] & -2) + -1 | 0;
   _e(y, g, 0);
   k = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
   c[w >> 2] = k + m;
  }
  m = b + 12 | 0;
  g = c[m >> 2] | 0;
  n = b + 16 | 0;
  if ((g | 0) == (c[n >> 2] | 0)) g = tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (Ug(g & 255, v, k, w, t, o, z, x, u, s) | 0) break;
  g = c[m >> 2] | 0;
  if ((g | 0) == (c[n >> 2] | 0)) {
   tb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[m >> 2] = g + 1;
   continue;
  }
 }
 s = a[z >> 0] | 0;
 g = c[u >> 2] | 0;
 if ((((s & 1) == 0 ? (s & 255) >>> 1 : c[z + 4 >> 2] | 0) | 0) != 0 ? (g - x | 0) < 160 : 0) {
  s = c[t >> 2] | 0;
  t = g + 4 | 0;
  c[u >> 2] = t;
  c[g >> 2] = s;
  g = t;
 }
 w = Wn(k, c[w >> 2] | 0, h, v) | 0;
 c[j >> 2] = w;
 c[j + 4 >> 2] = D;
 Sj(z, x, g, h);
 if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   b = 0;
  }
 } else b = 0;
 b = (b | 0) == 0;
 do if (l) {
  if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0) ? (tb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   B = 38;
   break;
  }
  if (!b) B = 39;
 } else B = 38; while (0);
 if ((B | 0) == 38 ? b : 0) B = 39;
 if ((B | 0) == 39) c[h >> 2] = c[h >> 2] | 2;
 B = c[e >> 2] | 0;
 Xe(y);
 Xe(z);
 i = A;
 return B | 0;
}

function tm(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = i;
 i = i + 240 | 0;
 s = A + 202 | 0;
 k = A + 200 | 0;
 z = A + 24 | 0;
 y = A + 12 | 0;
 w = A + 8 | 0;
 x = A + 40 | 0;
 u = A + 4 | 0;
 t = A;
 v = bm(g) | 0;
 ih(z, g, s, k);
 c[y >> 2] = 0;
 c[y + 4 >> 2] = 0;
 c[y + 8 >> 2] = 0;
 if (!(a[y >> 0] & 1)) b = 10; else b = (c[y >> 2] & -2) + -1 | 0;
 _e(y, b, 0);
 p = y + 8 | 0;
 q = y + 1 | 0;
 n = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 c[w >> 2] = n;
 c[u >> 2] = x;
 c[t >> 2] = 0;
 r = y + 4 | 0;
 o = a[k >> 0] | 0;
 b = c[e >> 2] | 0;
 k = n;
 a : while (1) {
  if (b) {
   if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    b = 0;
   }
  } else b = 0;
  g = (b | 0) == 0;
  l = c[f >> 2] | 0;
  do if (l) {
   if ((c[l + 12 >> 2] | 0) != (c[l + 16 >> 2] | 0)) if (g) break; else break a;
   if ((tb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) != -1) if (g) break; else break a; else {
    c[f >> 2] = 0;
    B = 13;
    break;
   }
  } else B = 13; while (0);
  if ((B | 0) == 13) {
   B = 0;
   if (g) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[y >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[r >> 2] | 0;
  if ((c[w >> 2] | 0) == (k + m | 0)) {
   _e(y, m << 1, 0);
   if (!(a[y >> 0] & 1)) g = 10; else g = (c[y >> 2] & -2) + -1 | 0;
   _e(y, g, 0);
   k = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
   c[w >> 2] = k + m;
  }
  m = b + 12 | 0;
  g = c[m >> 2] | 0;
  n = b + 16 | 0;
  if ((g | 0) == (c[n >> 2] | 0)) g = tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (Ug(g & 255, v, k, w, t, o, z, x, u, s) | 0) break;
  g = c[m >> 2] | 0;
  if ((g | 0) == (c[n >> 2] | 0)) {
   tb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[m >> 2] = g + 1;
   continue;
  }
 }
 s = a[z >> 0] | 0;
 g = c[u >> 2] | 0;
 if ((((s & 1) == 0 ? (s & 255) >>> 1 : c[z + 4 >> 2] | 0) | 0) != 0 ? (g - x | 0) < 160 : 0) {
  s = c[t >> 2] | 0;
  t = g + 4 | 0;
  c[u >> 2] = t;
  c[g >> 2] = s;
  g = t;
 }
 w = _n(k, c[w >> 2] | 0, h, v) | 0;
 c[j >> 2] = w;
 c[j + 4 >> 2] = D;
 Sj(z, x, g, h);
 if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   b = 0;
  }
 } else b = 0;
 b = (b | 0) == 0;
 do if (l) {
  if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0) ? (tb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   B = 38;
   break;
  }
  if (!b) B = 39;
 } else B = 38; while (0);
 if ((B | 0) == 38 ? b : 0) B = 39;
 if ((B | 0) == 39) c[h >> 2] = c[h >> 2] | 2;
 B = c[e >> 2] | 0;
 Xe(y);
 Xe(z);
 i = A;
 return B | 0;
}

function Tg(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 240 | 0;
 w = z;
 p = z + 208 | 0;
 y = z + 32 | 0;
 t = z + 28 | 0;
 x = z + 16 | 0;
 v = z + 12 | 0;
 r = z + 48 | 0;
 s = z + 8 | 0;
 q = z + 4 | 0;
 c[y >> 2] = 0;
 c[y + 4 >> 2] = 0;
 c[y + 8 >> 2] = 0;
 u = tf(g) | 0;
 c[t >> 2] = u;
 t = Fk(t, 9328) | 0;
 xb[c[(c[t >> 2] | 0) + 32 >> 2] & 7](t, 19840, 19866, p) | 0;
 co(u) | 0;
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 if (!(a[x >> 0] & 1)) b = 10; else b = (c[x >> 2] & -2) + -1 | 0;
 _e(x, b, 0);
 t = x + 8 | 0;
 u = x + 1 | 0;
 g = (a[x >> 0] & 1) == 0 ? u : c[t >> 2] | 0;
 c[v >> 2] = g;
 c[s >> 2] = r;
 c[q >> 2] = 0;
 o = x + 4 | 0;
 b = c[e >> 2] | 0;
 a : while (1) {
  if (b) {
   if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    b = 0;
   }
  } else b = 0;
  l = (b | 0) == 0;
  k = c[f >> 2] | 0;
  do if (k) {
   if ((c[k + 12 >> 2] | 0) != (c[k + 16 >> 2] | 0)) if (l) break; else break a;
   if ((tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0) != -1) if (l) break; else break a; else {
    c[f >> 2] = 0;
    A = 13;
    break;
   }
  } else A = 13; while (0);
  if ((A | 0) == 13) {
   A = 0;
   if (l) {
    k = 0;
    break;
   } else k = 0;
  }
  l = a[x >> 0] | 0;
  l = (l & 1) == 0 ? (l & 255) >>> 1 : c[o >> 2] | 0;
  if ((c[v >> 2] | 0) == (g + l | 0)) {
   _e(x, l << 1, 0);
   if (!(a[x >> 0] & 1)) g = 10; else g = (c[x >> 2] & -2) + -1 | 0;
   _e(x, g, 0);
   g = (a[x >> 0] & 1) == 0 ? u : c[t >> 2] | 0;
   c[v >> 2] = g + l;
  }
  m = b + 12 | 0;
  l = c[m >> 2] | 0;
  n = b + 16 | 0;
  if ((l | 0) == (c[n >> 2] | 0)) l = tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else l = d[l >> 0] | 0;
  if (Ug(l & 255, 16, g, v, q, 0, y, r, s, p) | 0) break;
  k = c[m >> 2] | 0;
  if ((k | 0) == (c[n >> 2] | 0)) {
   tb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[m >> 2] = k + 1;
   continue;
  }
 }
 _e(x, (c[v >> 2] | 0) - g | 0, 0);
 u = (a[x >> 0] & 1) == 0 ? u : c[t >> 2] | 0;
 v = Vg() | 0;
 c[w >> 2] = j;
 if ((Bm(u, v, 21224, w) | 0) != 1) c[h >> 2] = 4;
 if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   b = 0;
  }
 } else b = 0;
 b = (b | 0) == 0;
 do if (k) {
  if ((c[k + 12 >> 2] | 0) == (c[k + 16 >> 2] | 0) ? (tb[c[(c[k >> 2] | 0) + 36 >> 2] & 63](k) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   A = 37;
   break;
  }
  if (!b) A = 38;
 } else A = 37; while (0);
 if ((A | 0) == 37 ? b : 0) A = 38;
 if ((A | 0) == 38) c[h >> 2] = c[h >> 2] | 2;
 A = c[e >> 2] | 0;
 Xe(x);
 Xe(y);
 i = z;
 return A | 0;
}

function wm(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = i;
 i = i + 240 | 0;
 s = A + 202 | 0;
 k = A + 200 | 0;
 z = A + 24 | 0;
 y = A + 12 | 0;
 w = A + 8 | 0;
 x = A + 40 | 0;
 u = A + 4 | 0;
 t = A;
 v = bm(g) | 0;
 ih(z, g, s, k);
 c[y >> 2] = 0;
 c[y + 4 >> 2] = 0;
 c[y + 8 >> 2] = 0;
 if (!(a[y >> 0] & 1)) b = 10; else b = (c[y >> 2] & -2) + -1 | 0;
 _e(y, b, 0);
 p = y + 8 | 0;
 q = y + 1 | 0;
 n = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 c[w >> 2] = n;
 c[u >> 2] = x;
 c[t >> 2] = 0;
 r = y + 4 | 0;
 o = a[k >> 0] | 0;
 b = c[e >> 2] | 0;
 k = n;
 a : while (1) {
  if (b) {
   if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    b = 0;
   }
  } else b = 0;
  g = (b | 0) == 0;
  l = c[f >> 2] | 0;
  do if (l) {
   if ((c[l + 12 >> 2] | 0) != (c[l + 16 >> 2] | 0)) if (g) break; else break a;
   if ((tb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) != -1) if (g) break; else break a; else {
    c[f >> 2] = 0;
    B = 13;
    break;
   }
  } else B = 13; while (0);
  if ((B | 0) == 13) {
   B = 0;
   if (g) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[y >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[r >> 2] | 0;
  if ((c[w >> 2] | 0) == (k + m | 0)) {
   _e(y, m << 1, 0);
   if (!(a[y >> 0] & 1)) g = 10; else g = (c[y >> 2] & -2) + -1 | 0;
   _e(y, g, 0);
   k = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
   c[w >> 2] = k + m;
  }
  m = b + 12 | 0;
  g = c[m >> 2] | 0;
  n = b + 16 | 0;
  if ((g | 0) == (c[n >> 2] | 0)) g = tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (Ug(g & 255, v, k, w, t, o, z, x, u, s) | 0) break;
  g = c[m >> 2] | 0;
  if ((g | 0) == (c[n >> 2] | 0)) {
   tb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[m >> 2] = g + 1;
   continue;
  }
 }
 s = a[z >> 0] | 0;
 g = c[u >> 2] | 0;
 if ((((s & 1) == 0 ? (s & 255) >>> 1 : c[z + 4 >> 2] | 0) | 0) != 0 ? (g - x | 0) < 160 : 0) {
  s = c[t >> 2] | 0;
  t = g + 4 | 0;
  c[u >> 2] = t;
  c[g >> 2] = s;
  g = t;
 }
 c[j >> 2] = Xn(k, c[w >> 2] | 0, h, v) | 0;
 Sj(z, x, g, h);
 if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   b = 0;
  }
 } else b = 0;
 b = (b | 0) == 0;
 do if (l) {
  if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0) ? (tb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   B = 38;
   break;
  }
  if (!b) B = 39;
 } else B = 38; while (0);
 if ((B | 0) == 38 ? b : 0) B = 39;
 if ((B | 0) == 39) c[h >> 2] = c[h >> 2] | 2;
 B = c[e >> 2] | 0;
 Xe(y);
 Xe(z);
 i = A;
 return B | 0;
}

function vm(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = i;
 i = i + 240 | 0;
 s = A + 202 | 0;
 k = A + 200 | 0;
 z = A + 24 | 0;
 y = A + 12 | 0;
 w = A + 8 | 0;
 x = A + 40 | 0;
 u = A + 4 | 0;
 t = A;
 v = bm(g) | 0;
 ih(z, g, s, k);
 c[y >> 2] = 0;
 c[y + 4 >> 2] = 0;
 c[y + 8 >> 2] = 0;
 if (!(a[y >> 0] & 1)) b = 10; else b = (c[y >> 2] & -2) + -1 | 0;
 _e(y, b, 0);
 p = y + 8 | 0;
 q = y + 1 | 0;
 n = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 c[w >> 2] = n;
 c[u >> 2] = x;
 c[t >> 2] = 0;
 r = y + 4 | 0;
 o = a[k >> 0] | 0;
 b = c[e >> 2] | 0;
 k = n;
 a : while (1) {
  if (b) {
   if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    b = 0;
   }
  } else b = 0;
  g = (b | 0) == 0;
  l = c[f >> 2] | 0;
  do if (l) {
   if ((c[l + 12 >> 2] | 0) != (c[l + 16 >> 2] | 0)) if (g) break; else break a;
   if ((tb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) != -1) if (g) break; else break a; else {
    c[f >> 2] = 0;
    B = 13;
    break;
   }
  } else B = 13; while (0);
  if ((B | 0) == 13) {
   B = 0;
   if (g) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[y >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[r >> 2] | 0;
  if ((c[w >> 2] | 0) == (k + m | 0)) {
   _e(y, m << 1, 0);
   if (!(a[y >> 0] & 1)) g = 10; else g = (c[y >> 2] & -2) + -1 | 0;
   _e(y, g, 0);
   k = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
   c[w >> 2] = k + m;
  }
  m = b + 12 | 0;
  g = c[m >> 2] | 0;
  n = b + 16 | 0;
  if ((g | 0) == (c[n >> 2] | 0)) g = tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (Ug(g & 255, v, k, w, t, o, z, x, u, s) | 0) break;
  g = c[m >> 2] | 0;
  if ((g | 0) == (c[n >> 2] | 0)) {
   tb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[m >> 2] = g + 1;
   continue;
  }
 }
 s = a[z >> 0] | 0;
 g = c[u >> 2] | 0;
 if ((((s & 1) == 0 ? (s & 255) >>> 1 : c[z + 4 >> 2] | 0) | 0) != 0 ? (g - x | 0) < 160 : 0) {
  s = c[t >> 2] | 0;
  t = g + 4 | 0;
  c[u >> 2] = t;
  c[g >> 2] = s;
  g = t;
 }
 c[j >> 2] = Yn(k, c[w >> 2] | 0, h, v) | 0;
 Sj(z, x, g, h);
 if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   b = 0;
  }
 } else b = 0;
 b = (b | 0) == 0;
 do if (l) {
  if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0) ? (tb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   B = 38;
   break;
  }
  if (!b) B = 39;
 } else B = 38; while (0);
 if ((B | 0) == 38 ? b : 0) B = 39;
 if ((B | 0) == 39) c[h >> 2] = c[h >> 2] | 2;
 B = c[e >> 2] | 0;
 Xe(y);
 Xe(z);
 i = A;
 return B | 0;
}

function um(e, f, g, h, j, k) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 B = i;
 i = i + 240 | 0;
 t = B + 202 | 0;
 l = B + 200 | 0;
 A = B + 24 | 0;
 z = B + 12 | 0;
 x = B + 8 | 0;
 y = B + 40 | 0;
 v = B + 4 | 0;
 u = B;
 w = bm(h) | 0;
 ih(A, h, t, l);
 c[z >> 2] = 0;
 c[z + 4 >> 2] = 0;
 c[z + 8 >> 2] = 0;
 if (!(a[z >> 0] & 1)) e = 10; else e = (c[z >> 2] & -2) + -1 | 0;
 _e(z, e, 0);
 q = z + 8 | 0;
 r = z + 1 | 0;
 o = (a[z >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
 c[x >> 2] = o;
 c[v >> 2] = y;
 c[u >> 2] = 0;
 s = z + 4 | 0;
 p = a[l >> 0] | 0;
 e = c[f >> 2] | 0;
 l = o;
 a : while (1) {
  if (e) {
   if ((c[e + 12 >> 2] | 0) == (c[e + 16 >> 2] | 0) ? (tb[c[(c[e >> 2] | 0) + 36 >> 2] & 63](e) | 0) == -1 : 0) {
    c[f >> 2] = 0;
    e = 0;
   }
  } else e = 0;
  h = (e | 0) == 0;
  m = c[g >> 2] | 0;
  do if (m) {
   if ((c[m + 12 >> 2] | 0) != (c[m + 16 >> 2] | 0)) if (h) break; else break a;
   if ((tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) != -1) if (h) break; else break a; else {
    c[g >> 2] = 0;
    C = 13;
    break;
   }
  } else C = 13; while (0);
  if ((C | 0) == 13) {
   C = 0;
   if (h) {
    m = 0;
    break;
   } else m = 0;
  }
  n = a[z >> 0] | 0;
  n = (n & 1) == 0 ? (n & 255) >>> 1 : c[s >> 2] | 0;
  if ((c[x >> 2] | 0) == (l + n | 0)) {
   _e(z, n << 1, 0);
   if (!(a[z >> 0] & 1)) h = 10; else h = (c[z >> 2] & -2) + -1 | 0;
   _e(z, h, 0);
   l = (a[z >> 0] & 1) == 0 ? r : c[q >> 2] | 0;
   c[x >> 2] = l + n;
  }
  n = e + 12 | 0;
  h = c[n >> 2] | 0;
  o = e + 16 | 0;
  if ((h | 0) == (c[o >> 2] | 0)) h = tb[c[(c[e >> 2] | 0) + 36 >> 2] & 63](e) | 0; else h = d[h >> 0] | 0;
  if (Ug(h & 255, w, l, x, u, p, A, y, v, t) | 0) break;
  h = c[n >> 2] | 0;
  if ((h | 0) == (c[o >> 2] | 0)) {
   tb[c[(c[e >> 2] | 0) + 40 >> 2] & 63](e) | 0;
   continue;
  } else {
   c[n >> 2] = h + 1;
   continue;
  }
 }
 t = a[A >> 0] | 0;
 h = c[v >> 2] | 0;
 if ((((t & 1) == 0 ? (t & 255) >>> 1 : c[A + 4 >> 2] | 0) | 0) != 0 ? (h - y | 0) < 160 : 0) {
  t = c[u >> 2] | 0;
  u = h + 4 | 0;
  c[v >> 2] = u;
  c[h >> 2] = t;
  h = u;
 }
 b[k >> 1] = Zn(l, c[x >> 2] | 0, j, w) | 0;
 Sj(A, y, h, j);
 if (e) {
  if ((c[e + 12 >> 2] | 0) == (c[e + 16 >> 2] | 0) ? (tb[c[(c[e >> 2] | 0) + 36 >> 2] & 63](e) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   e = 0;
  }
 } else e = 0;
 e = (e | 0) == 0;
 do if (m) {
  if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0) ? (tb[c[(c[m >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1 : 0) {
   c[g >> 2] = 0;
   C = 38;
   break;
  }
  if (!e) C = 39;
 } else C = 38; while (0);
 if ((C | 0) == 38 ? e : 0) C = 39;
 if ((C | 0) == 39) c[j >> 2] = c[j >> 2] | 2;
 C = c[f >> 2] | 0;
 Xe(z);
 Xe(A);
 i = B;
 return C | 0;
}

function sm(b, e, f, g, h, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = i;
 i = i + 240 | 0;
 s = A + 202 | 0;
 k = A + 200 | 0;
 z = A + 24 | 0;
 y = A + 12 | 0;
 w = A + 8 | 0;
 x = A + 40 | 0;
 u = A + 4 | 0;
 t = A;
 v = bm(g) | 0;
 ih(z, g, s, k);
 c[y >> 2] = 0;
 c[y + 4 >> 2] = 0;
 c[y + 8 >> 2] = 0;
 if (!(a[y >> 0] & 1)) b = 10; else b = (c[y >> 2] & -2) + -1 | 0;
 _e(y, b, 0);
 p = y + 8 | 0;
 q = y + 1 | 0;
 n = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
 c[w >> 2] = n;
 c[u >> 2] = x;
 c[t >> 2] = 0;
 r = y + 4 | 0;
 o = a[k >> 0] | 0;
 b = c[e >> 2] | 0;
 k = n;
 a : while (1) {
  if (b) {
   if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    b = 0;
   }
  } else b = 0;
  g = (b | 0) == 0;
  l = c[f >> 2] | 0;
  do if (l) {
   if ((c[l + 12 >> 2] | 0) != (c[l + 16 >> 2] | 0)) if (g) break; else break a;
   if ((tb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) != -1) if (g) break; else break a; else {
    c[f >> 2] = 0;
    B = 13;
    break;
   }
  } else B = 13; while (0);
  if ((B | 0) == 13) {
   B = 0;
   if (g) {
    l = 0;
    break;
   } else l = 0;
  }
  m = a[y >> 0] | 0;
  m = (m & 1) == 0 ? (m & 255) >>> 1 : c[r >> 2] | 0;
  if ((c[w >> 2] | 0) == (k + m | 0)) {
   _e(y, m << 1, 0);
   if (!(a[y >> 0] & 1)) g = 10; else g = (c[y >> 2] & -2) + -1 | 0;
   _e(y, g, 0);
   k = (a[y >> 0] & 1) == 0 ? q : c[p >> 2] | 0;
   c[w >> 2] = k + m;
  }
  m = b + 12 | 0;
  g = c[m >> 2] | 0;
  n = b + 16 | 0;
  if ((g | 0) == (c[n >> 2] | 0)) g = tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else g = d[g >> 0] | 0;
  if (Ug(g & 255, v, k, w, t, o, z, x, u, s) | 0) break;
  g = c[m >> 2] | 0;
  if ((g | 0) == (c[n >> 2] | 0)) {
   tb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
   continue;
  } else {
   c[m >> 2] = g + 1;
   continue;
  }
 }
 s = a[z >> 0] | 0;
 g = c[u >> 2] | 0;
 if ((((s & 1) == 0 ? (s & 255) >>> 1 : c[z + 4 >> 2] | 0) | 0) != 0 ? (g - x | 0) < 160 : 0) {
  s = c[t >> 2] | 0;
  t = g + 4 | 0;
  c[u >> 2] = t;
  c[g >> 2] = s;
  g = t;
 }
 c[j >> 2] = $n(k, c[w >> 2] | 0, h, v) | 0;
 Sj(z, x, g, h);
 if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0) ? (tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   b = 0;
  }
 } else b = 0;
 b = (b | 0) == 0;
 do if (l) {
  if ((c[l + 12 >> 2] | 0) == (c[l + 16 >> 2] | 0) ? (tb[c[(c[l >> 2] | 0) + 36 >> 2] & 63](l) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   B = 38;
   break;
  }
  if (!b) B = 39;
 } else B = 38; while (0);
 if ((B | 0) == 38 ? b : 0) B = 39;
 if ((B | 0) == 39) c[h >> 2] = c[h >> 2] | 2;
 B = c[e >> 2] | 0;
 Xe(y);
 Xe(z);
 i = A;
 return B | 0;
}

function Vj(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 E = i;
 i = i + 576 | 0;
 v = E + 424 | 0;
 y = E;
 u = E + 24 | 0;
 D = E + 16 | 0;
 w = E + 12 | 0;
 A = E + 8 | 0;
 k = E + 464 | 0;
 s = E + 4 | 0;
 x = E + 468 | 0;
 c[D >> 2] = u;
 C = D + 4 | 0;
 c[C >> 2] = 98;
 c[A >> 2] = tf(g) | 0;
 b = Fk(A, 9320) | 0;
 a[k >> 0] = 0;
 c[s >> 2] = c[e >> 2];
 t = c[g + 4 >> 2] | 0;
 c[v >> 2] = c[s >> 2];
 if (Wj(d, v, f, A, t, h, k, b, D, w, u + 400 | 0) | 0) {
  xb[c[(c[b >> 2] | 0) + 48 >> 2] & 7](b, 21312, 21322, v) | 0;
  f = c[w >> 2] | 0;
  g = c[D >> 2] | 0;
  b = f - g | 0;
  if ((b | 0) > 392) {
   b = ke((b >> 2) + 2 | 0) | 0;
   if (!b) zc(); else {
    z = b;
    l = b;
   }
  } else {
   z = 0;
   l = x;
  }
  if (!(a[k >> 0] | 0)) b = l; else {
   a[l >> 0] = 45;
   b = l + 1 | 0;
  }
  t = v + 40 | 0;
  u = v;
  if (g >>> 0 < f >>> 0) {
   k = v + 4 | 0;
   l = k + 4 | 0;
   m = l + 4 | 0;
   n = m + 4 | 0;
   o = n + 4 | 0;
   p = o + 4 | 0;
   q = p + 4 | 0;
   r = q + 4 | 0;
   s = r + 4 | 0;
   do {
    f = c[g >> 2] | 0;
    if ((c[v >> 2] | 0) != (f | 0)) if ((c[k >> 2] | 0) != (f | 0)) if ((c[l >> 2] | 0) != (f | 0)) if ((c[m >> 2] | 0) != (f | 0)) if ((c[n >> 2] | 0) != (f | 0)) if ((c[o >> 2] | 0) != (f | 0)) if ((c[p >> 2] | 0) != (f | 0)) if ((c[q >> 2] | 0) != (f | 0)) if ((c[r >> 2] | 0) == (f | 0)) f = r; else f = (c[s >> 2] | 0) == (f | 0) ? s : t; else f = q; else f = p; else f = o; else f = n; else f = m; else f = l; else f = k; else f = v;
    a[b >> 0] = a[21312 + (f - u >> 2) >> 0] | 0;
    g = g + 4 | 0;
    b = b + 1 | 0;
   } while (g >>> 0 < (c[w >> 2] | 0) >>> 0);
  }
  a[b >> 0] = 0;
  c[y >> 2] = j;
  Jd(x, 21308, y) | 0;
  if (z) le(z);
 }
 b = c[d >> 2] | 0;
 do if (b) {
  f = c[b + 12 >> 2] | 0;
  if ((f | 0) == (c[b + 16 >> 2] | 0)) b = tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else b = c[f >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   g = 1;
   break;
  } else {
   g = (c[d >> 2] | 0) == 0;
   break;
  }
 } else g = 1; while (0);
 b = c[e >> 2] | 0;
 do if (b) {
  f = c[b + 12 >> 2] | 0;
  if ((f | 0) == (c[b + 16 >> 2] | 0)) b = tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else b = c[f >> 2] | 0;
  if ((b | 0) != -1) if (g) break; else {
   B = 30;
   break;
  } else {
   c[e >> 2] = 0;
   B = 28;
   break;
  }
 } else B = 28; while (0);
 if ((B | 0) == 28 ? g : 0) B = 30;
 if ((B | 0) == 30) c[h >> 2] = c[h >> 2] | 2;
 f = c[d >> 2] | 0;
 co(c[A >> 2] | 0) | 0;
 b = c[D >> 2] | 0;
 c[D >> 2] = 0;
 if (b) pb[c[C >> 2] & 127](b);
 i = E;
 return f | 0;
}

function Bn(d, f, g, h, i, j, k, l) {
 d = d | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 var m = 0, n = 0;
 c[g >> 2] = d;
 c[j >> 2] = h;
 if (l & 2) if ((i - h | 0) < 3) d = 1; else {
  c[j >> 2] = h + 1;
  a[h >> 0] = -17;
  m = c[j >> 2] | 0;
  c[j >> 2] = m + 1;
  a[m >> 0] = -69;
  m = c[j >> 2] | 0;
  c[j >> 2] = m + 1;
  a[m >> 0] = -65;
  m = 4;
 } else m = 4;
 a : do if ((m | 0) == 4) {
  n = f;
  d = c[g >> 2] | 0;
  if (d >>> 0 < f >>> 0) while (1) {
   l = b[d >> 1] | 0;
   m = l & 65535;
   if (m >>> 0 > k >>> 0) {
    d = 2;
    break a;
   }
   do if ((l & 65535) < 128) {
    d = c[j >> 2] | 0;
    if ((i - d | 0) < 1) {
     d = 1;
     break a;
    }
    c[j >> 2] = d + 1;
    a[d >> 0] = l;
   } else {
    if ((l & 65535) < 2048) {
     d = c[j >> 2] | 0;
     if ((i - d | 0) < 2) {
      d = 1;
      break a;
     }
     c[j >> 2] = d + 1;
     a[d >> 0] = m >>> 6 | 192;
     h = c[j >> 2] | 0;
     c[j >> 2] = h + 1;
     a[h >> 0] = m & 63 | 128;
     break;
    }
    if ((l & 65535) < 55296) {
     d = c[j >> 2] | 0;
     if ((i - d | 0) < 3) {
      d = 1;
      break a;
     }
     c[j >> 2] = d + 1;
     a[d >> 0] = m >>> 12 | 224;
     h = c[j >> 2] | 0;
     c[j >> 2] = h + 1;
     a[h >> 0] = m >>> 6 & 63 | 128;
     h = c[j >> 2] | 0;
     c[j >> 2] = h + 1;
     a[h >> 0] = m & 63 | 128;
     break;
    }
    if ((l & 65535) >= 56320) {
     if ((l & 65535) < 57344) {
      d = 2;
      break a;
     }
     d = c[j >> 2] | 0;
     if ((i - d | 0) < 3) {
      d = 1;
      break a;
     }
     c[j >> 2] = d + 1;
     a[d >> 0] = m >>> 12 | 224;
     h = c[j >> 2] | 0;
     c[j >> 2] = h + 1;
     a[h >> 0] = m >>> 6 & 63 | 128;
     h = c[j >> 2] | 0;
     c[j >> 2] = h + 1;
     a[h >> 0] = m & 63 | 128;
     break;
    }
    if ((n - d | 0) < 4) {
     d = 1;
     break a;
    }
    d = d + 2 | 0;
    l = e[d >> 1] | 0;
    if ((l & 64512 | 0) != 56320) {
     d = 2;
     break a;
    }
    if ((i - (c[j >> 2] | 0) | 0) < 4) {
     d = 1;
     break a;
    }
    h = m & 960;
    if (((h << 10) + 65536 | m << 10 & 64512 | l & 1023) >>> 0 > k >>> 0) {
     d = 2;
     break a;
    }
    c[g >> 2] = d;
    d = (h >>> 6) + 1 | 0;
    h = c[j >> 2] | 0;
    c[j >> 2] = h + 1;
    a[h >> 0] = d >>> 2 | 240;
    h = c[j >> 2] | 0;
    c[j >> 2] = h + 1;
    a[h >> 0] = m >>> 2 & 15 | d << 4 & 48 | 128;
    h = c[j >> 2] | 0;
    c[j >> 2] = h + 1;
    a[h >> 0] = m << 4 & 48 | l >>> 6 & 15 | 128;
    m = c[j >> 2] | 0;
    c[j >> 2] = m + 1;
    a[m >> 0] = l & 63 | 128;
   } while (0);
   d = (c[g >> 2] | 0) + 2 | 0;
   c[g >> 2] = d;
   if (d >>> 0 >= f >>> 0) {
    d = 0;
    break;
   }
  } else d = 0;
 } while (0);
 return d | 0;
}

function Mj(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 E = i;
 i = i + 240 | 0;
 x = E + 24 | 0;
 y = E;
 u = E + 136 | 0;
 D = E + 16 | 0;
 w = E + 12 | 0;
 A = E + 8 | 0;
 k = E + 134 | 0;
 s = E + 4 | 0;
 v = E + 124 | 0;
 c[D >> 2] = u;
 C = D + 4 | 0;
 c[C >> 2] = 98;
 c[A >> 2] = tf(g) | 0;
 b = Fk(A, 9328) | 0;
 a[k >> 0] = 0;
 c[s >> 2] = c[e >> 2];
 t = c[g + 4 >> 2] | 0;
 c[x >> 2] = c[s >> 2];
 if (Oj(d, x, f, A, t, h, k, b, D, w, u + 100 | 0) | 0) {
  xb[c[(c[b >> 2] | 0) + 32 >> 2] & 7](b, 21297, 21307, v) | 0;
  f = c[w >> 2] | 0;
  g = c[D >> 2] | 0;
  b = f - g | 0;
  if ((b | 0) > 98) {
   b = ke(b + 2 | 0) | 0;
   if (!b) zc(); else {
    z = b;
    l = b;
   }
  } else {
   z = 0;
   l = x;
  }
  if (!(a[k >> 0] | 0)) b = l; else {
   a[l >> 0] = 45;
   b = l + 1 | 0;
  }
  t = v + 10 | 0;
  u = v;
  if (g >>> 0 < f >>> 0) {
   k = v + 1 | 0;
   l = k + 1 | 0;
   m = l + 1 | 0;
   n = m + 1 | 0;
   o = n + 1 | 0;
   p = o + 1 | 0;
   q = p + 1 | 0;
   r = q + 1 | 0;
   s = r + 1 | 0;
   do {
    f = a[g >> 0] | 0;
    if ((a[v >> 0] | 0) != f << 24 >> 24) if ((a[k >> 0] | 0) != f << 24 >> 24) if ((a[l >> 0] | 0) != f << 24 >> 24) if ((a[m >> 0] | 0) != f << 24 >> 24) if ((a[n >> 0] | 0) != f << 24 >> 24) if ((a[o >> 0] | 0) != f << 24 >> 24) if ((a[p >> 0] | 0) != f << 24 >> 24) if ((a[q >> 0] | 0) != f << 24 >> 24) if ((a[r >> 0] | 0) == f << 24 >> 24) f = r; else f = (a[s >> 0] | 0) == f << 24 >> 24 ? s : t; else f = q; else f = p; else f = o; else f = n; else f = m; else f = l; else f = k; else f = v;
    a[b >> 0] = a[21297 + (f - u) >> 0] | 0;
    g = g + 1 | 0;
    b = b + 1 | 0;
   } while (g >>> 0 < (c[w >> 2] | 0) >>> 0);
  }
  a[b >> 0] = 0;
  c[y >> 2] = j;
  Jd(x, 21308, y) | 0;
  if (z) le(z);
 }
 b = c[d >> 2] | 0;
 do if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
   c[d >> 2] = 0;
   b = 0;
   break;
  } else {
   b = c[d >> 2] | 0;
   break;
  }
 } else b = 0; while (0);
 b = (b | 0) == 0;
 f = c[e >> 2] | 0;
 do if (f) {
  if ((c[f + 12 >> 2] | 0) == (c[f + 16 >> 2] | 0) ? (tb[c[(c[f >> 2] | 0) + 36 >> 2] & 63](f) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   B = 25;
   break;
  }
  if (!b) B = 26;
 } else B = 25; while (0);
 if ((B | 0) == 25 ? b : 0) B = 26;
 if ((B | 0) == 26) c[h >> 2] = c[h >> 2] | 2;
 f = c[d >> 2] | 0;
 co(c[A >> 2] | 0) | 0;
 b = c[D >> 2] | 0;
 c[D >> 2] = 0;
 if (b) pb[c[C >> 2] & 127](b);
 i = E;
 return f | 0;
}

function bd(a, b) {
 a = +a;
 b = +b;
 var d = 0, e = 0, f = 0, g = 0, i = 0, j = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 m = c[k + 4 >> 2] | 0;
 h[k >> 3] = b;
 n = c[k >> 2] | 0;
 o = c[k + 4 >> 2] | 0;
 e = jo(d | 0, m | 0, 52) | 0;
 e = e & 2047;
 j = jo(n | 0, o | 0, 52) | 0;
 j = j & 2047;
 p = m & -2147483648;
 i = lo(n | 0, o | 0, 1) | 0;
 l = D;
 a : do if (!((i | 0) == 0 & (l | 0) == 0) ? (g = o & 2147483647, !(g >>> 0 > 2146435072 | (g | 0) == 2146435072 & n >>> 0 > 0 | (e | 0) == 2047)) : 0) {
  f = lo(d | 0, m | 0, 1) | 0;
  g = D;
  if (!(g >>> 0 > l >>> 0 | (g | 0) == (l | 0) & f >>> 0 > i >>> 0)) return +((f | 0) == (i | 0) & (g | 0) == (l | 0) ? a * 0.0 : a);
  if (!e) {
   e = lo(d | 0, m | 0, 12) | 0;
   f = D;
   if ((f | 0) > -1 | (f | 0) == -1 & e >>> 0 > 4294967295) {
    g = e;
    e = 0;
    do {
     e = e + -1 | 0;
     g = lo(g | 0, f | 0, 1) | 0;
     f = D;
    } while ((f | 0) > -1 | (f | 0) == -1 & g >>> 0 > 4294967295);
   } else e = 0;
   d = lo(d | 0, m | 0, 1 - e | 0) | 0;
   f = D;
  } else f = m & 1048575 | 1048576;
  if (!j) {
   g = lo(n | 0, o | 0, 12) | 0;
   i = D;
   if ((i | 0) > -1 | (i | 0) == -1 & g >>> 0 > 4294967295) {
    j = 0;
    do {
     j = j + -1 | 0;
     g = lo(g | 0, i | 0, 1) | 0;
     i = D;
    } while ((i | 0) > -1 | (i | 0) == -1 & g >>> 0 > 4294967295);
   } else j = 0;
   n = lo(n | 0, o | 0, 1 - j | 0) | 0;
   m = D;
  } else m = o & 1048575 | 1048576;
  l = go(d | 0, f | 0, n | 0, m | 0) | 0;
  i = D;
  g = (i | 0) > -1 | (i | 0) == -1 & l >>> 0 > 4294967295;
  b : do if ((e | 0) > (j | 0)) {
   while (1) {
    if (g) if ((d | 0) == (n | 0) & (f | 0) == (m | 0)) break; else {
     d = l;
     f = i;
    }
    d = lo(d | 0, f | 0, 1) | 0;
    f = D;
    e = e + -1 | 0;
    l = go(d | 0, f | 0, n | 0, m | 0) | 0;
    i = D;
    g = (i | 0) > -1 | (i | 0) == -1 & l >>> 0 > 4294967295;
    if ((e | 0) <= (j | 0)) break b;
   }
   b = a * 0.0;
   break a;
  } while (0);
  if (g) if ((d | 0) == (n | 0) & (f | 0) == (m | 0)) {
   b = a * 0.0;
   break;
  } else {
   f = i;
   d = l;
  }
  if (f >>> 0 < 1048576 | (f | 0) == 1048576 & d >>> 0 < 0) do {
   d = lo(d | 0, f | 0, 1) | 0;
   f = D;
   e = e + -1 | 0;
  } while (f >>> 0 < 1048576 | (f | 0) == 1048576 & d >>> 0 < 0);
  if ((e | 0) > 0) {
   o = io(d | 0, f | 0, 0, -1048576) | 0;
   d = D;
   e = lo(e | 0, 0, 52) | 0;
   d = d | D;
   e = o | e;
  } else {
   e = jo(d | 0, f | 0, 1 - e | 0) | 0;
   d = D;
  }
  c[k >> 2] = e;
  c[k + 4 >> 2] = d | p;
  b = +h[k >> 3];
 } else q = 3; while (0);
 if ((q | 0) == 3) {
  b = a * b;
  b = b / b;
 }
 return +b;
}

function pc(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 a : do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  if ((c[d + 4 >> 2] | 0) == (e | 0) ? (h = d + 28 | 0, (c[h >> 2] | 0) != 1) : 0) c[h >> 2] = f;
 } else {
  if ((b | 0) != (c[d >> 2] | 0)) {
   q = c[b + 12 >> 2] | 0;
   j = b + 16 + (q << 3) | 0;
   rc(b + 16 | 0, d, e, f, g);
   h = b + 24 | 0;
   if ((q | 0) <= 1) break;
   i = c[b + 8 >> 2] | 0;
   if ((i & 2 | 0) == 0 ? (k = d + 36 | 0, (c[k >> 2] | 0) != 1) : 0) {
    if (!(i & 1)) {
     i = d + 54 | 0;
     while (1) {
      if (a[i >> 0] | 0) break a;
      if ((c[k >> 2] | 0) == 1) break a;
      rc(h, d, e, f, g);
      h = h + 8 | 0;
      if (h >>> 0 >= j >>> 0) break a;
     }
    }
    i = d + 24 | 0;
    b = d + 54 | 0;
    while (1) {
     if (a[b >> 0] | 0) break a;
     if ((c[k >> 2] | 0) == 1 ? (c[i >> 2] | 0) == 1 : 0) break a;
     rc(h, d, e, f, g);
     h = h + 8 | 0;
     if (h >>> 0 >= j >>> 0) break a;
    }
   }
   i = d + 54 | 0;
   while (1) {
    if (a[i >> 0] | 0) break a;
    rc(h, d, e, f, g);
    h = h + 8 | 0;
    if (h >>> 0 >= j >>> 0) break a;
   }
  }
  if ((c[d + 16 >> 2] | 0) != (e | 0) ? (p = d + 20 | 0, (c[p >> 2] | 0) != (e | 0)) : 0) {
   c[d + 32 >> 2] = f;
   m = d + 44 | 0;
   if ((c[m >> 2] | 0) == 4) break;
   i = c[b + 12 >> 2] | 0;
   j = b + 16 + (i << 3) | 0;
   k = d + 52 | 0;
   f = d + 53 | 0;
   n = d + 54 | 0;
   l = b + 8 | 0;
   o = d + 24 | 0;
   b : do if ((i | 0) > 0) {
    i = 0;
    h = 0;
    b = b + 16 | 0;
    while (1) {
     a[k >> 0] = 0;
     a[f >> 0] = 0;
     qc(b, d, e, e, 1, g);
     if (a[n >> 0] | 0) {
      q = 20;
      break b;
     }
     do if (a[f >> 0] | 0) {
      if (!(a[k >> 0] | 0)) if (!(c[l >> 2] & 1)) {
       h = 1;
       q = 20;
       break b;
      } else {
       h = 1;
       break;
      }
      if ((c[o >> 2] | 0) == 1) break b;
      if (!(c[l >> 2] & 2)) break b; else {
       i = 1;
       h = 1;
      }
     } while (0);
     b = b + 8 | 0;
     if (b >>> 0 >= j >>> 0) {
      q = 20;
      break;
     }
    }
   } else {
    i = 0;
    h = 0;
    q = 20;
   } while (0);
   do if ((q | 0) == 20) {
    if ((!i ? (c[p >> 2] = e, e = d + 40 | 0, c[e >> 2] = (c[e >> 2] | 0) + 1, (c[d + 36 >> 2] | 0) == 1) : 0) ? (c[o >> 2] | 0) == 2 : 0) {
     a[n >> 0] = 1;
     if (h) break;
    } else q = 24;
    if ((q | 0) == 24 ? h : 0) break;
    c[m >> 2] = 4;
    break a;
   } while (0);
   c[m >> 2] = 3;
   break;
  }
  if ((f | 0) == 1) c[d + 32 >> 2] = 1;
 } while (0);
 return;
}

function Hh(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 t = i;
 i = i + 16 | 0;
 s = t;
 r = Fk(j, 9320) | 0;
 m = Fk(j, 9476) | 0;
 qb[c[(c[m >> 2] | 0) + 20 >> 2] & 63](s, m);
 p = a[s >> 0] | 0;
 q = s + 4 | 0;
 if (((p & 1) == 0 ? (p & 255) >>> 1 : c[q >> 2] | 0) | 0) {
  c[h >> 2] = f;
  j = a[b >> 0] | 0;
  switch (j << 24 >> 24) {
  case 43:
  case 45:
   {
    p = zb[c[(c[r >> 2] | 0) + 44 >> 2] & 15](r, j) | 0;
    k = c[h >> 2] | 0;
    c[h >> 2] = k + 4;
    c[k >> 2] = p;
    k = b + 1 | 0;
    break;
   }
  default:
   k = b;
  }
  a : do if ((e - k | 0) > 1 ? (a[k >> 0] | 0) == 48 : 0) {
   j = k + 1 | 0;
   switch (a[j >> 0] | 0) {
   case 88:
   case 120:
    break;
   default:
    break a;
   }
   p = zb[c[(c[r >> 2] | 0) + 44 >> 2] & 15](r, 48) | 0;
   o = c[h >> 2] | 0;
   c[h >> 2] = o + 4;
   c[o >> 2] = p;
   o = zb[c[(c[r >> 2] | 0) + 44 >> 2] & 15](r, a[j >> 0] | 0) | 0;
   p = c[h >> 2] | 0;
   c[h >> 2] = p + 4;
   c[p >> 2] = o;
   k = k + 2 | 0;
  } while (0);
  if ((k | 0) != (e | 0) ? (n = e + -1 | 0, k >>> 0 < n >>> 0) : 0) {
   l = k;
   j = n;
   do {
    p = a[l >> 0] | 0;
    a[l >> 0] = a[j >> 0] | 0;
    a[j >> 0] = p;
    l = l + 1 | 0;
    j = j + -1 | 0;
   } while (l >>> 0 < j >>> 0);
  }
  m = tb[c[(c[m >> 2] | 0) + 16 >> 2] & 63](m) | 0;
  n = s + 8 | 0;
  o = s + 1 | 0;
  if (k >>> 0 < e >>> 0) {
   j = 0;
   l = 0;
   p = k;
   while (1) {
    u = a[((a[s >> 0] & 1) == 0 ? o : c[n >> 2] | 0) + l >> 0] | 0;
    if (u << 24 >> 24 != 0 & (j | 0) == (u << 24 >> 24 | 0)) {
     u = c[h >> 2] | 0;
     c[h >> 2] = u + 4;
     c[u >> 2] = m;
     u = a[s >> 0] | 0;
     j = 0;
     l = (l >>> 0 < (((u & 1) == 0 ? (u & 255) >>> 1 : c[q >> 2] | 0) + -1 | 0) >>> 0 & 1) + l | 0;
    }
    v = zb[c[(c[r >> 2] | 0) + 44 >> 2] & 15](r, a[p >> 0] | 0) | 0;
    u = c[h >> 2] | 0;
    c[h >> 2] = u + 4;
    c[u >> 2] = v;
    p = p + 1 | 0;
    if (p >>> 0 >= e >>> 0) break; else j = j + 1 | 0;
   }
  }
  j = f + (k - b << 2) | 0;
  l = c[h >> 2] | 0;
  if ((j | 0) != (l | 0)) {
   k = l + -4 | 0;
   if (j >>> 0 < k >>> 0) {
    do {
     v = c[j >> 2] | 0;
     c[j >> 2] = c[k >> 2];
     c[k >> 2] = v;
     j = j + 4 | 0;
     k = k + -4 | 0;
    } while (j >>> 0 < k >>> 0);
    j = l;
   } else j = l;
  }
 } else {
  xb[c[(c[r >> 2] | 0) + 48 >> 2] & 7](r, b, e, f) | 0;
  j = f + (e - b << 2) | 0;
  c[h >> 2] = j;
 }
 c[g >> 2] = (d | 0) == (e | 0) ? j : f + (d - b << 2) | 0;
 Xe(s);
 i = t;
 return;
}

function uh(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 t = i;
 i = i + 16 | 0;
 s = t;
 r = Fk(j, 9328) | 0;
 m = Fk(j, 9468) | 0;
 qb[c[(c[m >> 2] | 0) + 20 >> 2] & 63](s, m);
 p = a[s >> 0] | 0;
 q = s + 4 | 0;
 if (((p & 1) == 0 ? (p & 255) >>> 1 : c[q >> 2] | 0) | 0) {
  c[h >> 2] = f;
  j = a[b >> 0] | 0;
  switch (j << 24 >> 24) {
  case 43:
  case 45:
   {
    p = zb[c[(c[r >> 2] | 0) + 28 >> 2] & 15](r, j) | 0;
    k = c[h >> 2] | 0;
    c[h >> 2] = k + 1;
    a[k >> 0] = p;
    k = b + 1 | 0;
    break;
   }
  default:
   k = b;
  }
  a : do if ((e - k | 0) > 1 ? (a[k >> 0] | 0) == 48 : 0) {
   j = k + 1 | 0;
   switch (a[j >> 0] | 0) {
   case 88:
   case 120:
    break;
   default:
    break a;
   }
   p = zb[c[(c[r >> 2] | 0) + 28 >> 2] & 15](r, 48) | 0;
   o = c[h >> 2] | 0;
   c[h >> 2] = o + 1;
   a[o >> 0] = p;
   o = zb[c[(c[r >> 2] | 0) + 28 >> 2] & 15](r, a[j >> 0] | 0) | 0;
   p = c[h >> 2] | 0;
   c[h >> 2] = p + 1;
   a[p >> 0] = o;
   k = k + 2 | 0;
  } while (0);
  if ((k | 0) != (e | 0) ? (n = e + -1 | 0, k >>> 0 < n >>> 0) : 0) {
   l = k;
   j = n;
   do {
    p = a[l >> 0] | 0;
    a[l >> 0] = a[j >> 0] | 0;
    a[j >> 0] = p;
    l = l + 1 | 0;
    j = j + -1 | 0;
   } while (l >>> 0 < j >>> 0);
  }
  m = tb[c[(c[m >> 2] | 0) + 16 >> 2] & 63](m) | 0;
  n = s + 8 | 0;
  o = s + 1 | 0;
  if (k >>> 0 < e >>> 0) {
   j = 0;
   l = 0;
   p = k;
   while (1) {
    u = a[((a[s >> 0] & 1) == 0 ? o : c[n >> 2] | 0) + l >> 0] | 0;
    if (u << 24 >> 24 != 0 & (j | 0) == (u << 24 >> 24 | 0)) {
     u = c[h >> 2] | 0;
     c[h >> 2] = u + 1;
     a[u >> 0] = m;
     u = a[s >> 0] | 0;
     j = 0;
     l = (l >>> 0 < (((u & 1) == 0 ? (u & 255) >>> 1 : c[q >> 2] | 0) + -1 | 0) >>> 0 & 1) + l | 0;
    }
    v = zb[c[(c[r >> 2] | 0) + 28 >> 2] & 15](r, a[p >> 0] | 0) | 0;
    u = c[h >> 2] | 0;
    c[h >> 2] = u + 1;
    a[u >> 0] = v;
    p = p + 1 | 0;
    if (p >>> 0 >= e >>> 0) break; else j = j + 1 | 0;
   }
  }
  j = f + (k - b) | 0;
  k = c[h >> 2] | 0;
  if ((j | 0) != (k | 0)) {
   k = k + -1 | 0;
   if (j >>> 0 < k >>> 0) do {
    v = a[j >> 0] | 0;
    a[j >> 0] = a[k >> 0] | 0;
    a[k >> 0] = v;
    j = j + 1 | 0;
    k = k + -1 | 0;
   } while (j >>> 0 < k >>> 0);
   j = c[h >> 2] | 0;
  }
 } else {
  xb[c[(c[r >> 2] | 0) + 32 >> 2] & 7](r, b, e, f) | 0;
  j = f + (e - b) | 0;
  c[h >> 2] = j;
 }
 c[g >> 2] = (d | 0) == (e | 0) ? j : f + (d - b) | 0;
 Xe(s);
 i = t;
 return;
}

function pl(b, d, e, f, g, h, j, k) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 16 | 0;
 q = s;
 a : do if ((e | 0) == (f | 0)) l = f; else {
  l = e;
  while (1) {
   if (!(a[l >> 0] | 0)) break a;
   l = l + 1 | 0;
   if ((l | 0) == (f | 0)) {
    l = f;
    break;
   }
  }
 } while (0);
 c[k >> 2] = h;
 c[g >> 2] = e;
 o = j;
 p = b + 8 | 0;
 b : do if ((h | 0) == (j | 0) | (e | 0) == (f | 0)) r = 29; else {
  c : while (1) {
   n = d;
   m = c[n + 4 >> 2] | 0;
   b = q;
   c[b >> 2] = c[n >> 2];
   c[b + 4 >> 2] = m;
   b = l;
   m = _c(c[p >> 2] | 0) | 0;
   n = kd(h, g, b - e | 0, o - h >> 2, d) | 0;
   if (m) _c(m) | 0;
   switch (n | 0) {
   case 0:
    {
     e = 2;
     break b;
    }
   case -1:
    break c;
   default:
    {}
   }
   h = (c[k >> 2] | 0) + (n << 2) | 0;
   c[k >> 2] = h;
   if ((h | 0) == (j | 0)) {
    r = 19;
    break;
   }
   e = c[g >> 2] | 0;
   if ((l | 0) == (f | 0)) l = f; else {
    l = _c(c[p >> 2] | 0) | 0;
    e = id(h, e, 1, d) | 0;
    if (l) _c(l) | 0;
    if (e) {
     e = 2;
     break b;
    }
    c[k >> 2] = (c[k >> 2] | 0) + 4;
    e = (c[g >> 2] | 0) + 1 | 0;
    c[g >> 2] = e;
    d : do if ((e | 0) == (f | 0)) l = f; else {
     l = e;
     while (1) {
      if (!(a[l >> 0] | 0)) break d;
      l = l + 1 | 0;
      if ((l | 0) == (f | 0)) {
       l = f;
       break;
      }
     }
    } while (0);
    h = c[k >> 2] | 0;
   }
   if ((h | 0) == (j | 0) | (e | 0) == (f | 0)) {
    r = 29;
    break b;
   }
  }
  if ((r | 0) == 19) {
   e = c[g >> 2] | 0;
   r = 29;
   break;
  }
  c[k >> 2] = h;
  e : do if ((e | 0) != (c[g >> 2] | 0)) {
   f : while (1) {
    l = _c(c[p >> 2] | 0) | 0;
    h = id(h, e, b - e | 0, q) | 0;
    if (l) _c(l) | 0;
    switch (h | 0) {
    case -1:
     {
      r = 13;
      break f;
     }
    case -2:
     {
      r = 14;
      break f;
     }
    case 0:
     {
      e = e + 1 | 0;
      break;
     }
    default:
     e = e + h | 0;
    }
    h = (c[k >> 2] | 0) + 4 | 0;
    c[k >> 2] = h;
    if ((e | 0) == (c[g >> 2] | 0)) break e;
   }
   if ((r | 0) == 13) {
    c[g >> 2] = e;
    e = 2;
    break b;
   } else if ((r | 0) == 14) {
    c[g >> 2] = e;
    e = 1;
    break b;
   }
  } while (0);
  c[g >> 2] = e;
  e = (e | 0) != (f | 0) & 1;
 } while (0);
 if ((r | 0) == 29) e = (e | 0) != (f | 0) & 1;
 i = s;
 return e | 0;
}

function ol(b, d, e, f, g, h, j, k) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 s = i;
 i = i + 16 | 0;
 q = s;
 o = s + 8 | 0;
 a : do if ((e | 0) == (f | 0)) l = f; else {
  l = e;
  while (1) {
   if (!(c[l >> 2] | 0)) break a;
   l = l + 4 | 0;
   if ((l | 0) == (f | 0)) {
    l = f;
    break;
   }
  }
 } while (0);
 c[k >> 2] = h;
 c[g >> 2] = e;
 n = j;
 p = b + 8 | 0;
 b : do if ((h | 0) == (j | 0) | (e | 0) == (f | 0)) r = 29; else {
  c : while (1) {
   t = d;
   m = c[t + 4 >> 2] | 0;
   b = q;
   c[b >> 2] = c[t >> 2];
   c[b + 4 >> 2] = m;
   b = _c(c[p >> 2] | 0) | 0;
   m = od(h, g, l - e >> 2, n - h | 0, d) | 0;
   if (b) _c(b) | 0;
   switch (m | 0) {
   case 0:
    {
     e = 1;
     break b;
    }
   case -1:
    break c;
   default:
    {}
   }
   h = (c[k >> 2] | 0) + m | 0;
   c[k >> 2] = h;
   if ((h | 0) == (j | 0)) {
    r = 15;
    break;
   }
   if ((l | 0) == (f | 0)) {
    e = c[g >> 2] | 0;
    l = f;
   } else {
    e = _c(c[p >> 2] | 0) | 0;
    h = nd(o, 0, d) | 0;
    if (e) _c(e) | 0;
    if ((h | 0) == -1) {
     e = 2;
     break b;
    }
    if (h >>> 0 > (n - (c[k >> 2] | 0) | 0) >>> 0) {
     e = 1;
     break b;
    }
    if (h) {
     e = o;
     while (1) {
      m = a[e >> 0] | 0;
      t = c[k >> 2] | 0;
      c[k >> 2] = t + 1;
      a[t >> 0] = m;
      h = h + -1 | 0;
      if (!h) break; else e = e + 1 | 0;
     }
    }
    e = (c[g >> 2] | 0) + 4 | 0;
    c[g >> 2] = e;
    d : do if ((e | 0) == (f | 0)) l = f; else {
     l = e;
     while (1) {
      if (!(c[l >> 2] | 0)) break d;
      l = l + 4 | 0;
      if ((l | 0) == (f | 0)) {
       l = f;
       break;
      }
     }
    } while (0);
    h = c[k >> 2] | 0;
   }
   if ((h | 0) == (j | 0) | (e | 0) == (f | 0)) {
    r = 29;
    break b;
   }
  }
  if ((r | 0) == 15) {
   e = c[g >> 2] | 0;
   r = 29;
   break;
  }
  c[k >> 2] = h;
  e : do if ((e | 0) != (c[g >> 2] | 0)) do {
   t = c[e >> 2] | 0;
   l = _c(c[p >> 2] | 0) | 0;
   h = nd(h, t, q) | 0;
   if (l) _c(l) | 0;
   if ((h | 0) == -1) break e;
   h = (c[k >> 2] | 0) + h | 0;
   c[k >> 2] = h;
   e = e + 4 | 0;
  } while ((e | 0) != (c[g >> 2] | 0)); while (0);
  c[g >> 2] = e;
  e = 2;
 } while (0);
 if ((r | 0) == 29) e = (e | 0) != (f | 0) & 1;
 i = s;
 return e | 0;
}

function kh(b, e, f, g, h, i, j, k, l, m, n, o) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 n = n | 0;
 o = o | 0;
 var p = 0, q = 0;
 a : do if (b << 24 >> 24 == i << 24 >> 24) if (a[e >> 0] | 0) {
  a[e >> 0] = 0;
  f = c[h >> 2] | 0;
  c[h >> 2] = f + 1;
  a[f >> 0] = 46;
  f = a[k >> 0] | 0;
  if ((((f & 1) == 0 ? (f & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) != 0 ? (p = c[m >> 2] | 0, (p - l | 0) < 160) : 0) {
   l = c[n >> 2] | 0;
   c[m >> 2] = p + 4;
   c[p >> 2] = l;
   p = 0;
  } else p = 0;
 } else p = -1; else {
  if (b << 24 >> 24 == j << 24 >> 24 ? (j = a[k >> 0] | 0, (((j & 1) == 0 ? (j & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) != 0) : 0) {
   if (!(a[e >> 0] | 0)) {
    p = -1;
    break;
   }
   p = c[m >> 2] | 0;
   if ((p - l | 0) >= 160) {
    p = 0;
    break;
   }
   l = c[n >> 2] | 0;
   c[m >> 2] = p + 4;
   c[p >> 2] = l;
   c[n >> 2] = 0;
   p = 0;
   break;
  }
  i = o + 32 | 0;
  p = o;
  while (1) {
   if ((a[p >> 0] | 0) == b << 24 >> 24) break;
   p = p + 1 | 0;
   if ((p | 0) == (i | 0)) {
    p = i;
    break;
   }
  }
  i = p - o | 0;
  if ((i | 0) > 31) p = -1; else {
   j = a[19840 + i >> 0] | 0;
   switch (i | 0) {
   case 24:
   case 25:
    {
     p = c[h >> 2] | 0;
     if ((p | 0) != (g | 0) ? (d[p + -1 >> 0] & 95 | 0) != (d[f >> 0] & 127 | 0) : 0) {
      p = -1;
      break a;
     }
     c[h >> 2] = p + 1;
     a[p >> 0] = j;
     p = 0;
     break a;
    }
   case 23:
   case 22:
    {
     a[f >> 0] = 80;
     p = c[h >> 2] | 0;
     c[h >> 2] = p + 1;
     a[p >> 0] = j;
     p = 0;
     break a;
    }
   default:
    {
     p = j & 95;
     if ((((p | 0) == (a[f >> 0] | 0) ? (a[f >> 0] = p | 128, (a[e >> 0] | 0) != 0) : 0) ? (a[e >> 0] = 0, f = a[k >> 0] | 0, (((f & 1) == 0 ? (f & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) != 0) : 0) ? (q = c[m >> 2] | 0, (q - l | 0) < 160) : 0) {
      l = c[n >> 2] | 0;
      c[m >> 2] = q + 4;
      c[q >> 2] = l;
     }
     m = c[h >> 2] | 0;
     c[h >> 2] = m + 1;
     a[m >> 0] = j;
     if ((i | 0) > 21) {
      p = 0;
      break a;
     }
     c[n >> 2] = (c[n >> 2] | 0) + 1;
     p = 0;
     break a;
    }
   }
  }
 } while (0);
 return p | 0;
}

function fk(b, d, e, f, g, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = +j;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0;
 F = i;
 i = i + 992 | 0;
 q = F + 8 | 0;
 l = F;
 b = F + 888 | 0;
 m = F + 880 | 0;
 k = F + 480 | 0;
 y = F + 76 | 0;
 v = F + 884 | 0;
 s = F + 72 | 0;
 w = F + 68 | 0;
 C = F + 56 | 0;
 E = F + 44 | 0;
 D = F + 32 | 0;
 o = F + 28 | 0;
 p = F + 80 | 0;
 u = F + 24 | 0;
 t = F + 20 | 0;
 r = F + 16 | 0;
 c[m >> 2] = b;
 h[q >> 3] = j;
 b = Id(b, 100, 21323, q) | 0;
 if (b >>> 0 > 99) {
  b = Vg() | 0;
  h[l >> 3] = j;
  b = Nm(m, b, 21323, l) | 0;
  k = c[m >> 2] | 0;
  if (!k) zc();
  l = ke(b << 2) | 0;
  if (!l) zc(); else {
   G = l;
   H = k;
   x = l;
   A = b;
  }
 } else {
  G = 0;
  H = 0;
  x = k;
  A = b;
 }
 b = tf(f) | 0;
 c[y >> 2] = b;
 n = Fk(y, 9320) | 0;
 l = c[m >> 2] | 0;
 xb[c[(c[n >> 2] | 0) + 48 >> 2] & 7](n, l, l + A | 0, x) | 0;
 if (!A) m = 0; else m = (a[c[m >> 2] >> 0] | 0) == 45;
 c[C >> 2] = 0;
 c[C + 4 >> 2] = 0;
 c[C + 8 >> 2] = 0;
 c[E >> 2] = 0;
 c[E + 4 >> 2] = 0;
 c[E + 8 >> 2] = 0;
 c[D >> 2] = 0;
 c[D + 4 >> 2] = 0;
 c[D + 8 >> 2] = 0;
 gk(e, m, y, v, s, w, C, E, D, o);
 l = c[o >> 2] | 0;
 if ((A | 0) > (l | 0)) {
  e = a[D >> 0] | 0;
  k = a[E >> 0] | 0;
  k = (A - l << 1 | 1) + l + ((e & 1) == 0 ? (e & 255) >>> 1 : c[D + 4 >> 2] | 0) + ((k & 1) == 0 ? (k & 255) >>> 1 : c[E + 4 >> 2] | 0) | 0;
 } else {
  e = a[D >> 0] | 0;
  k = a[E >> 0] | 0;
  k = l + 2 + ((e & 1) == 0 ? (e & 255) >>> 1 : c[D + 4 >> 2] | 0) + ((k & 1) == 0 ? (k & 255) >>> 1 : c[E + 4 >> 2] | 0) | 0;
 }
 if (k >>> 0 > 100) {
  k = ke(k << 2) | 0;
  if (!k) zc(); else {
   B = k;
   z = k;
  }
 } else {
  B = 0;
  z = p;
 }
 hk(z, u, t, c[f + 4 >> 2] | 0, x, x + (A << 2) | 0, n, m, v, c[s >> 2] | 0, c[w >> 2] | 0, C, E, D, l);
 c[r >> 2] = c[d >> 2];
 d = c[u >> 2] | 0;
 k = c[t >> 2] | 0;
 c[q >> 2] = c[r >> 2];
 k = Om(q, z, d, k, f, g) | 0;
 if (B) {
  le(B);
  b = c[y >> 2] | 0;
 }
 gf(D);
 gf(E);
 Xe(C);
 co(b) | 0;
 if (G) le(G);
 if (H) le(H);
 i = F;
 return k | 0;
}

function $j(b, d, e, f, g, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = +j;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0;
 F = i;
 i = i + 384 | 0;
 q = F + 8 | 0;
 l = F;
 b = F + 284 | 0;
 m = F + 72 | 0;
 k = F + 184 | 0;
 y = F + 68 | 0;
 v = F + 80 | 0;
 s = F + 77 | 0;
 w = F + 76 | 0;
 C = F + 56 | 0;
 E = F + 44 | 0;
 D = F + 32 | 0;
 o = F + 28 | 0;
 p = F + 84 | 0;
 u = F + 24 | 0;
 t = F + 20 | 0;
 r = F + 16 | 0;
 c[m >> 2] = b;
 h[q >> 3] = j;
 b = Id(b, 100, 21323, q) | 0;
 if (b >>> 0 > 99) {
  b = Vg() | 0;
  h[l >> 3] = j;
  b = Nm(m, b, 21323, l) | 0;
  k = c[m >> 2] | 0;
  if (!k) zc();
  l = ke(b) | 0;
  if (!l) zc(); else {
   G = l;
   H = k;
   x = l;
   A = b;
  }
 } else {
  G = 0;
  H = 0;
  x = k;
  A = b;
 }
 b = tf(f) | 0;
 c[y >> 2] = b;
 n = Fk(y, 9328) | 0;
 l = c[m >> 2] | 0;
 xb[c[(c[n >> 2] | 0) + 32 >> 2] & 7](n, l, l + A | 0, x) | 0;
 if (!A) m = 0; else m = (a[c[m >> 2] >> 0] | 0) == 45;
 c[C >> 2] = 0;
 c[C + 4 >> 2] = 0;
 c[C + 8 >> 2] = 0;
 c[E >> 2] = 0;
 c[E + 4 >> 2] = 0;
 c[E + 8 >> 2] = 0;
 c[D >> 2] = 0;
 c[D + 4 >> 2] = 0;
 c[D + 8 >> 2] = 0;
 ak(e, m, y, v, s, w, C, E, D, o);
 l = c[o >> 2] | 0;
 if ((A | 0) > (l | 0)) {
  e = a[D >> 0] | 0;
  k = a[E >> 0] | 0;
  k = (A - l << 1 | 1) + l + ((e & 1) == 0 ? (e & 255) >>> 1 : c[D + 4 >> 2] | 0) + ((k & 1) == 0 ? (k & 255) >>> 1 : c[E + 4 >> 2] | 0) | 0;
 } else {
  e = a[D >> 0] | 0;
  k = a[E >> 0] | 0;
  k = l + 2 + ((e & 1) == 0 ? (e & 255) >>> 1 : c[D + 4 >> 2] | 0) + ((k & 1) == 0 ? (k & 255) >>> 1 : c[E + 4 >> 2] | 0) | 0;
 }
 if (k >>> 0 > 100) {
  k = ke(k) | 0;
  if (!k) zc(); else {
   B = k;
   z = k;
  }
 } else {
  B = 0;
  z = p;
 }
 bk(z, u, t, c[f + 4 >> 2] | 0, x, x + A | 0, n, m, v, a[s >> 0] | 0, a[w >> 0] | 0, C, E, D, l);
 c[r >> 2] = c[d >> 2];
 d = c[u >> 2] | 0;
 k = c[t >> 2] | 0;
 c[q >> 2] = c[r >> 2];
 k = Nb(q, z, d, k, f, g) | 0;
 if (B) {
  le(B);
  b = c[y >> 2] | 0;
 }
 Xe(D);
 Xe(E);
 Xe(C);
 co(b) | 0;
 if (G) le(G);
 if (H) le(H);
 i = F;
 return k | 0;
}

function Ki(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0;
 a = c[b >> 2] | 0;
 do if (a) {
  g = c[a + 12 >> 2] | 0;
  if ((g | 0) == (c[a + 16 >> 2] | 0)) a = tb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = c[g >> 2] | 0;
  if ((a | 0) == -1) {
   c[b >> 2] = 0;
   h = 1;
   break;
  } else {
   h = (c[b >> 2] | 0) == 0;
   break;
  }
 } else h = 1; while (0);
 g = c[d >> 2] | 0;
 do if (g) {
  a = c[g + 12 >> 2] | 0;
  if ((a | 0) == (c[g + 16 >> 2] | 0)) a = tb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else a = c[a >> 2] | 0;
  if ((a | 0) != -1) if (h) {
   i = g;
   j = 17;
   break;
  } else {
   j = 16;
   break;
  } else {
   c[d >> 2] = 0;
   j = 14;
   break;
  }
 } else j = 14; while (0);
 if ((j | 0) == 14) if (h) j = 16; else {
  i = 0;
  j = 17;
 }
 a : do if ((j | 0) == 16) c[e >> 2] = c[e >> 2] | 6; else if ((j | 0) == 17) {
  a = c[b >> 2] | 0;
  g = c[a + 12 >> 2] | 0;
  if ((g | 0) == (c[a + 16 >> 2] | 0)) a = tb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = c[g >> 2] | 0;
  if ((mb[c[(c[f >> 2] | 0) + 52 >> 2] & 31](f, a, 0) | 0) << 24 >> 24 != 37) {
   c[e >> 2] = c[e >> 2] | 4;
   break;
  }
  a = c[b >> 2] | 0;
  g = a + 12 | 0;
  h = c[g >> 2] | 0;
  if ((h | 0) == (c[a + 16 >> 2] | 0)) {
   tb[c[(c[a >> 2] | 0) + 40 >> 2] & 63](a) | 0;
   a = c[b >> 2] | 0;
   if (!a) g = 1; else j = 25;
  } else {
   c[g >> 2] = h + 4;
   j = 25;
  }
  do if ((j | 0) == 25) {
   g = c[a + 12 >> 2] | 0;
   if ((g | 0) == (c[a + 16 >> 2] | 0)) a = tb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = c[g >> 2] | 0;
   if ((a | 0) == -1) {
    c[b >> 2] = 0;
    g = 1;
    break;
   } else {
    g = (c[b >> 2] | 0) == 0;
    break;
   }
  } while (0);
  do if (i) {
   a = c[i + 12 >> 2] | 0;
   if ((a | 0) == (c[i + 16 >> 2] | 0)) a = tb[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0; else a = c[a >> 2] | 0;
   if ((a | 0) != -1) if (g) break a; else break; else {
    c[d >> 2] = 0;
    j = 37;
    break;
   }
  } else j = 37; while (0);
  if ((j | 0) == 37 ? !g : 0) break;
  c[e >> 2] = c[e >> 2] | 2;
 } while (0);
 return;
}

function nh(b, e, f, g, h, i, j, k, l, m, n, o) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 n = n | 0;
 o = o | 0;
 var p = 0, q = 0;
 a : do if ((b | 0) == (i | 0)) if (a[e >> 0] | 0) {
  a[e >> 0] = 0;
  f = c[h >> 2] | 0;
  c[h >> 2] = f + 1;
  a[f >> 0] = 46;
  f = a[k >> 0] | 0;
  if ((((f & 1) == 0 ? (f & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) != 0 ? (p = c[m >> 2] | 0, (p - l | 0) < 160) : 0) {
   l = c[n >> 2] | 0;
   c[m >> 2] = p + 4;
   c[p >> 2] = l;
   p = 0;
  } else p = 0;
 } else p = -1; else {
  if ((b | 0) == (j | 0) ? (j = a[k >> 0] | 0, (((j & 1) == 0 ? (j & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) != 0) : 0) {
   if (!(a[e >> 0] | 0)) {
    p = -1;
    break;
   }
   p = c[m >> 2] | 0;
   if ((p - l | 0) >= 160) {
    p = 0;
    break;
   }
   l = c[n >> 2] | 0;
   c[m >> 2] = p + 4;
   c[p >> 2] = l;
   c[n >> 2] = 0;
   p = 0;
   break;
  }
  i = o + 128 | 0;
  p = o;
  while (1) {
   if ((c[p >> 2] | 0) == (b | 0)) break;
   p = p + 4 | 0;
   if ((p | 0) == (i | 0)) {
    p = i;
    break;
   }
  }
  i = p - o | 0;
  p = i >> 2;
  if ((i | 0) <= 124) {
   j = a[19840 + p >> 0] | 0;
   switch (p | 0) {
   case 24:
   case 25:
    {
     p = c[h >> 2] | 0;
     if ((p | 0) != (g | 0) ? (d[p + -1 >> 0] & 95 | 0) != (d[f >> 0] & 127 | 0) : 0) {
      p = -1;
      break a;
     }
     c[h >> 2] = p + 1;
     a[p >> 0] = j;
     p = 0;
     break a;
    }
   case 23:
   case 22:
    {
     a[f >> 0] = 80;
     break;
    }
   default:
    {
     p = j & 95;
     if ((((p | 0) == (a[f >> 0] | 0) ? (a[f >> 0] = p | 128, (a[e >> 0] | 0) != 0) : 0) ? (a[e >> 0] = 0, f = a[k >> 0] | 0, (((f & 1) == 0 ? (f & 255) >>> 1 : c[k + 4 >> 2] | 0) | 0) != 0) : 0) ? (q = c[m >> 2] | 0, (q - l | 0) < 160) : 0) {
      l = c[n >> 2] | 0;
      c[m >> 2] = q + 4;
      c[q >> 2] = l;
     }
    }
   }
   m = c[h >> 2] | 0;
   c[h >> 2] = m + 1;
   a[m >> 0] = j;
   if ((i | 0) > 84) p = 0; else {
    c[n >> 2] = (c[n >> 2] | 0) + 1;
    p = 0;
   }
  } else p = -1;
 } while (0);
 return p | 0;
}

function Fi(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0;
 a : while (1) {
  a = c[b >> 2] | 0;
  do if (a) {
   g = c[a + 12 >> 2] | 0;
   if ((g | 0) == (c[a + 16 >> 2] | 0)) a = tb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = c[g >> 2] | 0;
   if ((a | 0) == -1) {
    c[b >> 2] = 0;
    h = 1;
    break;
   } else {
    h = (c[b >> 2] | 0) == 0;
    break;
   }
  } else h = 1; while (0);
  g = c[d >> 2] | 0;
  do if (g) {
   a = c[g + 12 >> 2] | 0;
   if ((a | 0) == (c[g + 16 >> 2] | 0)) a = tb[c[(c[g >> 2] | 0) + 36 >> 2] & 63](g) | 0; else a = c[a >> 2] | 0;
   if ((a | 0) != -1) if (h) {
    h = g;
    break;
   } else {
    h = g;
    break a;
   } else {
    c[d >> 2] = 0;
    i = 15;
    break;
   }
  } else i = 15; while (0);
  if ((i | 0) == 15) {
   i = 0;
   if (h) {
    h = 0;
    break;
   } else h = 0;
  }
  a = c[b >> 2] | 0;
  g = c[a + 12 >> 2] | 0;
  if ((g | 0) == (c[a + 16 >> 2] | 0)) a = tb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = c[g >> 2] | 0;
  if (!(mb[c[(c[f >> 2] | 0) + 12 >> 2] & 31](f, 8192, a) | 0)) break;
  a = c[b >> 2] | 0;
  g = a + 12 | 0;
  h = c[g >> 2] | 0;
  if ((h | 0) == (c[a + 16 >> 2] | 0)) {
   tb[c[(c[a >> 2] | 0) + 40 >> 2] & 63](a) | 0;
   continue;
  } else {
   c[g >> 2] = h + 4;
   continue;
  }
 }
 a = c[b >> 2] | 0;
 do if (a) {
  g = c[a + 12 >> 2] | 0;
  if ((g | 0) == (c[a + 16 >> 2] | 0)) a = tb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = c[g >> 2] | 0;
  if ((a | 0) == -1) {
   c[b >> 2] = 0;
   g = 1;
   break;
  } else {
   g = (c[b >> 2] | 0) == 0;
   break;
  }
 } else g = 1; while (0);
 do if (h) {
  a = c[h + 12 >> 2] | 0;
  if ((a | 0) == (c[h + 16 >> 2] | 0)) a = tb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else a = c[a >> 2] | 0;
  if ((a | 0) != -1) if (g) break; else {
   i = 39;
   break;
  } else {
   c[d >> 2] = 0;
   i = 37;
   break;
  }
 } else i = 37; while (0);
 if ((i | 0) == 37 ? g : 0) i = 39;
 if ((i | 0) == 39) c[e >> 2] = c[e >> 2] | 2;
 return;
}

function ck(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 D = i;
 i = i + 176 | 0;
 p = D + 56 | 0;
 x = D + 52 | 0;
 v = D + 64 | 0;
 s = D + 61 | 0;
 w = D + 60 | 0;
 A = D + 40 | 0;
 C = D + 28 | 0;
 B = D + 16 | 0;
 l = D + 12 | 0;
 o = D + 68 | 0;
 u = D + 8 | 0;
 t = D + 4 | 0;
 q = D;
 b = tf(f) | 0;
 c[x >> 2] = b;
 r = Fk(x, 9328) | 0;
 n = a[h >> 0] | 0;
 j = (n & 1) == 0;
 k = h + 4 | 0;
 if (!((j ? (n & 255) >>> 1 : c[k >> 2] | 0) | 0)) n = 0; else {
  n = a[(j ? h + 1 | 0 : c[h + 8 >> 2] | 0) >> 0] | 0;
  n = n << 24 >> 24 == (zb[c[(c[r >> 2] | 0) + 28 >> 2] & 15](r, 45) | 0) << 24 >> 24;
 }
 c[A >> 2] = 0;
 c[A + 4 >> 2] = 0;
 c[A + 8 >> 2] = 0;
 c[C >> 2] = 0;
 c[C + 4 >> 2] = 0;
 c[C + 8 >> 2] = 0;
 c[B >> 2] = 0;
 c[B + 4 >> 2] = 0;
 c[B + 8 >> 2] = 0;
 ak(e, n, x, v, s, w, A, C, B, l);
 m = a[h >> 0] | 0;
 e = c[k >> 2] | 0;
 j = (m & 1) == 0 ? (m & 255) >>> 1 : e;
 k = c[l >> 2] | 0;
 if ((j | 0) > (k | 0)) {
  E = a[B >> 0] | 0;
  l = a[C >> 0] | 0;
  j = (j - k << 1 | 1) + k + ((E & 1) == 0 ? (E & 255) >>> 1 : c[B + 4 >> 2] | 0) + ((l & 1) == 0 ? (l & 255) >>> 1 : c[C + 4 >> 2] | 0) | 0;
 } else {
  E = a[B >> 0] | 0;
  j = a[C >> 0] | 0;
  j = k + 2 + ((E & 1) == 0 ? (E & 255) >>> 1 : c[B + 4 >> 2] | 0) + ((j & 1) == 0 ? (j & 255) >>> 1 : c[C + 4 >> 2] | 0) | 0;
 }
 if (j >>> 0 > 100) {
  j = ke(j) | 0;
  if (!j) zc(); else {
   z = j;
   y = j;
  }
 } else {
  z = 0;
  y = o;
 }
 E = (m & 1) == 0;
 j = E ? h + 1 | 0 : c[h + 8 >> 2] | 0;
 bk(y, u, t, c[f + 4 >> 2] | 0, j, j + (E ? (m & 255) >>> 1 : e) | 0, r, n, v, a[s >> 0] | 0, a[w >> 0] | 0, A, C, B, k);
 c[q >> 2] = c[d >> 2];
 E = c[u >> 2] | 0;
 j = c[t >> 2] | 0;
 c[p >> 2] = c[q >> 2];
 j = Nb(p, y, E, j, f, g) | 0;
 if (z) {
  le(z);
  b = c[x >> 2] | 0;
 }
 Xe(B);
 Xe(C);
 Xe(A);
 co(b) | 0;
 i = D;
 return j | 0;
}

function ik(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0;
 E = i;
 i = i + 480 | 0;
 p = E + 468 | 0;
 y = E + 464 | 0;
 w = E + 472 | 0;
 t = E + 56 | 0;
 x = E + 52 | 0;
 B = E + 40 | 0;
 D = E + 28 | 0;
 C = E + 16 | 0;
 k = E + 12 | 0;
 o = E + 64 | 0;
 v = E + 8 | 0;
 u = E + 4 | 0;
 q = E;
 b = tf(f) | 0;
 c[y >> 2] = b;
 r = Fk(y, 9320) | 0;
 n = a[h >> 0] | 0;
 j = (n & 1) == 0;
 s = h + 4 | 0;
 if (!((j ? (n & 255) >>> 1 : c[s >> 2] | 0) | 0)) n = 0; else {
  n = c[(j ? s : c[h + 8 >> 2] | 0) >> 2] | 0;
  n = (n | 0) == (zb[c[(c[r >> 2] | 0) + 44 >> 2] & 15](r, 45) | 0);
 }
 c[B >> 2] = 0;
 c[B + 4 >> 2] = 0;
 c[B + 8 >> 2] = 0;
 c[D >> 2] = 0;
 c[D + 4 >> 2] = 0;
 c[D + 8 >> 2] = 0;
 c[C >> 2] = 0;
 c[C + 4 >> 2] = 0;
 c[C + 8 >> 2] = 0;
 gk(e, n, y, w, t, x, B, D, C, k);
 l = a[h >> 0] | 0;
 m = c[s >> 2] | 0;
 j = (l & 1) == 0 ? (l & 255) >>> 1 : m;
 e = c[k >> 2] | 0;
 if ((j | 0) > (e | 0)) {
  F = a[C >> 0] | 0;
  k = a[D >> 0] | 0;
  j = (j - e << 1 | 1) + e + ((F & 1) == 0 ? (F & 255) >>> 1 : c[C + 4 >> 2] | 0) + ((k & 1) == 0 ? (k & 255) >>> 1 : c[D + 4 >> 2] | 0) | 0;
 } else {
  F = a[C >> 0] | 0;
  j = a[D >> 0] | 0;
  j = e + 2 + ((F & 1) == 0 ? (F & 255) >>> 1 : c[C + 4 >> 2] | 0) + ((j & 1) == 0 ? (j & 255) >>> 1 : c[D + 4 >> 2] | 0) | 0;
 }
 if (j >>> 0 > 100) {
  j = ke(j << 2) | 0;
  if (!j) zc(); else {
   A = j;
   z = j;
  }
 } else {
  A = 0;
  z = o;
 }
 F = (l & 1) == 0;
 j = F ? s : c[h + 8 >> 2] | 0;
 hk(z, v, u, c[f + 4 >> 2] | 0, j, j + ((F ? (l & 255) >>> 1 : m) << 2) | 0, r, n, w, c[t >> 2] | 0, c[x >> 2] | 0, B, D, C, e);
 c[q >> 2] = c[d >> 2];
 F = c[v >> 2] | 0;
 j = c[u >> 2] | 0;
 c[p >> 2] = c[q >> 2];
 j = Om(p, z, F, j, f, g) | 0;
 if (A) {
  le(A);
  b = c[y >> 2] | 0;
 }
 gf(C);
 gf(D);
 Xe(B);
 co(b) | 0;
 i = E;
 return j | 0;
}

function En(b, d, e, f, g, h, i, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 var k = 0, l = 0;
 c[e >> 2] = b;
 c[h >> 2] = f;
 l = g;
 if (j & 2) if ((l - f | 0) < 3) b = 1; else {
  c[h >> 2] = f + 1;
  a[f >> 0] = -17;
  k = c[h >> 2] | 0;
  c[h >> 2] = k + 1;
  a[k >> 0] = -69;
  k = c[h >> 2] | 0;
  c[h >> 2] = k + 1;
  a[k >> 0] = -65;
  k = 4;
 } else k = 4;
 a : do if ((k | 0) == 4) {
  b = c[e >> 2] | 0;
  if (b >>> 0 < d >>> 0) while (1) {
   j = c[b >> 2] | 0;
   if (j >>> 0 > i >>> 0 | (j & -2048 | 0) == 55296) {
    b = 2;
    break a;
   }
   do if (j >>> 0 >= 128) {
    if (j >>> 0 < 2048) {
     b = c[h >> 2] | 0;
     if ((l - b | 0) < 2) {
      b = 1;
      break a;
     }
     c[h >> 2] = b + 1;
     a[b >> 0] = j >>> 6 | 192;
     k = c[h >> 2] | 0;
     c[h >> 2] = k + 1;
     a[k >> 0] = j & 63 | 128;
     break;
    }
    b = c[h >> 2] | 0;
    g = l - b | 0;
    if (j >>> 0 < 65536) {
     if ((g | 0) < 3) {
      b = 1;
      break a;
     }
     c[h >> 2] = b + 1;
     a[b >> 0] = j >>> 12 | 224;
     k = c[h >> 2] | 0;
     c[h >> 2] = k + 1;
     a[k >> 0] = j >>> 6 & 63 | 128;
     k = c[h >> 2] | 0;
     c[h >> 2] = k + 1;
     a[k >> 0] = j & 63 | 128;
     break;
    } else {
     if ((g | 0) < 4) {
      b = 1;
      break a;
     }
     c[h >> 2] = b + 1;
     a[b >> 0] = j >>> 18 | 240;
     k = c[h >> 2] | 0;
     c[h >> 2] = k + 1;
     a[k >> 0] = j >>> 12 & 63 | 128;
     k = c[h >> 2] | 0;
     c[h >> 2] = k + 1;
     a[k >> 0] = j >>> 6 & 63 | 128;
     k = c[h >> 2] | 0;
     c[h >> 2] = k + 1;
     a[k >> 0] = j & 63 | 128;
     break;
    }
   } else {
    b = c[h >> 2] | 0;
    if ((l - b | 0) < 1) {
     b = 1;
     break a;
    }
    c[h >> 2] = b + 1;
    a[b >> 0] = j;
   } while (0);
   b = (c[e >> 2] | 0) + 4 | 0;
   c[e >> 2] = b;
   if (b >>> 0 >= d >>> 0) {
    b = 0;
    break;
   }
  } else b = 0;
 } while (0);
 return b | 0;
}

function he(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0.0;
 a : do if (b >>> 0 <= 20) do switch (b | 0) {
 case 9:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   c[a >> 2] = b;
   break a;
  }
 case 10:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   e = a;
   c[e >> 2] = b;
   c[e + 4 >> 2] = ((b | 0) < 0) << 31 >> 31;
   break a;
  }
 case 11:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   e = a;
   c[e >> 2] = b;
   c[e + 4 >> 2] = 0;
   break a;
  }
 case 12:
  {
   e = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   b = e;
   f = c[b >> 2] | 0;
   b = c[b + 4 >> 2] | 0;
   c[d >> 2] = e + 8;
   e = a;
   c[e >> 2] = f;
   c[e + 4 >> 2] = b;
   break a;
  }
 case 13:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   e = (e & 65535) << 16 >> 16;
   f = a;
   c[f >> 2] = e;
   c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;
   break a;
  }
 case 14:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   f = a;
   c[f >> 2] = e & 65535;
   c[f + 4 >> 2] = 0;
   break a;
  }
 case 15:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   e = (e & 255) << 24 >> 24;
   f = a;
   c[f >> 2] = e;
   c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;
   break a;
  }
 case 16:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   f = a;
   c[f >> 2] = e & 255;
   c[f + 4 >> 2] = 0;
   break a;
  }
 case 17:
  {
   f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   g = +h[f >> 3];
   c[d >> 2] = f + 8;
   h[a >> 3] = g;
   break a;
  }
 case 18:
  {
   f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   g = +h[f >> 3];
   c[d >> 2] = f + 8;
   h[a >> 3] = g;
   break a;
  }
 default:
  break a;
 } while (0); while (0);
 return;
}

function _d(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 i = a + 4 | 0;
 e = c[i >> 2] | 0;
 j = a + 100 | 0;
 if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
  c[i >> 2] = e + 1;
  e = d[e >> 0] | 0;
 } else e = Rc(a) | 0;
 switch (e | 0) {
 case 43:
 case 45:
  {
   f = (e | 0) == 45 & 1;
   e = c[i >> 2] | 0;
   if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
    c[i >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = Rc(a) | 0;
   if ((b | 0) != 0 & (e + -48 | 0) >>> 0 > 9 ? (c[j >> 2] | 0) != 0 : 0) {
    c[i >> 2] = (c[i >> 2] | 0) + -1;
    h = f;
   } else h = f;
   break;
  }
 default:
  h = 0;
 }
 if ((e + -48 | 0) >>> 0 > 9) if (!(c[j >> 2] | 0)) {
  f = -2147483648;
  e = 0;
 } else {
  c[i >> 2] = (c[i >> 2] | 0) + -1;
  f = -2147483648;
  e = 0;
 } else {
  f = 0;
  do {
   f = e + -48 + (f * 10 | 0) | 0;
   e = c[i >> 2] | 0;
   if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
    c[i >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = Rc(a) | 0;
  } while ((e + -48 | 0) >>> 0 < 10 & (f | 0) < 214748364);
  b = ((f | 0) < 0) << 31 >> 31;
  if ((e + -48 | 0) >>> 0 < 10) {
   do {
    b = so(f | 0, b | 0, 10, 0) | 0;
    f = D;
    e = io(e | 0, ((e | 0) < 0) << 31 >> 31 | 0, -48, -1) | 0;
    f = io(e | 0, D | 0, b | 0, f | 0) | 0;
    b = D;
    e = c[i >> 2] | 0;
    if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
     c[i >> 2] = e + 1;
     e = d[e >> 0] | 0;
    } else e = Rc(a) | 0;
   } while ((e + -48 | 0) >>> 0 < 10 & ((b | 0) < 21474836 | (b | 0) == 21474836 & f >>> 0 < 2061584302));
   g = f;
  } else g = f;
  if ((e + -48 | 0) >>> 0 < 10) do {
   e = c[i >> 2] | 0;
   if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
    c[i >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = Rc(a) | 0;
  } while ((e + -48 | 0) >>> 0 < 10);
  if (c[j >> 2] | 0) c[i >> 2] = (c[i >> 2] | 0) + -1;
  a = (h | 0) != 0;
  e = go(0, 0, g | 0, b | 0) | 0;
  f = a ? D : b;
  e = a ? e : g;
 }
 D = f;
 return e | 0;
}

function li(a, b, e, f, g) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0;
 a = c[b >> 2] | 0;
 do if (a) {
  if ((c[a + 12 >> 2] | 0) == (c[a + 16 >> 2] | 0)) if ((tb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1) {
   c[b >> 2] = 0;
   a = 0;
   break;
  } else {
   a = c[b >> 2] | 0;
   break;
  }
 } else a = 0; while (0);
 h = (a | 0) == 0;
 a = c[e >> 2] | 0;
 do if (a) {
  if ((c[a + 12 >> 2] | 0) == (c[a + 16 >> 2] | 0) ? (tb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   j = 11;
   break;
  }
  if (h) {
   i = a;
   j = 13;
  } else j = 12;
 } else j = 11; while (0);
 if ((j | 0) == 11) if (h) j = 12; else {
  i = 0;
  j = 13;
 }
 a : do if ((j | 0) == 12) c[f >> 2] = c[f >> 2] | 6; else if ((j | 0) == 13) {
  a = c[b >> 2] | 0;
  h = c[a + 12 >> 2] | 0;
  if ((h | 0) == (c[a + 16 >> 2] | 0)) a = tb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0; else a = d[h >> 0] | 0;
  if ((mb[c[(c[g >> 2] | 0) + 36 >> 2] & 31](g, a & 255, 0) | 0) << 24 >> 24 != 37) {
   c[f >> 2] = c[f >> 2] | 4;
   break;
  }
  a = c[b >> 2] | 0;
  h = a + 12 | 0;
  g = c[h >> 2] | 0;
  if ((g | 0) == (c[a + 16 >> 2] | 0)) {
   tb[c[(c[a >> 2] | 0) + 40 >> 2] & 63](a) | 0;
   a = c[b >> 2] | 0;
   if (!a) a = 0; else j = 21;
  } else {
   c[h >> 2] = g + 1;
   j = 21;
  }
  do if ((j | 0) == 21) if ((c[a + 12 >> 2] | 0) == (c[a + 16 >> 2] | 0)) if ((tb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1) {
   c[b >> 2] = 0;
   a = 0;
   break;
  } else {
   a = c[b >> 2] | 0;
   break;
  } while (0);
  a = (a | 0) == 0;
  do if (i) {
   if ((c[i + 12 >> 2] | 0) == (c[i + 16 >> 2] | 0) ? (tb[c[(c[i >> 2] | 0) + 36 >> 2] & 63](i) | 0) == -1 : 0) {
    c[e >> 2] = 0;
    j = 30;
    break;
   }
   if (a) break a;
  } else j = 30; while (0);
  if ((j | 0) == 30 ? !a : 0) break;
  c[f >> 2] = c[f >> 2] | 2;
 } while (0);
 return;
}

function gi(a, e, f, g, h) {
 a = a | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0;
 j = h + 8 | 0;
 a : while (1) {
  h = c[e >> 2] | 0;
  do if (h) {
   if ((c[h + 12 >> 2] | 0) == (c[h + 16 >> 2] | 0)) if ((tb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0) == -1) {
    c[e >> 2] = 0;
    h = 0;
    break;
   } else {
    h = c[e >> 2] | 0;
    break;
   }
  } else h = 0; while (0);
  h = (h | 0) == 0;
  a = c[f >> 2] | 0;
  do if (a) {
   if ((c[a + 12 >> 2] | 0) != (c[a + 16 >> 2] | 0)) if (h) break; else break a;
   if ((tb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) != -1) if (h) break; else break a; else {
    c[f >> 2] = 0;
    k = 12;
    break;
   }
  } else k = 12; while (0);
  if ((k | 0) == 12) {
   k = 0;
   if (h) {
    a = 0;
    break;
   } else a = 0;
  }
  h = c[e >> 2] | 0;
  i = c[h + 12 >> 2] | 0;
  if ((i | 0) == (c[h + 16 >> 2] | 0)) h = tb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0; else h = d[i >> 0] | 0;
  if ((h & 255) << 24 >> 24 <= -1) break;
  if (!(b[(c[j >> 2] | 0) + (h << 24 >> 24 << 1) >> 1] & 8192)) break;
  h = c[e >> 2] | 0;
  a = h + 12 | 0;
  i = c[a >> 2] | 0;
  if ((i | 0) == (c[h + 16 >> 2] | 0)) {
   tb[c[(c[h >> 2] | 0) + 40 >> 2] & 63](h) | 0;
   continue;
  } else {
   c[a >> 2] = i + 1;
   continue;
  }
 }
 h = c[e >> 2] | 0;
 do if (h) {
  if ((c[h + 12 >> 2] | 0) == (c[h + 16 >> 2] | 0)) if ((tb[c[(c[h >> 2] | 0) + 36 >> 2] & 63](h) | 0) == -1) {
   c[e >> 2] = 0;
   h = 0;
   break;
  } else {
   h = c[e >> 2] | 0;
   break;
  }
 } else h = 0; while (0);
 h = (h | 0) == 0;
 do if (a) {
  if ((c[a + 12 >> 2] | 0) == (c[a + 16 >> 2] | 0) ? (tb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1 : 0) {
   c[f >> 2] = 0;
   k = 32;
   break;
  }
  if (!h) k = 33;
 } else k = 32; while (0);
 if ((k | 0) == 32 ? h : 0) k = 33;
 if ((k | 0) == 33) c[g >> 2] = c[g >> 2] | 2;
 return;
}

function Xj(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 s = i;
 i = i + 432 | 0;
 v = s + 424 | 0;
 t = s + 24 | 0;
 r = s + 16 | 0;
 l = s + 8 | 0;
 u = s + 4 | 0;
 k = s + 428 | 0;
 m = s;
 c[r >> 2] = t;
 q = r + 4 | 0;
 c[q >> 2] = 98;
 o = tf(g) | 0;
 c[u >> 2] = o;
 b = Fk(u, 9320) | 0;
 a[k >> 0] = 0;
 n = c[e >> 2] | 0;
 c[m >> 2] = n;
 g = c[g + 4 >> 2] | 0;
 c[v >> 2] = c[m >> 2];
 m = n;
 if (Wj(d, v, f, u, g, h, k, b, r, l, t + 400 | 0) | 0) {
  if (!(a[j >> 0] & 1)) a[j >> 0] = 0; else c[c[j + 8 >> 2] >> 2] = 0;
  c[j + 4 >> 2] = 0;
  if (a[k >> 0] | 0) lf(j, zb[c[(c[b >> 2] | 0) + 44 >> 2] & 15](b, 45) | 0);
  k = zb[c[(c[b >> 2] | 0) + 44 >> 2] & 15](b, 48) | 0;
  b = c[r >> 2] | 0;
  f = c[l >> 2] | 0;
  g = f + -4 | 0;
  a : do if (b >>> 0 < g >>> 0) do {
   if ((c[b >> 2] | 0) != (k | 0)) break a;
   b = b + 4 | 0;
  } while (b >>> 0 < g >>> 0); while (0);
  Vm(j, b, f) | 0;
 }
 b = c[d >> 2] | 0;
 do if (b) {
  g = c[b + 12 >> 2] | 0;
  if ((g | 0) == (c[b + 16 >> 2] | 0)) b = tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0; else b = c[g >> 2] | 0;
  if ((b | 0) == -1) {
   c[d >> 2] = 0;
   g = 1;
   break;
  } else {
   g = (c[d >> 2] | 0) == 0;
   break;
  }
 } else g = 1; while (0);
 do if (n) {
  b = c[m + 12 >> 2] | 0;
  if ((b | 0) == (c[m + 16 >> 2] | 0)) b = tb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](m) | 0; else b = c[b >> 2] | 0;
  if ((b | 0) != -1) if (g) break; else {
   p = 26;
   break;
  } else {
   c[e >> 2] = 0;
   p = 24;
   break;
  }
 } else p = 24; while (0);
 if ((p | 0) == 24 ? g : 0) p = 26;
 if ((p | 0) == 26) c[h >> 2] = c[h >> 2] | 2;
 g = c[d >> 2] | 0;
 co(o) | 0;
 b = c[r >> 2] | 0;
 c[r >> 2] = 0;
 if (b) pb[c[q >> 2] & 127](b);
 i = s;
 return g | 0;
}

function qe(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 b = c[637] | 0;
 se(7312, b, 7368);
 c[1658] = 8060;
 c[1660] = 8080;
 c[1659] = 0;
 e = c[2012] | 0;
 uf(6632 + e | 0, 7312);
 c[6632 + (e + 72) >> 2] = 0;
 c[6632 + (e + 76) >> 2] = -1;
 e = c[638] | 0;
 te(7416, e, 7376);
 c[1680] = 8140;
 c[1681] = 8160;
 h = c[2032] | 0;
 uf(6720 + h | 0, 7416);
 f = h + 72 | 0;
 c[6720 + f >> 2] = 0;
 a = h + 76 | 0;
 c[6720 + a >> 2] = -1;
 d = c[636] | 0;
 te(7464, d, 7384);
 c[1701] = 8140;
 c[1702] = 8160;
 uf(6804 + h | 0, 7464);
 c[6804 + f >> 2] = 0;
 c[6804 + a >> 2] = -1;
 g = c[6804 + ((c[(c[1701] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0;
 c[1722] = 8140;
 c[1723] = 8160;
 uf(6888 + h | 0, g);
 c[6888 + f >> 2] = 0;
 c[6888 + a >> 2] = -1;
 c[6632 + ((c[(c[1658] | 0) + -12 >> 2] | 0) + 72) >> 2] = 6720;
 a = 6804 + ((c[(c[1701] | 0) + -12 >> 2] | 0) + 4) | 0;
 c[a >> 2] = c[a >> 2] | 8192;
 c[6804 + ((c[(c[1701] | 0) + -12 >> 2] | 0) + 72) >> 2] = 6720;
 ue(7512, b, 7392);
 c[1743] = 8100;
 c[1745] = 8120;
 c[1744] = 0;
 b = c[2022] | 0;
 uf(6972 + b | 0, 7512);
 c[6972 + (b + 72) >> 2] = 0;
 c[6972 + (b + 76) >> 2] = -1;
 ve(7568, e, 7400);
 c[1765] = 8180;
 c[1766] = 8200;
 e = c[2042] | 0;
 uf(7060 + e | 0, 7568);
 b = e + 72 | 0;
 c[7060 + b >> 2] = 0;
 a = e + 76 | 0;
 c[7060 + a >> 2] = -1;
 ve(7616, d, 7408);
 c[1786] = 8180;
 c[1787] = 8200;
 uf(7144 + e | 0, 7616);
 c[7144 + b >> 2] = 0;
 c[7144 + a >> 2] = -1;
 d = c[7144 + ((c[(c[1786] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0;
 c[1807] = 8180;
 c[1808] = 8200;
 uf(7228 + e | 0, d);
 c[7228 + b >> 2] = 0;
 c[7228 + a >> 2] = -1;
 c[6972 + ((c[(c[1743] | 0) + -12 >> 2] | 0) + 72) >> 2] = 7060;
 a = 7144 + ((c[(c[1786] | 0) + -12 >> 2] | 0) + 4) | 0;
 c[a >> 2] = c[a >> 2] | 8192;
 c[7144 + ((c[(c[1786] | 0) + -12 >> 2] | 0) + 72) >> 2] = 7060;
 return;
}

function Qj(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 s = i;
 i = i + 144 | 0;
 v = s + 24 | 0;
 t = s + 32 | 0;
 r = s + 16 | 0;
 l = s + 8 | 0;
 u = s + 4 | 0;
 k = s + 28 | 0;
 m = s;
 c[r >> 2] = t;
 q = r + 4 | 0;
 c[q >> 2] = 98;
 o = tf(g) | 0;
 c[u >> 2] = o;
 b = Fk(u, 9328) | 0;
 a[k >> 0] = 0;
 n = c[e >> 2] | 0;
 c[m >> 2] = n;
 g = c[g + 4 >> 2] | 0;
 c[v >> 2] = c[m >> 2];
 m = n;
 if (Oj(d, v, f, u, g, h, k, b, r, l, t + 100 | 0) | 0) {
  if (!(a[j >> 0] & 1)) {
   a[j + 1 >> 0] = 0;
   a[j >> 0] = 0;
  } else {
   a[c[j + 8 >> 2] >> 0] = 0;
   c[j + 4 >> 2] = 0;
  }
  if (a[k >> 0] | 0) bf(j, zb[c[(c[b >> 2] | 0) + 28 >> 2] & 15](b, 45) | 0);
  k = zb[c[(c[b >> 2] | 0) + 28 >> 2] & 15](b, 48) | 0;
  b = c[r >> 2] | 0;
  f = c[l >> 2] | 0;
  g = f + -1 | 0;
  a : do if (b >>> 0 < g >>> 0) do {
   if ((a[b >> 0] | 0) != k << 24 >> 24) break a;
   b = b + 1 | 0;
  } while (b >>> 0 < g >>> 0); while (0);
  Tm(j, b, f) | 0;
 }
 b = c[d >> 2] | 0;
 do if (b) {
  if ((c[b + 12 >> 2] | 0) == (c[b + 16 >> 2] | 0)) if ((tb[c[(c[b >> 2] | 0) + 36 >> 2] & 63](b) | 0) == -1) {
   c[d >> 2] = 0;
   b = 0;
   break;
  } else {
   b = c[d >> 2] | 0;
   break;
  }
 } else b = 0; while (0);
 b = (b | 0) == 0;
 do if (n) {
  if ((c[m + 12 >> 2] | 0) == (c[m + 16 >> 2] | 0) ? (tb[c[(c[n >> 2] | 0) + 36 >> 2] & 63](m) | 0) == -1 : 0) {
   c[e >> 2] = 0;
   p = 21;
   break;
  }
  if (!b) p = 22;
 } else p = 21; while (0);
 if ((p | 0) == 21 ? b : 0) p = 22;
 if ((p | 0) == 22) c[h >> 2] = c[h >> 2] | 2;
 g = c[d >> 2] | 0;
 co(o) | 0;
 b = c[r >> 2] | 0;
 c[r >> 2] = 0;
 if (b) pb[c[q >> 2] & 127](b);
 i = s;
 return g | 0;
}

function pd(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 j = k;
 a : do if (!b) {
  b = c[d >> 2] | 0;
  f = c[b >> 2] | 0;
  if (!f) e = 0; else {
   e = 0;
   do {
    if (f >>> 0 > 127) {
     f = nd(j, f, 0) | 0;
     if ((f | 0) == -1) {
      e = -1;
      break a;
     }
    } else f = 1;
    e = f + e | 0;
    b = b + 4 | 0;
    f = c[b >> 2] | 0;
   } while ((f | 0) != 0);
  }
 } else {
  b : do if (e >>> 0 > 3) {
   f = e;
   g = c[d >> 2] | 0;
   while (1) {
    h = c[g >> 2] | 0;
    if ((h + -1 | 0) >>> 0 > 126) {
     if (!h) break;
     h = nd(b, h, 0) | 0;
     if ((h | 0) == -1) {
      e = -1;
      break a;
     }
     b = b + h | 0;
     f = f - h | 0;
    } else {
     a[b >> 0] = h;
     b = b + 1 | 0;
     f = f + -1 | 0;
     g = c[d >> 2] | 0;
    }
    g = g + 4 | 0;
    c[d >> 2] = g;
    if (f >>> 0 <= 3) break b;
   }
   a[b >> 0] = 0;
   c[d >> 2] = 0;
   e = e - f | 0;
   break a;
  } else f = e; while (0);
  if (f) {
   g = c[d >> 2] | 0;
   while (1) {
    h = c[g >> 2] | 0;
    if ((h + -1 | 0) >>> 0 > 126) {
     if (!h) {
      g = 19;
      break;
     }
     h = nd(j, h, 0) | 0;
     if ((h | 0) == -1) {
      e = -1;
      break a;
     }
     if (f >>> 0 < h >>> 0) {
      g = 22;
      break;
     }
     nd(b, c[g >> 2] | 0, 0) | 0;
     b = b + h | 0;
     f = f - h | 0;
    } else {
     a[b >> 0] = h;
     b = b + 1 | 0;
     f = f + -1 | 0;
     g = c[d >> 2] | 0;
    }
    g = g + 4 | 0;
    c[d >> 2] = g;
    if (!f) break a;
   }
   if ((g | 0) == 19) {
    a[b >> 0] = 0;
    c[d >> 2] = 0;
    e = e - f | 0;
    break;
   } else if ((g | 0) == 22) {
    e = e - f | 0;
    break;
   }
  }
 } while (0);
 i = k;
 return e | 0;
}

function Te(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 s = i;
 i = i + 32 | 0;
 r = s + 16 | 0;
 q = s + 8 | 0;
 n = s + 4 | 0;
 o = s;
 h = b + 52 | 0;
 a : do if (a[h >> 0] | 0) {
  g = b + 48 | 0;
  f = c[g >> 2] | 0;
  if (e) {
   c[g >> 2] = -1;
   a[h >> 0] = 0;
  }
 } else {
  f = c[b + 44 >> 2] | 0;
  f = (f | 0) > 1 ? f : 1;
  p = b + 32 | 0;
  if ((f | 0) > 0) {
   h = 0;
   do {
    g = Hd(c[p >> 2] | 0) | 0;
    if ((g | 0) == -1) {
     f = -1;
     break a;
    }
    a[r + h >> 0] = g;
    h = h + 1 | 0;
   } while ((h | 0) < (f | 0));
  }
  b : do if (!(a[b + 53 >> 0] | 0)) {
   k = b + 40 | 0;
   l = b + 36 | 0;
   m = q + 1 | 0;
   c : while (1) {
    t = c[k >> 2] | 0;
    h = t;
    g = c[h >> 2] | 0;
    h = c[h + 4 >> 2] | 0;
    u = c[l >> 2] | 0;
    j = r + f | 0;
    switch (wb[c[(c[u >> 2] | 0) + 16 >> 2] & 15](u, t, r, j, n, q, m, o) | 0) {
    case 2:
     {
      f = -1;
      break a;
     }
    case 3:
     break c;
    case 1:
     break;
    default:
     break b;
    }
    u = c[k >> 2] | 0;
    c[u >> 2] = g;
    c[u + 4 >> 2] = h;
    if ((f | 0) == 8) {
     f = -1;
     break a;
    }
    g = Hd(c[p >> 2] | 0) | 0;
    if ((g | 0) == -1) {
     f = -1;
     break a;
    }
    a[j >> 0] = g;
    f = f + 1 | 0;
   }
   a[q >> 0] = a[r >> 0] | 0;
  } else a[q >> 0] = a[r >> 0] | 0; while (0);
  if (e) {
   f = a[q >> 0] | 0;
   c[b + 48 >> 2] = f & 255;
  } else {
   while (1) {
    if ((f | 0) <= 0) break;
    f = f + -1 | 0;
    if ((Kd(d[r + f >> 0] | 0, c[p >> 2] | 0) | 0) == -1) {
     f = -1;
     break a;
    }
   }
   f = a[q >> 0] | 0;
  }
  f = f & 255;
 } while (0);
 i = s;
 return f | 0;
}

function Ug(b, d, e, f, g, h, i, j, k, l) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0;
 o = c[f >> 2] | 0;
 p = (o | 0) == (e | 0);
 do if (p) {
  m = (a[l + 24 >> 0] | 0) == b << 24 >> 24;
  if (!m ? (a[l + 25 >> 0] | 0) != b << 24 >> 24 : 0) {
   n = 5;
   break;
  }
  c[f >> 2] = e + 1;
  a[e >> 0] = m ? 43 : 45;
  c[g >> 2] = 0;
  m = 0;
 } else n = 5; while (0);
 a : do if ((n | 0) == 5) {
  n = a[i >> 0] | 0;
  if (b << 24 >> 24 == h << 24 >> 24 ? (((n & 1) == 0 ? (n & 255) >>> 1 : c[i + 4 >> 2] | 0) | 0) != 0 : 0) {
   m = c[k >> 2] | 0;
   if ((m - j | 0) >= 160) {
    m = 0;
    break;
   }
   d = c[g >> 2] | 0;
   c[k >> 2] = m + 4;
   c[m >> 2] = d;
   c[g >> 2] = 0;
   m = 0;
   break;
  }
  i = l + 26 | 0;
  m = l;
  while (1) {
   if ((a[m >> 0] | 0) == b << 24 >> 24) break;
   m = m + 1 | 0;
   if ((m | 0) == (i | 0)) {
    m = i;
    break;
   }
  }
  m = m - l | 0;
  if ((m | 0) > 23) m = -1; else {
   switch (d | 0) {
   case 10:
   case 8:
    {
     if ((m | 0) >= (d | 0)) {
      m = -1;
      break a;
     }
     break;
    }
   case 16:
    {
     if ((m | 0) >= 22) {
      if (p) {
       m = -1;
       break a;
      }
      if ((o - e | 0) >= 3) {
       m = -1;
       break a;
      }
      if ((a[o + -1 >> 0] | 0) != 48) {
       m = -1;
       break a;
      }
      c[g >> 2] = 0;
      m = a[19840 + m >> 0] | 0;
      c[f >> 2] = o + 1;
      a[o >> 0] = m;
      m = 0;
      break a;
     }
     break;
    }
   default:
    {}
   }
   m = a[19840 + m >> 0] | 0;
   c[f >> 2] = o + 1;
   a[o >> 0] = m;
   c[g >> 2] = (c[g >> 2] | 0) + 1;
   m = 0;
  }
 } while (0);
 return m | 0;
}

function hh(b, d, e, f, g, h, i, j, k, l) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0;
 o = c[f >> 2] | 0;
 p = (o | 0) == (e | 0);
 do if (p) {
  m = (c[l + 96 >> 2] | 0) == (b | 0);
  if (!m ? (c[l + 100 >> 2] | 0) != (b | 0) : 0) {
   n = 5;
   break;
  }
  c[f >> 2] = e + 1;
  a[e >> 0] = m ? 43 : 45;
  c[g >> 2] = 0;
  m = 0;
 } else n = 5; while (0);
 a : do if ((n | 0) == 5) {
  n = a[i >> 0] | 0;
  if ((b | 0) == (h | 0) ? (((n & 1) == 0 ? (n & 255) >>> 1 : c[i + 4 >> 2] | 0) | 0) != 0 : 0) {
   m = c[k >> 2] | 0;
   if ((m - j | 0) >= 160) {
    m = 0;
    break;
   }
   d = c[g >> 2] | 0;
   c[k >> 2] = m + 4;
   c[m >> 2] = d;
   c[g >> 2] = 0;
   m = 0;
   break;
  }
  i = l + 104 | 0;
  m = l;
  while (1) {
   if ((c[m >> 2] | 0) == (b | 0)) break;
   m = m + 4 | 0;
   if ((m | 0) == (i | 0)) {
    m = i;
    break;
   }
  }
  m = m - l | 0;
  i = m >> 2;
  if ((m | 0) > 92) m = -1; else {
   switch (d | 0) {
   case 10:
   case 8:
    {
     if ((i | 0) >= (d | 0)) {
      m = -1;
      break a;
     }
     break;
    }
   case 16:
    {
     if ((m | 0) >= 88) {
      if (p) {
       m = -1;
       break a;
      }
      if ((o - e | 0) >= 3) {
       m = -1;
       break a;
      }
      if ((a[o + -1 >> 0] | 0) != 48) {
       m = -1;
       break a;
      }
      c[g >> 2] = 0;
      m = a[19840 + i >> 0] | 0;
      c[f >> 2] = o + 1;
      a[o >> 0] = m;
      m = 0;
      break a;
     }
     break;
    }
   default:
    {}
   }
   m = a[19840 + i >> 0] | 0;
   c[f >> 2] = o + 1;
   a[o >> 0] = m;
   c[g >> 2] = (c[g >> 2] | 0) + 1;
   m = 0;
  }
 } while (0);
 return m | 0;
}

function Ie(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 r = i;
 i = i + 32 | 0;
 q = r + 16 | 0;
 p = r + 8 | 0;
 m = r + 4 | 0;
 n = r;
 g = b + 52 | 0;
 a : do if (a[g >> 0] | 0) {
  f = b + 48 | 0;
  e = c[f >> 2] | 0;
  if (d) {
   c[f >> 2] = -1;
   a[g >> 0] = 0;
  }
 } else {
  e = c[b + 44 >> 2] | 0;
  e = (e | 0) > 1 ? e : 1;
  o = b + 32 | 0;
  if ((e | 0) > 0) {
   g = 0;
   do {
    f = Hd(c[o >> 2] | 0) | 0;
    if ((f | 0) == -1) {
     e = -1;
     break a;
    }
    a[q + g >> 0] = f;
    g = g + 1 | 0;
   } while ((g | 0) < (e | 0));
  }
  b : do if (!(a[b + 53 >> 0] | 0)) {
   j = b + 40 | 0;
   k = b + 36 | 0;
   l = p + 4 | 0;
   c : while (1) {
    s = c[j >> 2] | 0;
    g = s;
    f = c[g >> 2] | 0;
    g = c[g + 4 >> 2] | 0;
    t = c[k >> 2] | 0;
    h = q + e | 0;
    switch (wb[c[(c[t >> 2] | 0) + 16 >> 2] & 15](t, s, q, h, m, p, l, n) | 0) {
    case 2:
     {
      e = -1;
      break a;
     }
    case 3:
     break c;
    case 1:
     break;
    default:
     break b;
    }
    t = c[j >> 2] | 0;
    c[t >> 2] = f;
    c[t + 4 >> 2] = g;
    if ((e | 0) == 8) {
     e = -1;
     break a;
    }
    f = Hd(c[o >> 2] | 0) | 0;
    if ((f | 0) == -1) {
     e = -1;
     break a;
    }
    a[h >> 0] = f;
    e = e + 1 | 0;
   }
   c[p >> 2] = a[q >> 0];
  } else c[p >> 2] = a[q >> 0]; while (0);
  if (d) {
   e = c[p >> 2] | 0;
   c[b + 48 >> 2] = e;
   break;
  }
  while (1) {
   if ((e | 0) <= 0) break;
   e = e + -1 | 0;
   if ((Kd(a[q + e >> 0] | 0, c[o >> 2] | 0) | 0) == -1) {
    e = -1;
    break a;
   }
  }
  e = c[p >> 2] | 0;
 } while (0);
 i = r;
 return e | 0;
}

function tk(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 c[a + 4 >> 2] = b + -1;
 c[a >> 2] = 9304;
 d = a + 8 | 0;
 Wm(d, 28);
 Ve(a + 144 | 0, 21227, 1);
 d = c[d >> 2] | 0;
 e = a + 12 | 0;
 b = c[e >> 2] | 0;
 if ((b | 0) != (d | 0)) {
  do b = b + -4 | 0; while ((b | 0) != (d | 0));
  c[e >> 2] = b;
 }
 c[319] = 0;
 c[318] = 8232;
 Xm(a, 1272);
 c[321] = 0;
 c[320] = 8272;
 Ym(a, 1280);
 Wk(1288, 0, 0, 1);
 Zm(a, 1288);
 c[327] = 0;
 c[326] = 9592;
 _m(a, 1304);
 c[329] = 0;
 c[328] = 9660;
 $m(a, 1312);
 c[331] = 0;
 c[330] = 9412;
 c[332] = Vg() | 0;
 an(a, 1320);
 c[335] = 0;
 c[334] = 9708;
 bn(a, 1336);
 c[337] = 0;
 c[336] = 9756;
 cn(a, 1344);
 Nl(1352, 1);
 dn(a, 1352);
 Ol(1376, 1);
 en(a, 1376);
 c[353] = 0;
 c[352] = 8312;
 fn(a, 1408);
 c[355] = 0;
 c[354] = 8384;
 gn(a, 1416);
 c[357] = 0;
 c[356] = 8456;
 hn(a, 1424);
 c[359] = 0;
 c[358] = 8516;
 jn(a, 1432);
 c[361] = 0;
 c[360] = 8824;
 kn(a, 1440);
 c[363] = 0;
 c[362] = 8888;
 ln(a, 1448);
 c[365] = 0;
 c[364] = 8952;
 mn(a, 1456);
 c[367] = 0;
 c[366] = 9016;
 nn(a, 1464);
 c[369] = 0;
 c[368] = 9080;
 on(a, 1472);
 c[371] = 0;
 c[370] = 9116;
 pn(a, 1480);
 c[373] = 0;
 c[372] = 9152;
 qn(a, 1488);
 c[375] = 0;
 c[374] = 9188;
 rn(a, 1496);
 c[377] = 0;
 c[376] = 8576;
 c[378] = 8624;
 sn(a, 1504);
 c[381] = 0;
 c[380] = 8668;
 c[382] = 8716;
 tn(a, 1520);
 c[385] = 0;
 c[384] = 9572;
 c[386] = Vg() | 0;
 c[384] = 8760;
 un(a, 1536);
 c[389] = 0;
 c[388] = 9572;
 c[390] = Vg() | 0;
 c[388] = 8792;
 vn(a, 1552);
 c[393] = 0;
 c[392] = 9224;
 wn(a, 1568);
 c[395] = 0;
 c[394] = 9264;
 xn(a, 1576);
 return;
}

function rk(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 s = i;
 i = i + 176 | 0;
 p = s + 168 | 0;
 o = s + 40 | 0;
 n = s + 32 | 0;
 r = s + 28 | 0;
 q = s + 16 | 0;
 l = s + 8 | 0;
 m = s;
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 0;
 c[q + 8 >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l >> 2] = 9804;
 k = a[h >> 0] | 0;
 t = (k & 1) == 0;
 j = h + 4 | 0;
 d = t ? j : c[h + 8 >> 2] | 0;
 h = t ? (k & 255) >>> 1 : c[j >> 2] | 0;
 j = d + (h << 2) | 0;
 k = o + 32 | 0;
 if ((h | 0) > 0) do {
  c[r >> 2] = d;
  h = wb[c[(c[l >> 2] | 0) + 12 >> 2] & 15](l, p, d, j, r, o, k, n) | 0;
  if (o >>> 0 < (c[n >> 2] | 0) >>> 0) {
   d = o;
   do {
    bf(q, a[d >> 0] | 0);
    d = d + 1 | 0;
   } while (d >>> 0 < (c[n >> 2] | 0) >>> 0);
  }
  d = c[r >> 2] | 0;
 } while ((h | 0) != 2 & d >>> 0 < j >>> 0);
 d = Uc((e | 0) == -1 ? -1 : e << 1, f, g, (a[q >> 0] & 1) == 0 ? q + 1 | 0 : c[q + 8 >> 2] | 0) | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[m + 4 >> 2] = 0;
 c[m >> 2] = 9852;
 t = Vd(d) | 0;
 j = d + t | 0;
 k = j;
 l = o + 128 | 0;
 if ((t | 0) > 0) do {
  c[r >> 2] = d;
  h = wb[c[(c[m >> 2] | 0) + 16 >> 2] & 15](m, p, d, (k - d | 0) > 32 ? d + 32 | 0 : j, r, o, l, n) | 0;
  if (o >>> 0 < (c[n >> 2] | 0) >>> 0) {
   d = o;
   do {
    lf(b, c[d >> 2] | 0);
    d = d + 4 | 0;
   } while (d >>> 0 < (c[n >> 2] | 0) >>> 0);
  }
  d = c[r >> 2] | 0;
 } while ((h | 0) != 2 & d >>> 0 < j >>> 0);
 Xe(q);
 i = s;
 return;
}

function kd(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 o = i;
 i = i + 1040 | 0;
 l = o + 8 | 0;
 n = o;
 k = c[b >> 2] | 0;
 c[n >> 2] = k;
 m = (a | 0) != 0;
 e = m ? e : 256;
 a = m ? a : l;
 g = k;
 a : do if ((e | 0) != 0 & (k | 0) != 0) {
  j = e;
  k = g;
  e = 0;
  while (1) {
   g = d >>> 2;
   h = g >>> 0 >= j >>> 0;
   if (!(d >>> 0 > 131 | h)) {
    g = k;
    break a;
   }
   g = h ? j : g;
   d = d - g | 0;
   g = ld(a, n, g, f) | 0;
   if ((g | 0) == -1) {
    e = d;
    break;
   }
   p = (a | 0) == (l | 0);
   k = p ? 0 : g;
   h = j - k | 0;
   a = p ? a : a + (g << 2) | 0;
   e = g + e | 0;
   g = c[n >> 2] | 0;
   if ((j | 0) != (k | 0) & (g | 0) != 0) {
    j = h;
    k = g;
   } else {
    j = h;
    break a;
   }
  }
  d = e;
  j = 0;
  g = c[n >> 2] | 0;
  e = -1;
 } else {
  j = e;
  e = 0;
 } while (0);
 b : do if ((g | 0) != 0 ? (j | 0) != 0 & (d | 0) != 0 : 0) {
  h = g;
  g = a;
  while (1) {
   a = id(g, h, d, f) | 0;
   if ((a + 2 | 0) >>> 0 < 3) break;
   h = (c[n >> 2] | 0) + a | 0;
   c[n >> 2] = h;
   j = j + -1 | 0;
   e = e + 1 | 0;
   if (!((j | 0) != 0 & (d | 0) != (a | 0))) break b; else {
    d = d - a | 0;
    g = g + 4 | 0;
   }
  }
  switch (a | 0) {
  case -1:
   {
    e = -1;
    break b;
   }
  case 0:
   {
    c[n >> 2] = 0;
    break b;
   }
  default:
   {
    c[f >> 2] = 0;
    break b;
   }
  }
 } while (0);
 if (m) c[b >> 2] = c[n >> 2];
 i = o;
 return e | 0;
}

function xd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 48 | 0;
 n = q + 16 | 0;
 m = q;
 e = q + 32 | 0;
 o = a + 28 | 0;
 f = c[o >> 2] | 0;
 c[e >> 2] = f;
 p = a + 20 | 0;
 f = (c[p >> 2] | 0) - f | 0;
 c[e + 4 >> 2] = f;
 c[e + 8 >> 2] = b;
 c[e + 12 >> 2] = d;
 k = a + 60 | 0;
 l = a + 44 | 0;
 b = 2;
 f = f + d | 0;
 while (1) {
  if (!(c[574] | 0)) {
   c[n >> 2] = c[k >> 2];
   c[n + 4 >> 2] = e;
   c[n + 8 >> 2] = b;
   h = Sc(jb(146, n | 0) | 0) | 0;
  } else {
   db(96, a | 0);
   c[m >> 2] = c[k >> 2];
   c[m + 4 >> 2] = e;
   c[m + 8 >> 2] = b;
   h = Sc(jb(146, m | 0) | 0) | 0;
   Xa(0);
  }
  if ((f | 0) == (h | 0)) {
   f = 6;
   break;
  }
  if ((h | 0) < 0) {
   f = 8;
   break;
  }
  f = f - h | 0;
  g = c[e + 4 >> 2] | 0;
  if (h >>> 0 <= g >>> 0) if ((b | 0) == 2) {
   c[o >> 2] = (c[o >> 2] | 0) + h;
   j = g;
   b = 2;
  } else j = g; else {
   j = c[l >> 2] | 0;
   c[o >> 2] = j;
   c[p >> 2] = j;
   j = c[e + 12 >> 2] | 0;
   h = h - g | 0;
   e = e + 8 | 0;
   b = b + -1 | 0;
  }
  c[e >> 2] = (c[e >> 2] | 0) + h;
  c[e + 4 >> 2] = j - h;
 }
 if ((f | 0) == 6) {
  n = c[l >> 2] | 0;
  c[a + 16 >> 2] = n + (c[a + 48 >> 2] | 0);
  a = n;
  c[o >> 2] = a;
  c[p >> 2] = a;
 } else if ((f | 0) == 8) {
  c[a + 16 >> 2] = 0;
  c[o >> 2] = 0;
  c[p >> 2] = 0;
  c[a >> 2] = c[a >> 2] | 32;
  if ((b | 0) == 2) d = 0; else d = d - (c[e + 4 >> 2] | 0) | 0;
 }
 i = q;
 return d | 0;
}

function Nh(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 A = i;
 i = i + 352 | 0;
 r = A + 304 | 0;
 n = A + 48 | 0;
 m = A + 32 | 0;
 j = A + 24 | 0;
 g = A + 8 | 0;
 l = A;
 p = A + 308 | 0;
 o = A + 72 | 0;
 q = A + 76 | 0;
 w = A + 68 | 0;
 v = A + 64 | 0;
 s = A + 60 | 0;
 t = A + 56 | 0;
 k = l;
 c[k >> 2] = 37;
 c[k + 4 >> 2] = 0;
 k = zh(l + 1 | 0, 21241, c[d + 4 >> 2] | 0) | 0;
 c[o >> 2] = p;
 a = Vg() | 0;
 if (k) {
  c[g >> 2] = c[d + 8 >> 2];
  h[g + 8 >> 3] = f;
  a = Mm(p, 30, a, l, g) | 0;
 } else {
  h[j >> 3] = f;
  a = Mm(p, 30, a, l, j) | 0;
 }
 if ((a | 0) > 29) {
  a = Vg() | 0;
  if (k) {
   c[m >> 2] = c[d + 8 >> 2];
   h[m + 8 >> 3] = f;
   g = Nm(o, a, l, m) | 0;
  } else {
   h[n >> 3] = f;
   g = Nm(o, a, l, n) | 0;
  }
  a = c[o >> 2] | 0;
  if (!a) zc(); else {
   x = a;
   C = a;
   u = g;
  }
 } else {
  x = c[o >> 2] | 0;
  C = 0;
  u = a;
 }
 g = x + u | 0;
 j = th(x, g, d) | 0;
 if ((x | 0) != (p | 0)) {
  a = ke(u << 3) | 0;
  if (!a) zc(); else {
   y = x;
   B = a;
   z = a;
  }
 } else {
  y = p;
  B = 0;
  z = q;
 }
 a = tf(d) | 0;
 c[s >> 2] = a;
 Mh(y, j, g, z, w, v, s);
 co(a) | 0;
 c[t >> 2] = c[b >> 2];
 y = c[w >> 2] | 0;
 a = c[v >> 2] | 0;
 c[r >> 2] = c[t >> 2];
 a = Om(r, z, y, a, d, e) | 0;
 c[b >> 2] = a;
 if (B) le(B);
 le(C);
 i = A;
 return a | 0;
}

function Bh(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 x = i;
 i = i + 176 | 0;
 r = x + 76 | 0;
 n = x + 48 | 0;
 m = x + 32 | 0;
 j = x + 24 | 0;
 g = x + 8 | 0;
 l = x;
 p = x + 80 | 0;
 o = x + 72 | 0;
 q = x + 110 | 0;
 w = x + 68 | 0;
 v = x + 64 | 0;
 s = x + 60 | 0;
 t = x + 56 | 0;
 k = l;
 c[k >> 2] = 37;
 c[k + 4 >> 2] = 0;
 k = zh(l + 1 | 0, 21241, c[d + 4 >> 2] | 0) | 0;
 c[o >> 2] = p;
 a = Vg() | 0;
 if (k) {
  c[g >> 2] = c[d + 8 >> 2];
  h[g + 8 >> 3] = f;
  a = Mm(p, 30, a, l, g) | 0;
 } else {
  h[j >> 3] = f;
  a = Mm(p, 30, a, l, j) | 0;
 }
 if ((a | 0) > 29) {
  a = Vg() | 0;
  if (k) {
   c[m >> 2] = c[d + 8 >> 2];
   h[m + 8 >> 3] = f;
   g = Nm(o, a, l, m) | 0;
  } else {
   h[n >> 3] = f;
   g = Nm(o, a, l, n) | 0;
  }
  a = c[o >> 2] | 0;
  if (!a) zc(); else {
   y = a;
   B = a;
   u = g;
  }
 } else {
  y = c[o >> 2] | 0;
  B = 0;
  u = a;
 }
 g = y + u | 0;
 j = th(y, g, d) | 0;
 if ((y | 0) != (p | 0)) {
  a = ke(u << 1) | 0;
  if (!a) zc(); else {
   z = y;
   A = a;
   C = a;
  }
 } else {
  z = p;
  A = 0;
  C = q;
 }
 y = tf(d) | 0;
 c[s >> 2] = y;
 Ah(z, j, g, C, w, v, s);
 co(y) | 0;
 c[t >> 2] = c[b >> 2];
 z = c[w >> 2] | 0;
 b = c[v >> 2] | 0;
 c[r >> 2] = c[t >> 2];
 b = Nb(r, C, z, b, d, e) | 0;
 le(A);
 le(B);
 i = x;
 return b | 0;
}

function Lh(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 y = i;
 i = i + 336 | 0;
 p = y + 296 | 0;
 l = y + 32 | 0;
 j = y + 24 | 0;
 g = y + 8 | 0;
 k = y;
 n = y + 300 | 0;
 m = y + 64 | 0;
 o = y + 68 | 0;
 u = y + 60 | 0;
 t = y + 56 | 0;
 q = y + 52 | 0;
 r = y + 48 | 0;
 B = k;
 c[B >> 2] = 37;
 c[B + 4 >> 2] = 0;
 B = zh(k + 1 | 0, 21240, c[d + 4 >> 2] | 0) | 0;
 c[m >> 2] = n;
 a = Vg() | 0;
 if (B) {
  c[g >> 2] = c[d + 8 >> 2];
  h[g + 8 >> 3] = f;
  a = Mm(n, 30, a, k, g) | 0;
 } else {
  h[j >> 3] = f;
  a = Mm(n, 30, a, k, j) | 0;
 }
 if ((a | 0) > 29) {
  g = Vg() | 0;
  c[l >> 2] = c[d + 8 >> 2];
  h[l + 8 >> 3] = f;
  g = Nm(m, g, k, l) | 0;
  a = c[m >> 2] | 0;
  if (!a) zc(); else {
   v = a;
   A = a;
   s = g;
  }
 } else {
  v = c[m >> 2] | 0;
  A = 0;
  s = a;
 }
 g = v + s | 0;
 j = th(v, g, d) | 0;
 if ((v | 0) != (n | 0)) {
  a = ke(s << 3) | 0;
  if (!a) zc(); else {
   w = v;
   z = a;
   x = a;
  }
 } else {
  w = n;
  z = 0;
  x = o;
 }
 B = tf(d) | 0;
 c[q >> 2] = B;
 Mh(w, j, g, x, u, t, q);
 co(B) | 0;
 c[r >> 2] = c[b >> 2];
 B = c[u >> 2] | 0;
 a = c[t >> 2] | 0;
 c[p >> 2] = c[r >> 2];
 a = Om(p, x, B, a, d, e) | 0;
 c[b >> 2] = a;
 if (z) le(z);
 le(A);
 i = y;
 return a | 0;
}

function yh(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 v = i;
 i = i + 160 | 0;
 p = v + 68 | 0;
 l = v + 32 | 0;
 j = v + 24 | 0;
 g = v + 8 | 0;
 k = v;
 n = v + 72 | 0;
 m = v + 64 | 0;
 o = v + 102 | 0;
 u = v + 60 | 0;
 t = v + 56 | 0;
 q = v + 52 | 0;
 r = v + 48 | 0;
 B = k;
 c[B >> 2] = 37;
 c[B + 4 >> 2] = 0;
 B = zh(k + 1 | 0, 21240, c[d + 4 >> 2] | 0) | 0;
 c[m >> 2] = n;
 a = Vg() | 0;
 if (B) {
  c[g >> 2] = c[d + 8 >> 2];
  h[g + 8 >> 3] = f;
  a = Mm(n, 30, a, k, g) | 0;
 } else {
  h[j >> 3] = f;
  a = Mm(n, 30, a, k, j) | 0;
 }
 if ((a | 0) > 29) {
  g = Vg() | 0;
  c[l >> 2] = c[d + 8 >> 2];
  h[l + 8 >> 3] = f;
  g = Nm(m, g, k, l) | 0;
  a = c[m >> 2] | 0;
  if (!a) zc(); else {
   w = a;
   z = a;
   s = g;
  }
 } else {
  w = c[m >> 2] | 0;
  z = 0;
  s = a;
 }
 g = w + s | 0;
 j = th(w, g, d) | 0;
 if ((w | 0) != (n | 0)) {
  a = ke(s << 1) | 0;
  if (!a) zc(); else {
   x = w;
   y = a;
   A = a;
  }
 } else {
  x = n;
  y = 0;
  A = o;
 }
 B = tf(d) | 0;
 c[q >> 2] = B;
 Ah(x, j, g, A, u, t, q);
 co(B) | 0;
 c[r >> 2] = c[b >> 2];
 b = c[u >> 2] | 0;
 B = c[t >> 2] | 0;
 c[p >> 2] = c[r >> 2];
 B = Nb(p, A, b, B, d, e) | 0;
 le(y);
 le(z);
 i = v;
 return B | 0;
}

function od(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 m = i;
 i = i + 272 | 0;
 j = m + 8 | 0;
 l = m;
 h = c[b >> 2] | 0;
 c[l >> 2] = h;
 k = (a | 0) != 0;
 f = k ? e : 256;
 e = k ? a : j;
 a = h;
 a : do if ((f | 0) != 0 & (h | 0) != 0) {
  h = f;
  g = a;
  f = 0;
  while (1) {
   a = d >>> 0 >= h >>> 0;
   if (!(a | d >>> 0 > 32)) {
    a = g;
    break a;
   }
   a = a ? h : d;
   d = d - a | 0;
   a = pd(e, l, a, 0) | 0;
   if ((a | 0) == -1) {
    f = d;
    break;
   }
   o = (e | 0) == (j | 0);
   n = o ? 0 : a;
   g = h - n | 0;
   e = o ? e : e + a | 0;
   f = a + f | 0;
   a = c[l >> 2] | 0;
   if ((h | 0) != (n | 0) & (a | 0) != 0) {
    h = g;
    g = a;
   } else {
    h = g;
    break a;
   }
  }
  d = f;
  h = 0;
  a = c[l >> 2] | 0;
  f = -1;
 } else {
  h = f;
  f = 0;
 } while (0);
 b : do if ((a | 0) != 0 ? (h | 0) != 0 & (d | 0) != 0 : 0) {
  g = a;
  a = e;
  while (1) {
   e = nd(a, c[g >> 2] | 0, 0) | 0;
   if ((e + 1 | 0) >>> 0 < 2) break;
   g = (c[l >> 2] | 0) + 4 | 0;
   c[l >> 2] = g;
   d = d + -1 | 0;
   f = f + 1 | 0;
   if (!((h | 0) != (e | 0) & (d | 0) != 0)) break b; else {
    h = h - e | 0;
    a = a + e | 0;
   }
  }
  if (!e) c[l >> 2] = 0; else f = -1;
 } while (0);
 if (k) c[b >> 2] = c[l >> 2];
 i = m;
 return f | 0;
}

function qh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 32 | 0;
 h = n + 20 | 0;
 j = n + 16 | 0;
 k = n + 12 | 0;
 m = n;
 if (!(c[e + 4 >> 2] & 1)) {
  m = c[(c[b >> 2] | 0) + 24 >> 2] | 0;
  c[j >> 2] = c[d >> 2];
  c[h >> 2] = c[j >> 2];
  h = Ab[m & 31](b, h, e, f, g & 1) | 0;
 } else {
  j = tf(e) | 0;
  c[k >> 2] = j;
  h = Fk(k, 9468) | 0;
  co(j) | 0;
  j = c[h >> 2] | 0;
  if (g) qb[c[j + 24 >> 2] & 63](m, h); else qb[c[j + 28 >> 2] & 63](m, h);
  e = a[m >> 0] | 0;
  l = (e & 1) == 0;
  h = m + 1 | 0;
  g = m + 8 | 0;
  b = l ? h : m + 1 | 0;
  h = l ? h : c[m + 8 >> 2] | 0;
  l = m + 4 | 0;
  f = (e & 1) == 0;
  if ((h | 0) != ((f ? b : c[g >> 2] | 0) + (f ? (e & 255) >>> 1 : c[l >> 2] | 0) | 0)) do {
   j = a[h >> 0] | 0;
   k = c[d >> 2] | 0;
   do if (k) {
    f = k + 24 | 0;
    e = c[f >> 2] | 0;
    if ((e | 0) != (c[k + 28 >> 2] | 0)) {
     c[f >> 2] = e + 1;
     a[e >> 0] = j;
     break;
    }
    if ((zb[c[(c[k >> 2] | 0) + 52 >> 2] & 15](k, j & 255) | 0) == -1) c[d >> 2] = 0;
   } while (0);
   h = h + 1 | 0;
   e = a[m >> 0] | 0;
   f = (e & 1) == 0;
  } while ((h | 0) != ((f ? b : c[g >> 2] | 0) + (f ? (e & 255) >>> 1 : c[l >> 2] | 0) | 0));
  h = c[d >> 2] | 0;
  Xe(m);
 }
 i = n;
 return h | 0;
}

function id(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 16 | 0;
 g = l;
 j = (f | 0) == 0 ? 2612 : f;
 f = c[j >> 2] | 0;
 a : do if (!d) if (!f) f = 0; else k = 15; else {
  h = (b | 0) == 0 ? g : b;
  if (!e) f = -2; else {
   if (!f) {
    f = a[d >> 0] | 0;
    g = f & 255;
    if (f << 24 >> 24 > -1) {
     c[h >> 2] = g;
     f = f << 24 >> 24 != 0 & 1;
     break;
    }
    f = g + -194 | 0;
    if (f >>> 0 > 50) {
     k = 15;
     break;
    }
    f = c[2340 + (f << 2) >> 2] | 0;
    g = e + -1 | 0;
    if (g) {
     d = d + 1 | 0;
     k = 9;
    }
   } else {
    g = e;
    k = 9;
   }
   b : do if ((k | 0) == 9) {
    b = a[d >> 0] | 0;
    m = (b & 255) >>> 3;
    if ((m + -16 | m + (f >> 26)) >>> 0 > 7) {
     k = 15;
     break a;
    }
    while (1) {
     d = d + 1 | 0;
     f = (b & 255) + -128 | f << 6;
     g = g + -1 | 0;
     if ((f | 0) >= 0) break;
     if (!g) break b;
     b = a[d >> 0] | 0;
     if ((b & -64) << 24 >> 24 != -128) {
      k = 15;
      break a;
     }
    }
    c[j >> 2] = 0;
    c[h >> 2] = f;
    f = e - g | 0;
    break a;
   } while (0);
   c[j >> 2] = f;
   f = -2;
  }
 } while (0);
 if ((k | 0) == 15) {
  c[j >> 2] = 0;
  c[(Mc() | 0) >> 2] = 84;
  f = -1;
 }
 i = l;
 return f | 0;
}

function Fh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 32 | 0;
 h = m + 20 | 0;
 j = m + 16 | 0;
 k = m + 12 | 0;
 l = m;
 if (!(c[e + 4 >> 2] & 1)) {
  l = c[(c[b >> 2] | 0) + 24 >> 2] | 0;
  c[j >> 2] = c[d >> 2];
  c[h >> 2] = c[j >> 2];
  h = Ab[l & 31](b, h, e, f, g & 1) | 0;
 } else {
  j = tf(e) | 0;
  c[k >> 2] = j;
  h = Fk(k, 9476) | 0;
  co(j) | 0;
  j = c[h >> 2] | 0;
  if (g) qb[c[j + 24 >> 2] & 63](l, h); else qb[c[j + 28 >> 2] & 63](l, h);
  e = a[l >> 0] | 0;
  f = (e & 1) == 0;
  h = l + 4 | 0;
  g = l + 8 | 0;
  b = f ? h : l + 4 | 0;
  h = f ? h : c[l + 8 >> 2] | 0;
  f = (e & 1) == 0;
  if ((h | 0) != ((f ? b : c[g >> 2] | 0) + ((f ? (e & 255) >>> 1 : c[b >> 2] | 0) << 2) | 0)) do {
   j = c[h >> 2] | 0;
   k = c[d >> 2] | 0;
   if (k) {
    f = k + 24 | 0;
    e = c[f >> 2] | 0;
    if ((e | 0) == (c[k + 28 >> 2] | 0)) j = zb[c[(c[k >> 2] | 0) + 52 >> 2] & 15](k, j) | 0; else {
     c[f >> 2] = e + 4;
     c[e >> 2] = j;
    }
    if ((j | 0) == -1) c[d >> 2] = 0;
   }
   h = h + 4 | 0;
   e = a[l >> 0] | 0;
   f = (e & 1) == 0;
  } while ((h | 0) != ((f ? b : c[g >> 2] | 0) + ((f ? (e & 255) >>> 1 : c[b >> 2] | 0) << 2) | 0));
  h = c[d >> 2] | 0;
  gf(l);
 }
 i = m;
 return h | 0;
}

function sc(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0;
 a : do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  if ((c[d + 4 >> 2] | 0) == (e | 0) ? (h = d + 28 | 0, (c[h >> 2] | 0) != 1) : 0) c[h >> 2] = f;
 } else {
  if ((b | 0) != (c[d >> 2] | 0)) {
   j = c[b + 8 >> 2] | 0;
   nb[c[(c[j >> 2] | 0) + 24 >> 2] & 3](j, d, e, f, g);
   break;
  }
  if ((c[d + 16 >> 2] | 0) != (e | 0) ? (i = d + 20 | 0, (c[i >> 2] | 0) != (e | 0)) : 0) {
   c[d + 32 >> 2] = f;
   f = d + 44 | 0;
   if ((c[f >> 2] | 0) == 4) break;
   h = d + 52 | 0;
   a[h >> 0] = 0;
   k = d + 53 | 0;
   a[k >> 0] = 0;
   b = c[b + 8 >> 2] | 0;
   yb[c[(c[b >> 2] | 0) + 20 >> 2] & 7](b, d, e, e, 1, g);
   if (a[k >> 0] | 0) {
    if (!(a[h >> 0] | 0)) {
     h = 1;
     j = 13;
    }
   } else {
    h = 0;
    j = 13;
   }
   do if ((j | 0) == 13) {
    c[i >> 2] = e;
    k = d + 40 | 0;
    c[k >> 2] = (c[k >> 2] | 0) + 1;
    if ((c[d + 36 >> 2] | 0) == 1 ? (c[d + 24 >> 2] | 0) == 2 : 0) {
     a[d + 54 >> 0] = 1;
     if (h) break;
    } else j = 16;
    if ((j | 0) == 16 ? h : 0) break;
    c[f >> 2] = 4;
    break a;
   } while (0);
   c[f >> 2] = 3;
   break;
  }
  if ((f | 0) == 1) c[d + 32 >> 2] = 1;
 } while (0);
 return;
}

function Yg(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 64 | 0;
 k = s + 56 | 0;
 j = s + 52 | 0;
 r = s + 48 | 0;
 l = s + 44 | 0;
 m = s + 40 | 0;
 n = s + 36 | 0;
 o = s + 32 | 0;
 q = s + 8 | 0;
 p = s;
 a : do if (!(c[f + 4 >> 2] & 1)) {
  c[r >> 2] = -1;
  q = c[(c[b >> 2] | 0) + 16 >> 2] | 0;
  c[l >> 2] = c[d >> 2];
  c[m >> 2] = c[e >> 2];
  c[j >> 2] = c[l >> 2];
  c[k >> 2] = c[m >> 2];
  j = rb[q & 63](b, j, k, f, g, r) | 0;
  c[d >> 2] = j;
  switch (c[r >> 2] | 0) {
  case 0:
   {
    a[h >> 0] = 0;
    break a;
   }
  case 1:
   {
    a[h >> 0] = 1;
    break a;
   }
  default:
   {
    a[h >> 0] = 1;
    c[g >> 2] = 4;
    break a;
   }
  }
 } else {
  b = tf(f) | 0;
  c[n >> 2] = b;
  j = Fk(n, 9320) | 0;
  co(b) | 0;
  b = tf(f) | 0;
  c[o >> 2] = b;
  r = Fk(o, 9476) | 0;
  co(b) | 0;
  qb[c[(c[r >> 2] | 0) + 24 >> 2] & 63](q, r);
  qb[c[(c[r >> 2] | 0) + 28 >> 2] & 63](q + 12 | 0, r);
  c[p >> 2] = c[e >> 2];
  c[k >> 2] = c[p >> 2];
  a[h >> 0] = (Cm(d, k, q, q + 24 | 0, j, g, 1) | 0) == (q | 0) & 1;
  j = c[d >> 2] | 0;
  gf(q + 12 | 0);
  gf(q);
 } while (0);
 i = s;
 return j | 0;
}

function Jg(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 64 | 0;
 k = s + 56 | 0;
 j = s + 52 | 0;
 r = s + 48 | 0;
 l = s + 44 | 0;
 m = s + 40 | 0;
 n = s + 36 | 0;
 o = s + 32 | 0;
 q = s + 8 | 0;
 p = s;
 a : do if (!(c[f + 4 >> 2] & 1)) {
  c[r >> 2] = -1;
  q = c[(c[b >> 2] | 0) + 16 >> 2] | 0;
  c[l >> 2] = c[d >> 2];
  c[m >> 2] = c[e >> 2];
  c[j >> 2] = c[l >> 2];
  c[k >> 2] = c[m >> 2];
  j = rb[q & 63](b, j, k, f, g, r) | 0;
  c[d >> 2] = j;
  switch (c[r >> 2] | 0) {
  case 0:
   {
    a[h >> 0] = 0;
    break a;
   }
  case 1:
   {
    a[h >> 0] = 1;
    break a;
   }
  default:
   {
    a[h >> 0] = 1;
    c[g >> 2] = 4;
    break a;
   }
  }
 } else {
  b = tf(f) | 0;
  c[n >> 2] = b;
  j = Fk(n, 9328) | 0;
  co(b) | 0;
  b = tf(f) | 0;
  c[o >> 2] = b;
  r = Fk(o, 9468) | 0;
  co(b) | 0;
  qb[c[(c[r >> 2] | 0) + 24 >> 2] & 63](q, r);
  qb[c[(c[r >> 2] | 0) + 28 >> 2] & 63](q + 12 | 0, r);
  c[p >> 2] = c[e >> 2];
  c[k >> 2] = c[p >> 2];
  a[h >> 0] = (rm(d, k, q, q + 24 | 0, j, g, 1) | 0) == (q | 0) & 1;
  j = c[d >> 2] | 0;
  Xe(q + 12 | 0);
  Xe(q);
 } while (0);
 i = s;
 return j | 0;
}

function nc(d, e, f, g) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 64 | 0;
 q = r;
 p = c[d >> 2] | 0;
 o = d + (c[p + -8 >> 2] | 0) | 0;
 p = c[p + -4 >> 2] | 0;
 c[q >> 2] = f;
 c[q + 4 >> 2] = d;
 c[q + 8 >> 2] = e;
 c[q + 12 >> 2] = g;
 g = q + 16 | 0;
 d = q + 20 | 0;
 e = q + 24 | 0;
 h = q + 28 | 0;
 j = q + 32 | 0;
 k = q + 40 | 0;
 l = (p | 0) == (f | 0);
 m = g;
 n = m + 36 | 0;
 do {
  c[m >> 2] = 0;
  m = m + 4 | 0;
 } while ((m | 0) < (n | 0));
 b[g + 36 >> 1] = 0;
 a[g + 38 >> 0] = 0;
 a : do if (l) {
  c[q + 48 >> 2] = 1;
  yb[c[(c[f >> 2] | 0) + 20 >> 2] & 7](f, q, o, o, 1, 0);
  g = (c[e >> 2] | 0) == 1 ? o : 0;
 } else {
  nb[c[(c[p >> 2] | 0) + 24 >> 2] & 3](p, q, o, 1, 0);
  switch (c[q + 36 >> 2] | 0) {
  case 0:
   {
    g = (c[k >> 2] | 0) == 1 & (c[h >> 2] | 0) == 1 & (c[j >> 2] | 0) == 1 ? c[d >> 2] | 0 : 0;
    break a;
   }
  case 1:
   break;
  default:
   {
    g = 0;
    break a;
   }
  }
  if ((c[e >> 2] | 0) != 1 ? !((c[k >> 2] | 0) == 0 & (c[h >> 2] | 0) == 1 & (c[j >> 2] | 0) == 1) : 0) {
   g = 0;
   break;
  }
  g = c[g >> 2] | 0;
 } while (0);
 i = r;
 return g | 0;
}

function Md(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 224 | 0;
 o = s + 80 | 0;
 r = s + 96 | 0;
 q = s;
 p = s + 136 | 0;
 f = r;
 g = f + 40 | 0;
 do {
  c[f >> 2] = 0;
  f = f + 4 | 0;
 } while ((f | 0) < (g | 0));
 c[o >> 2] = c[e >> 2];
 if ((ce(0, d, o, q, r) | 0) < 0) e = -1; else {
  if ((c[b + 76 >> 2] | 0) > -1) m = rd(b) | 0; else m = 0;
  e = c[b >> 2] | 0;
  n = e & 32;
  if ((a[b + 74 >> 0] | 0) < 1) c[b >> 2] = e & -33;
  e = b + 48 | 0;
  if (!(c[e >> 2] | 0)) {
   g = b + 44 | 0;
   h = c[g >> 2] | 0;
   c[g >> 2] = p;
   j = b + 28 | 0;
   c[j >> 2] = p;
   k = b + 20 | 0;
   c[k >> 2] = p;
   c[e >> 2] = 80;
   l = b + 16 | 0;
   c[l >> 2] = p + 80;
   f = ce(b, d, o, q, r) | 0;
   if (h) {
    mb[c[b + 36 >> 2] & 31](b, 0, 0) | 0;
    f = (c[k >> 2] | 0) == 0 ? -1 : f;
    c[g >> 2] = h;
    c[e >> 2] = 0;
    c[l >> 2] = 0;
    c[j >> 2] = 0;
    c[k >> 2] = 0;
   }
  } else f = ce(b, d, o, q, r) | 0;
  e = c[b >> 2] | 0;
  c[b >> 2] = e | n;
  if (m) sd(b);
  e = (e & 32 | 0) == 0 ? f : -1;
 }
 i = s;
 return e | 0;
}

function Ne(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 32 | 0;
 p = s + 16 | 0;
 e = s + 8 | 0;
 o = s + 4 | 0;
 n = s;
 q = (d | 0) == -1;
 a : do if (!q) {
  a[e >> 0] = d;
  if (a[b + 44 >> 0] | 0) if ((Gd(e, 1, 1, c[b + 32 >> 2] | 0) | 0) == 1) {
   r = 11;
   break;
  } else {
   e = -1;
   break;
  }
  c[o >> 2] = p;
  m = e + 1 | 0;
  g = b + 36 | 0;
  h = b + 40 | 0;
  j = p + 8 | 0;
  k = p;
  l = b + 32 | 0;
  while (1) {
   b = c[g >> 2] | 0;
   b = wb[c[(c[b >> 2] | 0) + 12 >> 2] & 15](b, c[h >> 2] | 0, e, m, n, p, j, o) | 0;
   if ((c[n >> 2] | 0) == (e | 0)) {
    e = -1;
    break a;
   }
   if ((b | 0) == 3) break;
   f = (b | 0) == 1;
   if (b >>> 0 >= 2) {
    e = -1;
    break a;
   }
   b = (c[o >> 2] | 0) - k | 0;
   if ((Gd(p, 1, b, c[l >> 2] | 0) | 0) != (b | 0)) {
    e = -1;
    break a;
   }
   if (f) e = f ? c[n >> 2] | 0 : e; else {
    r = 11;
    break a;
   }
  }
  if ((Gd(e, 1, 1, c[l >> 2] | 0) | 0) != 1) e = -1; else r = 11;
 } else r = 11; while (0);
 if ((r | 0) == 11) e = q ? 0 : d;
 i = s;
 return e | 0;
}

function Ce(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 32 | 0;
 p = s + 16 | 0;
 e = s + 8 | 0;
 o = s + 4 | 0;
 n = s;
 q = (d | 0) == -1;
 a : do if (!q) {
  c[e >> 2] = d;
  if (a[b + 44 >> 0] | 0) if ((Gd(e, 4, 1, c[b + 32 >> 2] | 0) | 0) == 1) {
   r = 11;
   break;
  } else {
   e = -1;
   break;
  }
  c[o >> 2] = p;
  l = e + 4 | 0;
  m = b + 36 | 0;
  g = b + 40 | 0;
  h = p + 8 | 0;
  j = p;
  k = b + 32 | 0;
  while (1) {
   b = c[m >> 2] | 0;
   b = wb[c[(c[b >> 2] | 0) + 12 >> 2] & 15](b, c[g >> 2] | 0, e, l, n, p, h, o) | 0;
   if ((c[n >> 2] | 0) == (e | 0)) {
    e = -1;
    break a;
   }
   if ((b | 0) == 3) break;
   f = (b | 0) == 1;
   if (b >>> 0 >= 2) {
    e = -1;
    break a;
   }
   b = (c[o >> 2] | 0) - j | 0;
   if ((Gd(p, 1, b, c[k >> 2] | 0) | 0) != (b | 0)) {
    e = -1;
    break a;
   }
   if (f) e = f ? c[n >> 2] | 0 : e; else {
    r = 11;
    break a;
   }
  }
  if ((Gd(e, 1, 1, c[k >> 2] | 0) | 0) != 1) e = -1; else r = 11;
 } else r = 11; while (0);
 if ((r | 0) == 11) e = q ? 0 : d;
 i = s;
 return e | 0;
}

function Sj(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0;
 g = a[b >> 0] | 0;
 i = b + 4 | 0;
 h = c[i >> 2] | 0;
 a : do if (((g & 1) == 0 ? (g & 255) >>> 1 : h) | 0) {
  if ((d | 0) != (e | 0)) {
   g = e + -4 | 0;
   if (g >>> 0 > d >>> 0) {
    h = d;
    do {
     j = c[h >> 2] | 0;
     c[h >> 2] = c[g >> 2];
     c[g >> 2] = j;
     h = h + 4 | 0;
     g = g + -4 | 0;
    } while (h >>> 0 < g >>> 0);
   }
   g = a[b >> 0] | 0;
   h = c[i >> 2] | 0;
  }
  j = (g & 1) == 0;
  i = j ? b + 1 | 0 : c[b + 8 >> 2] | 0;
  e = e + -4 | 0;
  b = i + (j ? (g & 255) >>> 1 : h) | 0;
  h = a[i >> 0] | 0;
  g = h << 24 >> 24 < 1 | h << 24 >> 24 == 127;
  b : do if (e >>> 0 > d >>> 0) {
   while (1) {
    if (!g ? (h << 24 >> 24 | 0) != (c[d >> 2] | 0) : 0) break;
    i = (b - i | 0) > 1 ? i + 1 | 0 : i;
    d = d + 4 | 0;
    h = a[i >> 0] | 0;
    g = h << 24 >> 24 < 1 | h << 24 >> 24 == 127;
    if (d >>> 0 >= e >>> 0) break b;
   }
   c[f >> 2] = 4;
   break a;
  } while (0);
  if (!g ? ((c[e >> 2] | 0) + -1 | 0) >>> 0 >= h << 24 >> 24 >>> 0 : 0) c[f >> 2] = 4;
 } while (0);
 return;
}

function md(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 g = k;
 a : do if (!e) g = 0; else {
  do if (f) {
   j = (b | 0) == 0 ? g : b;
   g = a[e >> 0] | 0;
   b = g & 255;
   if (g << 24 >> 24 > -1) {
    c[j >> 2] = b;
    g = g << 24 >> 24 != 0 & 1;
    break a;
   }
   g = b + -194 | 0;
   if (g >>> 0 <= 50) {
    b = e + 1 | 0;
    h = c[2340 + (g << 2) >> 2] | 0;
    if (f >>> 0 < 4 ? (h & -2147483648 >>> ((f * 6 | 0) + -6 | 0) | 0) != 0 : 0) break;
    g = d[b >> 0] | 0;
    f = g >>> 3;
    if ((f + -16 | f + (h >> 26)) >>> 0 <= 7) {
     g = g + -128 | h << 6;
     if ((g | 0) >= 0) {
      c[j >> 2] = g;
      g = 2;
      break a;
     }
     b = d[e + 2 >> 0] | 0;
     if ((b & 192 | 0) == 128) {
      b = b + -128 | g << 6;
      if ((b | 0) >= 0) {
       c[j >> 2] = b;
       g = 3;
       break a;
      }
      g = d[e + 3 >> 0] | 0;
      if ((g & 192 | 0) == 128) {
       c[j >> 2] = g + -128 | b << 6;
       g = 4;
       break a;
      }
     }
    }
   }
  } while (0);
  c[(Mc() | 0) >> 2] = 84;
  g = -1;
 } while (0);
 i = k;
 return g | 0;
}

function Td(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 h = d & 255;
 f = (e | 0) != 0;
 a : do if (f & (b & 3 | 0) != 0) {
  g = d & 255;
  while (1) {
   if ((a[b >> 0] | 0) == g << 24 >> 24) {
    i = 6;
    break a;
   }
   b = b + 1 | 0;
   e = e + -1 | 0;
   f = (e | 0) != 0;
   if (!(f & (b & 3 | 0) != 0)) {
    i = 5;
    break;
   }
  }
 } else i = 5; while (0);
 if ((i | 0) == 5) if (f) i = 6; else e = 0;
 b : do if ((i | 0) == 6) {
  g = d & 255;
  if ((a[b >> 0] | 0) != g << 24 >> 24) {
   f = $(h, 16843009) | 0;
   c : do if (e >>> 0 > 3) while (1) {
    h = c[b >> 2] ^ f;
    if ((h & -2139062144 ^ -2139062144) & h + -16843009) break;
    b = b + 4 | 0;
    e = e + -4 | 0;
    if (e >>> 0 <= 3) {
     i = 11;
     break c;
    }
   } else i = 11; while (0);
   if ((i | 0) == 11) if (!e) {
    e = 0;
    break;
   }
   while (1) {
    if ((a[b >> 0] | 0) == g << 24 >> 24) break b;
    b = b + 1 | 0;
    e = e + -1 | 0;
    if (!e) {
     e = 0;
     break;
    }
   }
  }
 } while (0);
 return ((e | 0) != 0 ? b : 0) | 0;
}

function zh(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 if (d & 2048) {
  a[b >> 0] = 43;
  b = b + 1 | 0;
 }
 if (d & 1024) {
  a[b >> 0] = 35;
  b = b + 1 | 0;
 }
 h = d & 260;
 f = d >>> 14;
 i = (h | 0) == 260;
 if (i) g = 0; else {
  a[b >> 0] = 46;
  a[b + 1 >> 0] = 42;
  b = b + 2 | 0;
  g = 1;
 }
 d = a[c >> 0] | 0;
 if (d << 24 >> 24) {
  e = b;
  while (1) {
   c = c + 1 | 0;
   b = e + 1 | 0;
   a[e >> 0] = d;
   d = a[c >> 0] | 0;
   if (!(d << 24 >> 24)) break; else e = b;
  }
 }
 a : do switch (h | 0) {
 case 4:
  if (!(f & 1)) {
   a[b >> 0] = 102;
   break a;
  } else {
   a[b >> 0] = 70;
   break a;
  }
 case 256:
  if (!(f & 1)) {
   a[b >> 0] = 101;
   break a;
  } else {
   a[b >> 0] = 69;
   break a;
  }
 default:
  {
   d = (f & 1 | 0) != 0;
   if (i) if (d) {
    a[b >> 0] = 65;
    break a;
   } else {
    a[b >> 0] = 97;
    break a;
   } else if (d) {
    a[b >> 0] = 71;
    break a;
   } else {
    a[b >> 0] = 103;
    break a;
   }
  }
 } while (0);
 return g | 0;
}

function Se(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 32 | 0;
 l = m + 16 | 0;
 k = m + 4 | 0;
 f = m + 8 | 0;
 g = m;
 h = b + 52 | 0;
 e = (a[h >> 0] | 0) != 0;
 a : do if ((d | 0) == -1) if (e) d = -1; else {
  d = c[b + 48 >> 2] | 0;
  a[h >> 0] = (d | 0) != -1 & 1;
 } else {
  j = b + 48 | 0;
  b : do if (e) {
   a[f >> 0] = c[j >> 2];
   e = c[b + 36 >> 2] | 0;
   switch (wb[c[(c[e >> 2] | 0) + 12 >> 2] & 15](e, c[b + 40 >> 2] | 0, f, f + 1 | 0, g, l, l + 8 | 0, k) | 0) {
   case 1:
   case 2:
    {
     d = -1;
     break a;
    }
   case 3:
    {
     a[l >> 0] = c[j >> 2];
     c[k >> 2] = l + 1;
     break;
    }
   default:
    {}
   }
   e = b + 32 | 0;
   while (1) {
    f = c[k >> 2] | 0;
    if (f >>> 0 <= l >>> 0) break b;
    b = f + -1 | 0;
    c[k >> 2] = b;
    if ((Kd(a[b >> 0] | 0, c[e >> 2] | 0) | 0) == -1) {
     d = -1;
     break a;
    }
   }
  } while (0);
  c[j >> 2] = d;
  a[h >> 0] = 1;
 } while (0);
 i = m;
 return d | 0;
}

function He(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 32 | 0;
 l = m + 16 | 0;
 k = m + 8 | 0;
 f = m + 4 | 0;
 g = m;
 h = b + 52 | 0;
 e = (a[h >> 0] | 0) != 0;
 a : do if ((d | 0) == -1) if (e) d = -1; else {
  d = c[b + 48 >> 2] | 0;
  a[h >> 0] = (d | 0) != -1 & 1;
 } else {
  j = b + 48 | 0;
  b : do if (e) {
   c[f >> 2] = c[j >> 2];
   e = c[b + 36 >> 2] | 0;
   switch (wb[c[(c[e >> 2] | 0) + 12 >> 2] & 15](e, c[b + 40 >> 2] | 0, f, f + 4 | 0, g, l, l + 8 | 0, k) | 0) {
   case 1:
   case 2:
    {
     d = -1;
     break a;
    }
   case 3:
    {
     a[l >> 0] = c[j >> 2];
     c[k >> 2] = l + 1;
     break;
    }
   default:
    {}
   }
   e = b + 32 | 0;
   while (1) {
    f = c[k >> 2] | 0;
    if (f >>> 0 <= l >>> 0) break b;
    b = f + -1 | 0;
    c[k >> 2] = b;
    if ((Kd(a[b >> 0] | 0, c[e >> 2] | 0) | 0) == -1) {
     d = -1;
     break a;
    }
   }
  } while (0);
  c[j >> 2] = d;
  a[h >> 0] = 1;
 } while (0);
 i = m;
 return d | 0;
}

function vd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 m = i;
 i = i + 48 | 0;
 h = m + 16 | 0;
 g = m;
 f = m + 32 | 0;
 c[f >> 2] = d;
 j = f + 4 | 0;
 l = b + 48 | 0;
 n = c[l >> 2] | 0;
 c[j >> 2] = e - ((n | 0) != 0 & 1);
 k = b + 44 | 0;
 c[f + 8 >> 2] = c[k >> 2];
 c[f + 12 >> 2] = n;
 if (!(c[574] | 0)) {
  c[h >> 2] = c[b + 60 >> 2];
  c[h + 4 >> 2] = f;
  c[h + 8 >> 2] = 2;
  f = Sc(ib(145, h | 0) | 0) | 0;
 } else {
  db(95, b | 0);
  c[g >> 2] = c[b + 60 >> 2];
  c[g + 4 >> 2] = f;
  c[g + 8 >> 2] = 2;
  f = Sc(ib(145, g | 0) | 0) | 0;
  Xa(0);
 }
 if ((f | 0) >= 1) {
  j = c[j >> 2] | 0;
  if (f >>> 0 > j >>> 0) {
   h = c[k >> 2] | 0;
   g = b + 4 | 0;
   c[g >> 2] = h;
   c[b + 8 >> 2] = h + (f - j);
   if (!(c[l >> 2] | 0)) f = e; else {
    c[g >> 2] = h + 1;
    a[d + (e + -1) >> 0] = a[h >> 0] | 0;
    f = e;
   }
  }
 } else {
  c[b >> 2] = c[b >> 2] | f & 48 ^ 16;
  c[b + 8 >> 2] = 0;
  c[b + 4 >> 2] = 0;
 }
 i = m;
 return f | 0;
}

function Om(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 o = i;
 i = i + 16 | 0;
 n = o;
 j = c[b >> 2] | 0;
 a : do if (!j) j = 0; else {
  p = d;
  l = f - p >> 2;
  m = g + 12 | 0;
  g = c[m >> 2] | 0;
  l = (g | 0) > (l | 0) ? g - l | 0 : 0;
  g = e;
  p = g - p | 0;
  k = p >> 2;
  if ((p | 0) > 0 ? (mb[c[(c[j >> 2] | 0) + 48 >> 2] & 31](j, d, k) | 0) != (k | 0) : 0) {
   c[b >> 2] = 0;
   j = 0;
   break;
  }
  do if ((l | 0) > 0) {
   ff(n, l, h);
   if ((mb[c[(c[j >> 2] | 0) + 48 >> 2] & 31](j, (a[n >> 0] & 1) == 0 ? n + 4 | 0 : c[n + 8 >> 2] | 0, l) | 0) == (l | 0)) {
    gf(n);
    break;
   } else {
    c[b >> 2] = 0;
    gf(n);
    j = 0;
    break a;
   }
  } while (0);
  p = f - g | 0;
  f = p >> 2;
  if ((p | 0) > 0 ? (mb[c[(c[j >> 2] | 0) + 48 >> 2] & 31](j, e, f) | 0) != (f | 0) : 0) {
   c[b >> 2] = 0;
   j = 0;
   break;
  }
  c[m >> 2] = 0;
 } while (0);
 i = o;
 return j | 0;
}
function af(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 if (d >>> 0 > 4294967279) Dc(b);
 e = a[b >> 0] | 0;
 if (!(e & 1)) f = 10; else {
  e = c[b >> 2] | 0;
  f = (e & -2) + -1 | 0;
  e = e & 255;
 }
 if (!(e & 1)) j = (e & 255) >>> 1; else j = c[b + 4 >> 2] | 0;
 d = j >>> 0 > d >>> 0 ? j : d;
 if (d >>> 0 < 11) i = 10; else i = (d + 16 & -16) + -1 | 0;
 do if ((i | 0) != (f | 0)) {
  do if ((i | 0) != 10) {
   d = Rb(i + 1 | 0) | 0;
   if (!(e & 1)) {
    f = 1;
    g = b + 1 | 0;
    h = 0;
    break;
   } else {
    f = 1;
    g = c[b + 8 >> 2] | 0;
    h = 1;
    break;
   }
  } else {
   d = b + 1 | 0;
   f = 0;
   g = c[b + 8 >> 2] | 0;
   h = 1;
  } while (0);
  if (!(e & 1)) e = (e & 255) >>> 1; else e = c[b + 4 >> 2] | 0;
  ko(d | 0, g | 0, e + 1 | 0) | 0;
  if (h) Sb(g);
  if (f) {
   c[b >> 2] = i + 1 | 1;
   c[b + 4 >> 2] = j;
   c[b + 8 >> 2] = d;
   break;
  } else {
   a[b >> 0] = j << 1;
   break;
  }
 } while (0);
 return;
}

function kf(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 if (d >>> 0 > 1073741807) Dc(b);
 e = a[b >> 0] | 0;
 if (!(e & 1)) f = 1; else {
  e = c[b >> 2] | 0;
  f = (e & -2) + -1 | 0;
  e = e & 255;
 }
 if (!(e & 1)) j = (e & 255) >>> 1; else j = c[b + 4 >> 2] | 0;
 d = j >>> 0 > d >>> 0 ? j : d;
 if (d >>> 0 < 2) i = 1; else i = (d + 4 & -4) + -1 | 0;
 do if ((i | 0) != (f | 0)) {
  do if ((i | 0) != 1) {
   d = Rb((i << 2) + 4 | 0) | 0;
   if (!(e & 1)) {
    f = 1;
    g = b + 4 | 0;
    h = 0;
    break;
   } else {
    f = 1;
    g = c[b + 8 >> 2] | 0;
    h = 1;
    break;
   }
  } else {
   d = b + 4 | 0;
   f = 0;
   g = c[b + 8 >> 2] | 0;
   h = 1;
  } while (0);
  if (!(e & 1)) e = (e & 255) >>> 1; else e = c[b + 4 >> 2] | 0;
  Xd(d, g, e + 1 | 0) | 0;
  if (h) Sb(g);
  if (f) {
   c[b >> 2] = i + 1 | 1;
   c[b + 4 >> 2] = j;
   c[b + 8 >> 2] = d;
   break;
  } else {
   a[b >> 0] = j << 1;
   break;
  }
 } while (0);
 return;
}

function Nb(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 o = i;
 i = i + 16 | 0;
 n = o;
 j = c[b >> 2] | 0;
 a : do if (!j) j = 0; else {
  p = d;
  l = f - p | 0;
  m = g + 12 | 0;
  k = c[m >> 2] | 0;
  l = (k | 0) > (l | 0) ? k - l | 0 : 0;
  k = e;
  g = k - p | 0;
  if ((g | 0) > 0 ? (mb[c[(c[j >> 2] | 0) + 48 >> 2] & 31](j, d, g) | 0) != (g | 0) : 0) {
   c[b >> 2] = 0;
   j = 0;
   break;
  }
  do if ((l | 0) > 0) {
   We(n, l, h);
   if ((mb[c[(c[j >> 2] | 0) + 48 >> 2] & 31](j, (a[n >> 0] & 1) == 0 ? n + 1 | 0 : c[n + 8 >> 2] | 0, l) | 0) == (l | 0)) {
    Xe(n);
    break;
   } else {
    c[b >> 2] = 0;
    Xe(n);
    j = 0;
    break a;
   }
  } while (0);
  f = f - k | 0;
  if ((f | 0) > 0 ? (mb[c[(c[j >> 2] | 0) + 48 >> 2] & 31](j, e, f) | 0) != (f | 0) : 0) {
   c[b >> 2] = 0;
   j = 0;
   break;
  }
  c[m >> 2] = 0;
 } while (0);
 i = o;
 return j | 0;
}

function fm(b) {
 b = b | 0;
 if ((a[1808] | 0) == 0 ? (Aa(1808) | 0) != 0 : 0) {
  if ((a[1816] | 0) == 0 ? (Aa(1816) | 0) != 0 : 0) {
   b = 11124;
   do {
    c[b >> 2] = 0;
    c[b + 4 >> 2] = 0;
    c[b + 8 >> 2] = 0;
    b = b + 12 | 0;
   } while ((b | 0) != 11412);
   $a(104, 0, n | 0) | 0;
   Ga(1816);
  }
  hf(11124, 11412) | 0;
  hf(11136, 11444) | 0;
  hf(11148, 11480) | 0;
  hf(11160, 11504) | 0;
  hf(11172, 11528) | 0;
  hf(11184, 11544) | 0;
  hf(11196, 11564) | 0;
  hf(11208, 11584) | 0;
  hf(11220, 11612) | 0;
  hf(11232, 11652) | 0;
  hf(11244, 11684) | 0;
  hf(11256, 11720) | 0;
  hf(11268, 11756) | 0;
  hf(11280, 11772) | 0;
  hf(11292, 11788) | 0;
  hf(11304, 11804) | 0;
  hf(11316, 11528) | 0;
  hf(11328, 11820) | 0;
  hf(11340, 11836) | 0;
  hf(11352, 11852) | 0;
  hf(11364, 11868) | 0;
  hf(11376, 11884) | 0;
  hf(11388, 11900) | 0;
  hf(11400, 11916) | 0;
  c[2983] = 11124;
  Ga(1808);
 }
 return c[2983] | 0;
}

function em(b) {
 b = b | 0;
 if ((a[1792] | 0) == 0 ? (Aa(1792) | 0) != 0 : 0) {
  if ((a[1800] | 0) == 0 ? (Aa(1800) | 0) != 0 : 0) {
   b = 10832;
   do {
    c[b >> 2] = 0;
    c[b + 4 >> 2] = 0;
    c[b + 8 >> 2] = 0;
    b = b + 12 | 0;
   } while ((b | 0) != 11120);
   $a(103, 0, n | 0) | 0;
   Ga(1800);
  }
  Ye(10832, 21425) | 0;
  Ye(10844, 21433) | 0;
  Ye(10856, 21442) | 0;
  Ye(10868, 21448) | 0;
  Ye(10880, 21454) | 0;
  Ye(10892, 21458) | 0;
  Ye(10904, 21463) | 0;
  Ye(10916, 21468) | 0;
  Ye(10928, 21475) | 0;
  Ye(10940, 21485) | 0;
  Ye(10952, 21493) | 0;
  Ye(10964, 21502) | 0;
  Ye(10976, 21511) | 0;
  Ye(10988, 21515) | 0;
  Ye(11e3, 21519) | 0;
  Ye(11012, 21523) | 0;
  Ye(11024, 21454) | 0;
  Ye(11036, 21527) | 0;
  Ye(11048, 21531) | 0;
  Ye(11060, 21535) | 0;
  Ye(11072, 21539) | 0;
  Ye(11084, 21543) | 0;
  Ye(11096, 21547) | 0;
  Ye(11108, 21551) | 0;
  c[2780] = 10832;
  Ga(1792);
 }
 return c[2780] | 0;
}

function uc(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 if ((b | 0) == (c[d + 8 >> 2] | 0)) oc(0, d, e, f, g); else {
  m = d + 52 | 0;
  n = a[m >> 0] | 0;
  o = d + 53 | 0;
  p = a[o >> 0] | 0;
  l = c[b + 12 >> 2] | 0;
  i = b + 16 + (l << 3) | 0;
  a[m >> 0] = 0;
  a[o >> 0] = 0;
  qc(b + 16 | 0, d, e, f, g, h);
  a : do if ((l | 0) > 1) {
   j = d + 24 | 0;
   k = b + 8 | 0;
   l = d + 54 | 0;
   b = b + 24 | 0;
   do {
    if (a[l >> 0] | 0) break a;
    if (!(a[m >> 0] | 0)) {
     if ((a[o >> 0] | 0) != 0 ? (c[k >> 2] & 1 | 0) == 0 : 0) break a;
    } else {
     if ((c[j >> 2] | 0) == 1) break a;
     if (!(c[k >> 2] & 2)) break a;
    }
    a[m >> 0] = 0;
    a[o >> 0] = 0;
    qc(b, d, e, f, g, h);
    b = b + 8 | 0;
   } while (b >>> 0 < i >>> 0);
  } while (0);
  a[m >> 0] = n;
  a[o >> 0] = p;
 }
 return;
}

function Ac() {
 var a = 0, b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0;
 f = i;
 i = i + 48 | 0;
 h = f + 32 | 0;
 d = f + 24 | 0;
 j = f + 16 | 0;
 g = f;
 f = f + 36 | 0;
 a = Qb() | 0;
 if ((a | 0) != 0 ? (e = c[a >> 2] | 0, (e | 0) != 0) : 0) {
  a = e + 48 | 0;
  b = c[a >> 2] | 0;
  a = c[a + 4 >> 2] | 0;
  if (!((b & -256 | 0) == 1126902528 & (a | 0) == 1129074247)) {
   c[d >> 2] = c[573];
   Pb(14477, d);
  }
  if ((b | 0) == 1126902529 & (a | 0) == 1129074247) a = c[e + 44 >> 2] | 0; else a = e + 80 | 0;
  c[f >> 2] = a;
  e = c[e >> 2] | 0;
  a = c[e + 4 >> 2] | 0;
  if (mb[c[(c[24 >> 2] | 0) + 16 >> 2] & 31](24, e, f) | 0) {
   j = c[f >> 2] | 0;
   f = c[573] | 0;
   j = tb[c[(c[j >> 2] | 0) + 8 >> 2] & 63](j) | 0;
   c[g >> 2] = f;
   c[g + 4 >> 2] = a;
   c[g + 8 >> 2] = j;
   Pb(14391, g);
  } else {
   c[j >> 2] = c[573];
   c[j + 4 >> 2] = a;
   Pb(14436, j);
  }
 }
 Pb(14515, h);
}

function $n(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 j = k;
 a : do if ((a | 0) == (b | 0)) {
  c[d >> 2] = 4;
  a = 0;
 } else {
  g = Mc() | 0;
  h = c[g >> 2] | 0;
  c[g >> 2] = 0;
  a = Gc(a, j, e, Vg() | 0) | 0;
  e = D;
  f = c[g >> 2] | 0;
  if (!f) c[g >> 2] = h;
  if ((c[j >> 2] | 0) != (b | 0)) {
   c[d >> 2] = 4;
   a = 0;
   break;
  }
  do if ((f | 0) == 34) {
   c[d >> 2] = 4;
   if ((e | 0) > 0 | (e | 0) == 0 & a >>> 0 > 0) {
    a = 2147483647;
    break a;
   }
  } else {
   if ((e | 0) < -1 | (e | 0) == -1 & a >>> 0 < 2147483648) {
    c[d >> 2] = 4;
    break;
   }
   if ((e | 0) > 0 | (e | 0) == 0 & a >>> 0 > 2147483647) {
    c[d >> 2] = 4;
    a = 2147483647;
    break a;
   } else break a;
  } while (0);
  a = -2147483648;
 } while (0);
 i = k;
 return a | 0;
}

function Vm(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 h = d;
 f = a[b >> 0] | 0;
 if (!(f & 1)) {
  g = 1;
  k = (f & 255) >>> 1;
 } else {
  f = c[b >> 2] | 0;
  g = (f & -2) + -1 | 0;
  k = c[b + 4 >> 2] | 0;
  f = f & 255;
 }
 j = e - h >> 2;
 do if (j) {
  if ((g - k | 0) >>> 0 < j >>> 0) {
   nf(b, g, k + j - g | 0, k, k, 0, 0);
   f = a[b >> 0] | 0;
  }
  if (!(f & 1)) i = b + 4 | 0; else i = c[b + 8 >> 2] | 0;
  h = k + ((e - h | 0) >>> 2) | 0;
  if ((d | 0) != (e | 0)) {
   f = d;
   g = i + (k << 2) | 0;
   while (1) {
    c[g >> 2] = c[f >> 2];
    f = f + 4 | 0;
    if ((f | 0) == (e | 0)) break; else g = g + 4 | 0;
   }
  }
  c[i + (h << 2) >> 2] = 0;
  f = k + j | 0;
  if (!(a[b >> 0] & 1)) {
   a[b >> 0] = f << 1;
   break;
  } else {
   c[b + 4 >> 2] = f;
   break;
  }
 } while (0);
 return b | 0;
}

function Tm(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 h = d;
 f = a[b >> 0] | 0;
 if (!(f & 1)) {
  g = 10;
  k = (f & 255) >>> 1;
 } else {
  f = c[b >> 2] | 0;
  g = (f & -2) + -1 | 0;
  k = c[b + 4 >> 2] | 0;
  f = f & 255;
 }
 j = e - h | 0;
 do if ((e | 0) != (d | 0)) {
  if ((g - k | 0) >>> 0 < j >>> 0) {
   df(b, g, k + j - g | 0, k, k, 0, 0);
   f = a[b >> 0] | 0;
  }
  if (!(f & 1)) i = b + 1 | 0; else i = c[b + 8 >> 2] | 0;
  h = e + (k - h) | 0;
  if ((d | 0) != (e | 0)) {
   f = d;
   g = i + k | 0;
   while (1) {
    a[g >> 0] = a[f >> 0] | 0;
    f = f + 1 | 0;
    if ((f | 0) == (e | 0)) break; else g = g + 1 | 0;
   }
  }
  a[i + h >> 0] = 0;
  f = k + j | 0;
  if (!(a[b >> 0] & 1)) {
   a[b >> 0] = f << 1;
   break;
  } else {
   c[b + 4 >> 2] = f;
   break;
  }
 } while (0);
 return b | 0;
}

function Fd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = e + 16 | 0;
 g = c[f >> 2] | 0;
 if (!g) if (!(Bd(e) | 0)) {
  g = c[f >> 2] | 0;
  h = 4;
 } else f = 0; else h = 4;
 a : do if ((h | 0) == 4) {
  i = e + 20 | 0;
  h = c[i >> 2] | 0;
  if ((g - h | 0) >>> 0 < d >>> 0) {
   f = mb[c[e + 36 >> 2] & 31](e, b, d) | 0;
   break;
  }
  b : do if ((a[e + 75 >> 0] | 0) > -1) {
   f = d;
   while (1) {
    if (!f) {
     g = h;
     f = 0;
     break b;
    }
    g = f + -1 | 0;
    if ((a[b + g >> 0] | 0) == 10) break; else f = g;
   }
   if ((mb[c[e + 36 >> 2] & 31](e, b, f) | 0) >>> 0 < f >>> 0) break a;
   d = d - f | 0;
   b = b + f | 0;
   g = c[i >> 2] | 0;
  } else {
   g = h;
   f = 0;
  } while (0);
  ko(g | 0, b | 0, d | 0) | 0;
  c[i >> 2] = (c[i >> 2] | 0) + d;
  f = f + d | 0;
 } while (0);
 return f | 0;
}

function Jh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 h = i;
 i = i + 128 | 0;
 k = h;
 o = h + 116 | 0;
 q = h + 104 | 0;
 j = h + 20 | 0;
 m = h + 16 | 0;
 b = h + 12 | 0;
 n = h + 8 | 0;
 l = h + 4 | 0;
 a[o >> 0] = a[21229] | 0;
 a[o + 1 >> 0] = a[21230] | 0;
 a[o + 2 >> 0] = a[21231] | 0;
 a[o + 3 >> 0] = a[21232] | 0;
 a[o + 4 >> 0] = a[21233] | 0;
 a[o + 5 >> 0] = a[21234] | 0;
 sh(o + 1 | 0, 21235, 0, c[e + 4 >> 2] | 0);
 p = Vg() | 0;
 c[k >> 2] = g;
 o = q + (Mm(q, 12, p, o, k) | 0) | 0;
 p = th(q, o, e) | 0;
 g = tf(e) | 0;
 c[n >> 2] = g;
 Hh(q, p, o, j, m, b, n);
 co(g) | 0;
 c[l >> 2] = c[d >> 2];
 g = c[m >> 2] | 0;
 b = c[b >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 b = Om(k, j, g, b, e, f) | 0;
 i = h;
 return b | 0;
}

function Gh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 h = i;
 i = i + 128 | 0;
 k = h;
 o = h + 116 | 0;
 q = h + 104 | 0;
 j = h + 20 | 0;
 m = h + 16 | 0;
 b = h + 12 | 0;
 n = h + 8 | 0;
 l = h + 4 | 0;
 a[o >> 0] = a[21229] | 0;
 a[o + 1 >> 0] = a[21230] | 0;
 a[o + 2 >> 0] = a[21231] | 0;
 a[o + 3 >> 0] = a[21232] | 0;
 a[o + 4 >> 0] = a[21233] | 0;
 a[o + 5 >> 0] = a[21234] | 0;
 sh(o + 1 | 0, 21235, 1, c[e + 4 >> 2] | 0);
 p = Vg() | 0;
 c[k >> 2] = g;
 o = q + (Mm(q, 12, p, o, k) | 0) | 0;
 p = th(q, o, e) | 0;
 g = tf(e) | 0;
 c[n >> 2] = g;
 Hh(q, p, o, j, m, b, n);
 co(g) | 0;
 c[l >> 2] = c[d >> 2];
 g = c[m >> 2] | 0;
 b = c[b >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 b = Om(k, j, g, b, e, f) | 0;
 i = h;
 return b | 0;
}

function Oh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 h = i;
 i = i + 192 | 0;
 m = h;
 b = h + 180 | 0;
 j = h + 160 | 0;
 k = h + 12 | 0;
 o = h + 8 | 0;
 n = h + 4 | 0;
 a[b >> 0] = a[21243] | 0;
 a[b + 1 >> 0] = a[21244] | 0;
 a[b + 2 >> 0] = a[21245] | 0;
 a[b + 3 >> 0] = a[21246] | 0;
 a[b + 4 >> 0] = a[21247] | 0;
 a[b + 5 >> 0] = a[21248] | 0;
 l = Vg() | 0;
 c[m >> 2] = g;
 b = Mm(j, 20, l, b, m) | 0;
 l = j + b | 0;
 g = th(j, l, e) | 0;
 p = tf(e) | 0;
 c[o >> 2] = p;
 o = Fk(o, 9320) | 0;
 co(p) | 0;
 xb[c[(c[o >> 2] | 0) + 48 >> 2] & 7](o, j, l, k) | 0;
 b = k + (b << 2) | 0;
 c[n >> 2] = c[d >> 2];
 c[m >> 2] = c[n >> 2];
 b = Om(m, k, (g | 0) == (l | 0) ? b : k + (g - j << 2) | 0, b, e, f) | 0;
 i = h;
 return b | 0;
}

function wh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 h = i;
 i = i + 64 | 0;
 k = h;
 o = h + 56 | 0;
 q = h + 44 | 0;
 j = h + 20 | 0;
 m = h + 16 | 0;
 b = h + 12 | 0;
 n = h + 8 | 0;
 l = h + 4 | 0;
 a[o >> 0] = a[21229] | 0;
 a[o + 1 >> 0] = a[21230] | 0;
 a[o + 2 >> 0] = a[21231] | 0;
 a[o + 3 >> 0] = a[21232] | 0;
 a[o + 4 >> 0] = a[21233] | 0;
 a[o + 5 >> 0] = a[21234] | 0;
 sh(o + 1 | 0, 21235, 0, c[e + 4 >> 2] | 0);
 p = Vg() | 0;
 c[k >> 2] = g;
 o = q + (Mm(q, 12, p, o, k) | 0) | 0;
 p = th(q, o, e) | 0;
 g = tf(e) | 0;
 c[n >> 2] = g;
 uh(q, p, o, j, m, b, n);
 co(g) | 0;
 c[l >> 2] = c[d >> 2];
 g = c[m >> 2] | 0;
 b = c[b >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 b = Nb(k, j, g, b, e, f) | 0;
 i = h;
 return b | 0;
}

function rh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 h = i;
 i = i + 64 | 0;
 k = h;
 o = h + 56 | 0;
 q = h + 44 | 0;
 j = h + 20 | 0;
 m = h + 16 | 0;
 b = h + 12 | 0;
 n = h + 8 | 0;
 l = h + 4 | 0;
 a[o >> 0] = a[21229] | 0;
 a[o + 1 >> 0] = a[21230] | 0;
 a[o + 2 >> 0] = a[21231] | 0;
 a[o + 3 >> 0] = a[21232] | 0;
 a[o + 4 >> 0] = a[21233] | 0;
 a[o + 5 >> 0] = a[21234] | 0;
 sh(o + 1 | 0, 21235, 1, c[e + 4 >> 2] | 0);
 p = Vg() | 0;
 c[k >> 2] = g;
 o = q + (Mm(q, 12, p, o, k) | 0) | 0;
 p = th(q, o, e) | 0;
 g = tf(e) | 0;
 c[n >> 2] = g;
 uh(q, p, o, j, m, b, n);
 co(g) | 0;
 c[l >> 2] = c[d >> 2];
 g = c[m >> 2] | 0;
 b = c[b >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 b = Nb(k, j, g, b, e, f) | 0;
 i = h;
 return b | 0;
}

function Od(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 128 | 0;
 g = n + 112 | 0;
 m = n;
 h = m;
 j = 2616;
 k = h + 112 | 0;
 do {
  c[h >> 2] = c[j >> 2];
  h = h + 4 | 0;
  j = j + 4 | 0;
 } while ((h | 0) < (k | 0));
 if ((d + -1 | 0) >>> 0 > 2147483646) if (!d) {
  d = 1;
  l = 4;
 } else {
  c[(Mc() | 0) >> 2] = 75;
  d = -1;
 } else {
  g = b;
  l = 4;
 }
 if ((l | 0) == 4) {
  l = -2 - g | 0;
  l = d >>> 0 > l >>> 0 ? l : d;
  c[m + 48 >> 2] = l;
  b = m + 20 | 0;
  c[b >> 2] = g;
  c[m + 44 >> 2] = g;
  d = g + l | 0;
  g = m + 16 | 0;
  c[g >> 2] = d;
  c[m + 28 >> 2] = d;
  d = Md(m, e, f) | 0;
  if (l) {
   e = c[b >> 2] | 0;
   a[e + (((e | 0) == (c[g >> 2] | 0)) << 31 >> 31) >> 0] = 0;
  }
 }
 i = n;
 return d | 0;
}

function Rc(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 f = b + 104 | 0;
 i = c[f >> 2] | 0;
 if ((i | 0) != 0 ? (c[b + 108 >> 2] | 0) >= (i | 0) : 0) j = 4; else {
  e = Cd(b) | 0;
  if ((e | 0) >= 0) {
   h = c[f >> 2] | 0;
   f = b + 8 | 0;
   if (h) {
    g = c[f >> 2] | 0;
    i = c[b + 4 >> 2] | 0;
    f = g;
    h = h - (c[b + 108 >> 2] | 0) + -1 | 0;
    if ((f - i | 0) > (h | 0)) c[b + 100 >> 2] = i + h; else j = 9;
   } else {
    g = c[f >> 2] | 0;
    f = g;
    j = 9;
   }
   if ((j | 0) == 9) c[b + 100 >> 2] = f;
   f = c[b + 4 >> 2] | 0;
   if (g) {
    b = b + 108 | 0;
    c[b >> 2] = g + 1 - f + (c[b >> 2] | 0);
   }
   f = f + -1 | 0;
   if ((d[f >> 0] | 0 | 0) != (e | 0)) a[f >> 0] = e;
  } else j = 4;
 }
 if ((j | 0) == 4) {
  c[b + 100 >> 2] = 0;
  e = -1;
 }
 return e | 0;
}

function Ch(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 h = i;
 i = i + 80 | 0;
 m = h;
 b = h + 70 | 0;
 j = h + 12 | 0;
 k = h + 32 | 0;
 o = h + 8 | 0;
 n = h + 4 | 0;
 a[b >> 0] = a[21243] | 0;
 a[b + 1 >> 0] = a[21244] | 0;
 a[b + 2 >> 0] = a[21245] | 0;
 a[b + 3 >> 0] = a[21246] | 0;
 a[b + 4 >> 0] = a[21247] | 0;
 a[b + 5 >> 0] = a[21248] | 0;
 l = Vg() | 0;
 c[m >> 2] = g;
 b = Mm(j, 20, l, b, m) | 0;
 l = j + b | 0;
 g = th(j, l, e) | 0;
 p = tf(e) | 0;
 c[o >> 2] = p;
 o = Fk(o, 9328) | 0;
 co(p) | 0;
 xb[c[(c[o >> 2] | 0) + 32 >> 2] & 7](o, j, l, k) | 0;
 b = k + b | 0;
 c[n >> 2] = c[d >> 2];
 c[m >> 2] = c[n >> 2];
 b = Nb(m, k, (g | 0) == (l | 0) ? b : k + (g - j) | 0, b, e, f) | 0;
 i = h;
 return b | 0;
}

function Mb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 32 | 0;
 h = n + 16 | 0;
 m = n + 8 | 0;
 j = n;
 lg(m, b);
 if (a[m >> 0] | 0) {
  f = c[(c[b >> 2] | 0) + -12 >> 2] | 0;
  c[j >> 2] = c[b + (f + 24) >> 2];
  l = b + f | 0;
  k = c[b + (f + 4) >> 2] | 0;
  g = d + e | 0;
  f = b + (f + 76) | 0;
  e = c[f >> 2] | 0;
  if ((e | 0) == -1) {
   c[h >> 2] = tf(l) | 0;
   e = Fk(h, 9328) | 0;
   e = zb[c[(c[e >> 2] | 0) + 28 >> 2] & 15](e, 32) | 0;
   Dk(h);
   e = e << 24 >> 24;
   c[f >> 2] = e;
  }
  c[h >> 2] = c[j >> 2];
  if (!(Nb(h, d, (k & 176 | 0) == 32 ? g : d, g, l, e & 255) | 0)) {
   d = c[(c[b >> 2] | 0) + -12 >> 2] | 0;
   qf(b + d | 0, c[b + (d + 16) >> 2] | 5);
  }
 }
 mg(m);
 i = n;
 return b | 0;
}

function hi(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 16 | 0;
 k = n + 4 | 0;
 l = n;
 m = b + 8 | 0;
 m = tb[c[(c[m >> 2] | 0) + 8 >> 2] & 63](m) | 0;
 b = a[m >> 0] | 0;
 if (!(b & 1)) j = (b & 255) >>> 1; else j = c[m + 4 >> 2] | 0;
 b = a[m + 12 >> 0] | 0;
 if (!(b & 1)) b = (b & 255) >>> 1; else b = c[m + 16 >> 2] | 0;
 do if ((j | 0) != (0 - b | 0)) {
  c[l >> 2] = c[f >> 2];
  c[k >> 2] = c[l >> 2];
  b = rm(e, k, m, m + 24 | 0, h, g, 0) | 0;
  j = c[d >> 2] | 0;
  if ((b | 0) == (m | 0) & (j | 0) == 12) {
   c[d >> 2] = 0;
   break;
  }
  if ((j | 0) < 12 & (b - m | 0) == 12) c[d >> 2] = j + 12;
 } else c[g >> 2] = c[g >> 2] | 4; while (0);
 i = n;
 return;
}

function Gi(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 16 | 0;
 k = n + 4 | 0;
 l = n;
 m = b + 8 | 0;
 m = tb[c[(c[m >> 2] | 0) + 8 >> 2] & 63](m) | 0;
 b = a[m >> 0] | 0;
 if (!(b & 1)) j = (b & 255) >>> 1; else j = c[m + 4 >> 2] | 0;
 b = a[m + 12 >> 0] | 0;
 if (!(b & 1)) b = (b & 255) >>> 1; else b = c[m + 16 >> 2] | 0;
 do if ((j | 0) != (0 - b | 0)) {
  c[l >> 2] = c[f >> 2];
  c[k >> 2] = c[l >> 2];
  b = Cm(e, k, m, m + 24 | 0, h, g, 0) | 0;
  j = c[d >> 2] | 0;
  if ((b | 0) == (m | 0) & (j | 0) == 12) {
   c[d >> 2] = 0;
   break;
  }
  if ((j | 0) < 12 & (b - m | 0) == 12) c[d >> 2] = j + 12;
 } else c[g >> 2] = c[g >> 2] | 4; while (0);
 i = n;
 return;
}

function mk(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0;
 k = i;
 i = i + 16 | 0;
 j = k;
 c[j >> 2] = 0;
 c[j + 4 >> 2] = 0;
 c[j + 8 >> 2] = 0;
 l = a[h >> 0] | 0;
 m = (l & 1) == 0;
 d = m ? h + 1 | 0 : c[h + 8 >> 2] | 0;
 l = m ? (l & 255) >>> 1 : c[h + 4 >> 2] | 0;
 h = d + l | 0;
 if ((l | 0) > 0) do {
  bf(j, a[d >> 0] | 0);
  d = d + 1 | 0;
 } while (d >>> 0 < h >>> 0);
 d = Uc((e | 0) == -1 ? -1 : e << 1, f, g, (a[j >> 0] & 1) == 0 ? j + 1 | 0 : c[j + 8 >> 2] | 0) | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 m = Vd(d) | 0;
 h = d + m | 0;
 if ((m | 0) > 0) do {
  bf(b, a[d >> 0] | 0);
  d = d + 1 | 0;
 } while (d >>> 0 < h >>> 0);
 Xe(j);
 i = k;
 return;
}

function mf(b, d, e, f, g, h, i, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0;
 if ((1073741806 - d | 0) >>> 0 < e >>> 0) Dc(b);
 if (!(a[b >> 0] & 1)) m = b + 4 | 0; else m = c[b + 8 >> 2] | 0;
 if (d >>> 0 < 536870887) {
  k = e + d | 0;
  l = d << 1;
  k = k >>> 0 < l >>> 0 ? l : k;
  k = k >>> 0 < 2 ? 2 : k + 4 & -4;
 } else k = 1073741807;
 l = Rb(k << 2) | 0;
 if (g) Xd(l, m, g) | 0;
 if (i) Xd(l + (g << 2) | 0, j, i) | 0;
 e = f - h | 0;
 if ((e | 0) != (g | 0)) Xd(l + (i + g << 2) | 0, m + (h + g << 2) | 0, e - g | 0) | 0;
 if ((d | 0) != 1) Sb(m);
 c[b + 8 >> 2] = l;
 c[b >> 2] = k | 1;
 d = e + i | 0;
 c[b + 4 >> 2] = d;
 c[l + (d << 2) >> 2] = 0;
 return;
}

function Kh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 h = i;
 i = i + 240 | 0;
 k = h + 8 | 0;
 o = h;
 p = h + 204 | 0;
 j = h + 32 | 0;
 m = h + 28 | 0;
 a = h + 24 | 0;
 n = h + 20 | 0;
 l = h + 16 | 0;
 q = o;
 c[q >> 2] = 37;
 c[q + 4 >> 2] = 0;
 sh(o + 1 | 0, 21237, 0, c[d + 4 >> 2] | 0);
 q = Vg() | 0;
 r = k;
 c[r >> 2] = f;
 c[r + 4 >> 2] = g;
 f = p + (Mm(p, 23, q, o, k) | 0) | 0;
 o = th(p, f, d) | 0;
 g = tf(d) | 0;
 c[n >> 2] = g;
 Hh(p, o, f, j, m, a, n);
 co(g) | 0;
 c[l >> 2] = c[b >> 2];
 b = c[m >> 2] | 0;
 a = c[a >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 a = Om(k, j, b, a, d, e) | 0;
 i = h;
 return a | 0;
}

function Ih(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 h = i;
 i = i + 224 | 0;
 k = h + 8 | 0;
 o = h;
 p = h + 196 | 0;
 j = h + 32 | 0;
 m = h + 28 | 0;
 a = h + 24 | 0;
 n = h + 20 | 0;
 l = h + 16 | 0;
 q = o;
 c[q >> 2] = 37;
 c[q + 4 >> 2] = 0;
 sh(o + 1 | 0, 21237, 1, c[d + 4 >> 2] | 0);
 q = Vg() | 0;
 r = k;
 c[r >> 2] = f;
 c[r + 4 >> 2] = g;
 f = p + (Mm(p, 22, q, o, k) | 0) | 0;
 o = th(p, f, d) | 0;
 g = tf(d) | 0;
 c[n >> 2] = g;
 Hh(p, o, f, j, m, a, n);
 co(g) | 0;
 c[l >> 2] = c[b >> 2];
 b = c[m >> 2] | 0;
 a = c[a >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 a = Om(k, j, b, a, d, e) | 0;
 i = h;
 return a | 0;
}

function xh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 h = i;
 i = i + 112 | 0;
 k = h + 8 | 0;
 o = h;
 p = h + 75 | 0;
 j = h + 32 | 0;
 m = h + 28 | 0;
 a = h + 24 | 0;
 n = h + 20 | 0;
 l = h + 16 | 0;
 q = o;
 c[q >> 2] = 37;
 c[q + 4 >> 2] = 0;
 sh(o + 1 | 0, 21237, 0, c[d + 4 >> 2] | 0);
 q = Vg() | 0;
 r = k;
 c[r >> 2] = f;
 c[r + 4 >> 2] = g;
 f = p + (Mm(p, 23, q, o, k) | 0) | 0;
 o = th(p, f, d) | 0;
 g = tf(d) | 0;
 c[n >> 2] = g;
 uh(p, o, f, j, m, a, n);
 co(g) | 0;
 c[l >> 2] = c[b >> 2];
 b = c[m >> 2] | 0;
 a = c[a >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 a = Nb(k, j, b, a, d, e) | 0;
 i = h;
 return a | 0;
}

function vh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 h = i;
 i = i + 96 | 0;
 k = h + 8 | 0;
 o = h;
 p = h + 74 | 0;
 j = h + 32 | 0;
 m = h + 28 | 0;
 a = h + 24 | 0;
 n = h + 20 | 0;
 l = h + 16 | 0;
 q = o;
 c[q >> 2] = 37;
 c[q + 4 >> 2] = 0;
 sh(o + 1 | 0, 21237, 1, c[d + 4 >> 2] | 0);
 q = Vg() | 0;
 r = k;
 c[r >> 2] = f;
 c[r + 4 >> 2] = g;
 f = p + (Mm(p, 22, q, o, k) | 0) | 0;
 o = th(p, f, d) | 0;
 g = tf(d) | 0;
 c[n >> 2] = g;
 uh(p, o, f, j, m, a, n);
 co(g) | 0;
 c[l >> 2] = c[b >> 2];
 b = c[m >> 2] | 0;
 a = c[a >> 2] | 0;
 c[k >> 2] = c[l >> 2];
 a = Nb(k, j, b, a, d, e) | 0;
 i = h;
 return a | 0;
}

function cf(b, d, e, f, g, h, i, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0;
 if ((-18 - d | 0) >>> 0 < e >>> 0) Dc(b);
 if (!(a[b >> 0] & 1)) m = b + 1 | 0; else m = c[b + 8 >> 2] | 0;
 if (d >>> 0 < 2147483623) {
  k = e + d | 0;
  l = d << 1;
  k = k >>> 0 < l >>> 0 ? l : k;
  k = k >>> 0 < 11 ? 11 : k + 16 & -16;
 } else k = -17;
 l = Rb(k) | 0;
 if (g) ko(l | 0, m | 0, g | 0) | 0;
 if (i) ko(l + g | 0, j | 0, i | 0) | 0;
 e = f - h | 0;
 if ((e | 0) != (g | 0)) ko(l + (i + g) | 0, m + (h + g) | 0, e - g | 0) | 0;
 if ((d | 0) != 10) Sb(m);
 c[b + 8 >> 2] = l;
 c[b >> 2] = k | 1;
 d = e + i | 0;
 c[b + 4 >> 2] = d;
 a[l + d >> 0] = 0;
 return;
}

function nd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 do if (b) {
  if (d >>> 0 < 128) {
   a[b >> 0] = d;
   b = 1;
   break;
  }
  if (d >>> 0 < 2048) {
   a[b >> 0] = d >>> 6 | 192;
   a[b + 1 >> 0] = d & 63 | 128;
   b = 2;
   break;
  }
  if (d >>> 0 < 55296 | (d & -8192 | 0) == 57344) {
   a[b >> 0] = d >>> 12 | 224;
   a[b + 1 >> 0] = d >>> 6 & 63 | 128;
   a[b + 2 >> 0] = d & 63 | 128;
   b = 3;
   break;
  }
  if ((d + -65536 | 0) >>> 0 < 1048576) {
   a[b >> 0] = d >>> 18 | 240;
   a[b + 1 >> 0] = d >>> 12 & 63 | 128;
   a[b + 2 >> 0] = d >>> 6 & 63 | 128;
   a[b + 3 >> 0] = d & 63 | 128;
   b = 4;
   break;
  } else {
   c[(Mc() | 0) >> 2] = 84;
   b = -1;
   break;
  }
 } else b = 1; while (0);
 return b | 0;
}

function sh(b, c, d, e) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 if (e & 2048) {
  a[b >> 0] = 43;
  b = b + 1 | 0;
 }
 if (e & 512) {
  a[b >> 0] = 35;
  b = b + 1 | 0;
 }
 f = a[c >> 0] | 0;
 if (f << 24 >> 24) {
  g = c;
  while (1) {
   g = g + 1 | 0;
   c = b + 1 | 0;
   a[b >> 0] = f;
   f = a[g >> 0] | 0;
   if (!(f << 24 >> 24)) {
    b = c;
    break;
   } else b = c;
  }
 }
 a : do switch (e & 74 | 0) {
 case 64:
  {
   a[b >> 0] = 111;
   break;
  }
 case 8:
  if (!(e & 16384)) {
   a[b >> 0] = 120;
   break a;
  } else {
   a[b >> 0] = 88;
   break a;
  }
 default:
  if (d) {
   a[b >> 0] = 100;
   break a;
  } else {
   a[b >> 0] = 117;
   break a;
  }
 } while (0);
 return;
}

function dm(b) {
 b = b | 0;
 if ((a[1776] | 0) == 0 ? (Aa(1776) | 0) != 0 : 0) {
  if ((a[1784] | 0) == 0 ? (Aa(1784) | 0) != 0 : 0) {
   b = 10320;
   do {
    c[b >> 2] = 0;
    c[b + 4 >> 2] = 0;
    c[b + 8 >> 2] = 0;
    b = b + 12 | 0;
   } while ((b | 0) != 10488);
   $a(102, 0, n | 0) | 0;
   Ga(1784);
  }
  hf(10320, 10488) | 0;
  hf(10332, 10516) | 0;
  hf(10344, 10544) | 0;
  hf(10356, 10576) | 0;
  hf(10368, 10616) | 0;
  hf(10380, 10652) | 0;
  hf(10392, 10680) | 0;
  hf(10404, 10716) | 0;
  hf(10416, 10732) | 0;
  hf(10428, 10748) | 0;
  hf(10440, 10764) | 0;
  hf(10452, 10780) | 0;
  hf(10464, 10796) | 0;
  hf(10476, 10812) | 0;
  c[2707] = 10320;
  Ga(1776);
 }
 return c[2707] | 0;
}

function cm(b) {
 b = b | 0;
 if ((a[1760] | 0) == 0 ? (Aa(1760) | 0) != 0 : 0) {
  if ((a[1768] | 0) == 0 ? (Aa(1768) | 0) != 0 : 0) {
   b = 10148;
   do {
    c[b >> 2] = 0;
    c[b + 4 >> 2] = 0;
    c[b + 8 >> 2] = 0;
    b = b + 12 | 0;
   } while ((b | 0) != 10316);
   $a(101, 0, n | 0) | 0;
   Ga(1768);
  }
  Ye(10148, 21340) | 0;
  Ye(10160, 21347) | 0;
  Ye(10172, 21354) | 0;
  Ye(10184, 21362) | 0;
  Ye(10196, 21372) | 0;
  Ye(10208, 21381) | 0;
  Ye(10220, 21388) | 0;
  Ye(10232, 21397) | 0;
  Ye(10244, 21401) | 0;
  Ye(10256, 21405) | 0;
  Ye(10268, 21409) | 0;
  Ye(10280, 21413) | 0;
  Ye(10292, 21417) | 0;
  Ye(10304, 21421) | 0;
  c[2579] = 10148;
  Ga(1760);
 }
 return c[2579] | 0;
}

function Oi(b, d, e, f, g, h, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0;
 l = i;
 i = i + 112 | 0;
 k = l + 4 | 0;
 e = l;
 c[e >> 2] = k + 100;
 Pi(b + 8 | 0, k, e, g, h, j);
 g = c[e >> 2] | 0;
 e = c[d >> 2] | 0;
 if ((k | 0) != (g | 0)) do {
  j = a[k >> 0] | 0;
  do if (e) {
   f = e + 24 | 0;
   h = c[f >> 2] | 0;
   if ((h | 0) == (c[e + 28 >> 2] | 0)) {
    d = (zb[c[(c[e >> 2] | 0) + 52 >> 2] & 15](e, j & 255) | 0) == -1;
    e = d ? 0 : e;
    break;
   } else {
    c[f >> 2] = h + 1;
    a[h >> 0] = j;
    break;
   }
  } else e = 0; while (0);
  k = k + 1 | 0;
 } while ((k | 0) != (g | 0));
 i = l;
 return e | 0;
}

function oc(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 a[d + 53 >> 0] = 1;
 do if ((c[d + 4 >> 2] | 0) == (f | 0)) {
  a[d + 52 >> 0] = 1;
  f = d + 16 | 0;
  b = c[f >> 2] | 0;
  if (!b) {
   c[f >> 2] = e;
   c[d + 24 >> 2] = g;
   c[d + 36 >> 2] = 1;
   if (!((g | 0) == 1 ? (c[d + 48 >> 2] | 0) == 1 : 0)) break;
   a[d + 54 >> 0] = 1;
   break;
  }
  if ((b | 0) != (e | 0)) {
   g = d + 36 | 0;
   c[g >> 2] = (c[g >> 2] | 0) + 1;
   a[d + 54 >> 0] = 1;
   break;
  }
  b = d + 24 | 0;
  f = c[b >> 2] | 0;
  if ((f | 0) == 2) {
   c[b >> 2] = g;
   f = g;
  }
  if ((f | 0) == 1 ? (c[d + 48 >> 2] | 0) == 1 : 0) a[d + 54 >> 0] = 1;
 } while (0);
 return;
}

function Zn(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 k = l;
 do if ((b | 0) != (d | 0)) {
  if ((a[b >> 0] | 0) == 45) {
   c[e >> 2] = 4;
   b = 0;
   break;
  }
  h = Mc() | 0;
  j = c[h >> 2] | 0;
  c[h >> 2] = 0;
  b = Fc(b, k, f, Vg() | 0) | 0;
  f = D;
  g = c[h >> 2] | 0;
  if (!g) c[h >> 2] = j;
  if ((c[k >> 2] | 0) != (d | 0)) {
   c[e >> 2] = 4;
   b = 0;
   break;
  }
  if (f >>> 0 > 0 | (f | 0) == 0 & b >>> 0 > 65535 | (g | 0) == 34) {
   c[e >> 2] = 4;
   b = -1;
   break;
  } else {
   b = b & 65535;
   break;
  }
 } else {
  c[e >> 2] = 4;
  b = 0;
 } while (0);
 i = l;
 return b | 0;
}

function Le(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 16 | 0;
 j = l + 8 | 0;
 h = l;
 d = a + 36 | 0;
 e = a + 40 | 0;
 f = j + 8 | 0;
 g = j;
 b = a + 32 | 0;
 a : while (1) {
  a = c[d >> 2] | 0;
  a = Ab[c[(c[a >> 2] | 0) + 20 >> 2] & 31](a, c[e >> 2] | 0, j, f, h) | 0;
  m = (c[h >> 2] | 0) - g | 0;
  if ((Gd(j, 1, m, c[b >> 2] | 0) | 0) != (m | 0)) {
   a = -1;
   break;
  }
  switch (a | 0) {
  case 1:
   break;
  case 2:
   {
    a = -1;
    break a;
   }
  default:
   {
    k = 4;
    break a;
   }
  }
 }
 if ((k | 0) == 4) a = ((Dd(c[b >> 2] | 0) | 0) != 0) << 31 >> 31;
 i = l;
 return a | 0;
}

function Ae(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 16 | 0;
 j = l + 8 | 0;
 h = l;
 d = a + 36 | 0;
 e = a + 40 | 0;
 f = j + 8 | 0;
 g = j;
 b = a + 32 | 0;
 a : while (1) {
  a = c[d >> 2] | 0;
  a = Ab[c[(c[a >> 2] | 0) + 20 >> 2] & 31](a, c[e >> 2] | 0, j, f, h) | 0;
  m = (c[h >> 2] | 0) - g | 0;
  if ((Gd(j, 1, m, c[b >> 2] | 0) | 0) != (m | 0)) {
   a = -1;
   break;
  }
  switch (a | 0) {
  case 1:
   break;
  case 2:
   {
    a = -1;
    break a;
   }
  default:
   {
    k = 4;
    break a;
   }
  }
 }
 if ((k | 0) == 4) a = ((Dd(c[b >> 2] | 0) | 0) != 0) << 31 >> 31;
 i = l;
 return a | 0;
}

function Yn(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 k = l;
 do if ((b | 0) != (d | 0)) {
  if ((a[b >> 0] | 0) == 45) {
   c[e >> 2] = 4;
   b = 0;
   break;
  }
  h = Mc() | 0;
  j = c[h >> 2] | 0;
  c[h >> 2] = 0;
  b = Fc(b, k, f, Vg() | 0) | 0;
  f = D;
  g = c[h >> 2] | 0;
  if (!g) c[h >> 2] = j;
  if ((c[k >> 2] | 0) != (d | 0)) {
   c[e >> 2] = 4;
   b = 0;
   break;
  }
  if (f >>> 0 > 0 | (f | 0) == 0 & b >>> 0 > 4294967295 | (g | 0) == 34) {
   c[e >> 2] = 4;
   b = -1;
   break;
  } else break;
 } else {
  c[e >> 2] = 4;
  b = 0;
 } while (0);
 i = l;
 return b | 0;
}

function Xn(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 k = l;
 do if ((b | 0) != (d | 0)) {
  if ((a[b >> 0] | 0) == 45) {
   c[e >> 2] = 4;
   b = 0;
   break;
  }
  h = Mc() | 0;
  j = c[h >> 2] | 0;
  c[h >> 2] = 0;
  b = Fc(b, k, f, Vg() | 0) | 0;
  f = D;
  g = c[h >> 2] | 0;
  if (!g) c[h >> 2] = j;
  if ((c[k >> 2] | 0) != (d | 0)) {
   c[e >> 2] = 4;
   b = 0;
   break;
  }
  if (f >>> 0 > 0 | (f | 0) == 0 & b >>> 0 > 4294967295 | (g | 0) == 34) {
   c[e >> 2] = 4;
   b = -1;
   break;
  } else break;
 } else {
  c[e >> 2] = 4;
  b = 0;
 } while (0);
 i = l;
 return b | 0;
}

function Si(a, b, d, e, f, g, h) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0;
 j = i;
 i = i + 416 | 0;
 e = j + 8 | 0;
 d = j;
 c[d >> 2] = e + 400;
 Ti(a + 8 | 0, e, d, f, g, h);
 a = c[d >> 2] | 0;
 d = c[b >> 2] | 0;
 if ((e | 0) != (a | 0)) {
  f = e;
  do {
   e = c[f >> 2] | 0;
   if (!d) d = 0; else {
    g = d + 24 | 0;
    h = c[g >> 2] | 0;
    if ((h | 0) == (c[d + 28 >> 2] | 0)) e = zb[c[(c[d >> 2] | 0) + 52 >> 2] & 15](d, e) | 0; else {
     c[g >> 2] = h + 4;
     c[h >> 2] = e;
    }
    d = (e | 0) == -1 ? 0 : d;
   }
   f = f + 4 | 0;
  } while ((f | 0) != (a | 0));
 }
 i = j;
 return d | 0;
}

function _n(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 j = k;
 do if ((a | 0) != (b | 0)) {
  g = Mc() | 0;
  h = c[g >> 2] | 0;
  c[g >> 2] = 0;
  a = Gc(a, j, e, Vg() | 0) | 0;
  e = D;
  f = c[g >> 2] | 0;
  if (!f) c[g >> 2] = h;
  if ((c[j >> 2] | 0) != (b | 0)) {
   c[d >> 2] = 4;
   e = 0;
   a = 0;
   break;
  }
  if ((f | 0) == 34) {
   c[d >> 2] = 4;
   j = (e | 0) > 0 | (e | 0) == 0 & a >>> 0 > 0;
   D = j ? 2147483647 : -2147483648;
   i = k;
   return (j ? -1 : 0) | 0;
  }
 } else {
  c[d >> 2] = 4;
  e = 0;
  a = 0;
 } while (0);
 D = e;
 i = k;
 return a | 0;
}

function tc(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0;
 do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  if ((c[d + 4 >> 2] | 0) == (e | 0) ? (i = d + 28 | 0, (c[i >> 2] | 0) != 1) : 0) c[i >> 2] = f;
 } else if ((b | 0) == (c[d >> 2] | 0)) {
  if ((c[d + 16 >> 2] | 0) != (e | 0) ? (h = d + 20 | 0, (c[h >> 2] | 0) != (e | 0)) : 0) {
   c[d + 32 >> 2] = f;
   c[h >> 2] = e;
   g = d + 40 | 0;
   c[g >> 2] = (c[g >> 2] | 0) + 1;
   if ((c[d + 36 >> 2] | 0) == 1 ? (c[d + 24 >> 2] | 0) == 2 : 0) a[d + 54 >> 0] = 1;
   c[d + 44 >> 2] = 4;
   break;
  }
  if ((f | 0) == 1) c[d + 32 >> 2] = 1;
 } while (0);
 return;
}

function Wn(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 j = k;
 do if ((b | 0) != (d | 0)) {
  if ((a[b >> 0] | 0) == 45) {
   c[e >> 2] = 4;
   f = 0;
   b = 0;
   break;
  }
  g = Mc() | 0;
  h = c[g >> 2] | 0;
  c[g >> 2] = 0;
  b = Fc(b, j, f, Vg() | 0) | 0;
  f = c[g >> 2] | 0;
  if (!f) c[g >> 2] = h;
  if ((c[j >> 2] | 0) != (d | 0)) {
   c[e >> 2] = 4;
   f = 0;
   b = 0;
   break;
  }
  if ((f | 0) == 34) {
   c[e >> 2] = 4;
   f = -1;
   b = -1;
  } else f = D;
 } else {
  c[e >> 2] = 4;
  f = 0;
  b = 0;
 } while (0);
 D = f;
 i = k;
 return b | 0;
}

function nf(b, d, e, f, g, h, i) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 var j = 0, k = 0, l = 0;
 if ((1073741807 - d | 0) >>> 0 < e >>> 0) Dc(b);
 if (!(a[b >> 0] & 1)) l = b + 4 | 0; else l = c[b + 8 >> 2] | 0;
 if (d >>> 0 < 536870887) {
  j = e + d | 0;
  k = d << 1;
  j = j >>> 0 < k >>> 0 ? k : j;
  j = j >>> 0 < 2 ? 2 : j + 4 & -4;
 } else j = 1073741807;
 k = Rb(j << 2) | 0;
 if (g) Xd(k, l, g) | 0;
 e = f - h | 0;
 if ((e | 0) != (g | 0)) Xd(k + (i + g << 2) | 0, l + (h + g << 2) | 0, e - g | 0) | 0;
 if ((d | 0) != 1) Sb(l);
 c[b + 8 >> 2] = k;
 c[b >> 2] = j | 1;
 return;
}

function ng(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 j = k;
 lg(j, b);
 a : do if (a[j >> 0] | 0) {
  f = c[b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0;
  g = f;
  do if (f) {
   h = g + 24 | 0;
   e = c[h >> 2] | 0;
   if ((e | 0) == (c[g + 28 >> 2] | 0)) if ((zb[c[(c[f >> 2] | 0) + 52 >> 2] & 15](g, d & 255) | 0) == -1) break; else break a; else {
    c[h >> 2] = e + 1;
    a[e >> 0] = d;
    break a;
   }
  } while (0);
  d = b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
  c[d >> 2] = c[d >> 2] | 1;
 } while (0);
 mg(j);
 i = k;
 return b | 0;
}

function Ed(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 if ((c[d + 76 >> 2] | 0) >= 0 ? (rd(d) | 0) != 0 : 0) {
  if ((a[d + 75 >> 0] | 0) != (b | 0) ? (f = d + 20 | 0, g = c[f >> 2] | 0, g >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) : 0) {
   c[f >> 2] = g + 1;
   a[g >> 0] = b;
   e = b & 255;
  } else e = td(d, b) | 0;
  sd(d);
 } else i = 3;
 do if ((i | 0) == 3) {
  if ((a[d + 75 >> 0] | 0) != (b | 0) ? (h = d + 20 | 0, e = c[h >> 2] | 0, e >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) : 0) {
   c[h >> 2] = e + 1;
   a[e >> 0] = b;
   e = b & 255;
   break;
  }
  e = td(d, b) | 0;
 } while (0);
 return e | 0;
}

function ql(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 c[g >> 2] = e;
 e = _c(c[b + 8 >> 2] | 0) | 0;
 b = nd(h, 0, d) | 0;
 if (e) _c(e) | 0;
 switch (b | 0) {
 case 0:
 case -1:
  {
   h = 2;
   break;
  }
 default:
  {
   b = b + -1 | 0;
   if (b >>> 0 <= (f - (c[g >> 2] | 0) | 0) >>> 0) if (!b) h = 0; else while (1) {
    d = a[h >> 0] | 0;
    f = c[g >> 2] | 0;
    c[g >> 2] = f + 1;
    a[f >> 0] = d;
    b = b + -1 | 0;
    if (!b) {
     h = 0;
     break;
    } else h = h + 1 | 0;
   } else h = 1;
  }
 }
 i = j;
 return h | 0;
}

function df(b, d, e, f, g, h, i) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 var j = 0, k = 0, l = 0;
 if ((-17 - d | 0) >>> 0 < e >>> 0) Dc(b);
 if (!(a[b >> 0] & 1)) l = b + 1 | 0; else l = c[b + 8 >> 2] | 0;
 if (d >>> 0 < 2147483623) {
  j = e + d | 0;
  k = d << 1;
  j = j >>> 0 < k >>> 0 ? k : j;
  j = j >>> 0 < 11 ? 11 : j + 16 & -16;
 } else j = -17;
 k = Rb(j) | 0;
 if (g) ko(k | 0, l | 0, g | 0) | 0;
 e = f - h | 0;
 if ((e | 0) != (g | 0)) ko(k + (i + g) | 0, l + (h + g) | 0, e - g | 0) | 0;
 if ((d | 0) != 10) Sb(l);
 c[b + 8 >> 2] = k;
 c[b >> 2] = j | 1;
 return;
}

function je(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0;
 j = i;
 i = i + 256 | 0;
 h = j;
 do if ((d | 0) > (e | 0) & (f & 73728 | 0) == 0) {
  f = d - e | 0;
  ho(h | 0, b | 0, (f >>> 0 > 256 ? 256 : f) | 0) | 0;
  b = c[a >> 2] | 0;
  g = (b & 32 | 0) == 0;
  if (f >>> 0 > 255) {
   e = d - e | 0;
   do {
    if (g) {
     Fd(h, 256, a) | 0;
     b = c[a >> 2] | 0;
    }
    f = f + -256 | 0;
    g = (b & 32 | 0) == 0;
   } while (f >>> 0 > 255);
   if (g) f = e & 255; else break;
  } else if (!g) break;
  Fd(h, f, a) | 0;
 } while (0);
 i = j;
 return;
}

function ri(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 j = i;
 i = i + 16 | 0;
 k = j + 12 | 0;
 l = j + 8 | 0;
 n = j + 4 | 0;
 m = j;
 q = b + 8 | 0;
 q = tb[c[(c[q >> 2] | 0) + 20 >> 2] & 63](q) | 0;
 c[n >> 2] = c[d >> 2];
 c[m >> 2] = c[e >> 2];
 o = a[q >> 0] | 0;
 p = (o & 1) == 0;
 e = q + 4 | 0;
 d = p ? e : c[q + 8 >> 2] | 0;
 e = d + ((p ? (o & 255) >>> 1 : c[e >> 2] | 0) << 2) | 0;
 c[l >> 2] = c[n >> 2];
 c[k >> 2] = c[m >> 2];
 b = mi(b, l, k, f, g, h, d, e) | 0;
 i = j;
 return b | 0;
}

function tl(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0;
 k = e;
 j = a + 8 | 0;
 a : do if ((d | 0) == (e | 0) | (f | 0) == 0) a = 0; else {
  a = 0;
  i = 0;
  while (1) {
   h = _c(c[j >> 2] | 0) | 0;
   g = hd(d, k - d | 0, b) | 0;
   if (h) _c(h) | 0;
   switch (g | 0) {
   case -2:
   case -1:
    break a;
   case 0:
    {
     d = d + 1 | 0;
     g = 1;
     break;
    }
   default:
    d = d + g | 0;
   }
   a = g + a | 0;
   i = i + 1 | 0;
   if ((d | 0) == (e | 0) | i >>> 0 >= f >>> 0) break a;
  }
 } while (0);
 return a | 0;
}

function Nn(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 32 | 0;
 j = k;
 g = c[a + 8 >> 2] | 0;
 d = c[a + 4 >> 2] | 0;
 if (g - d >> 2 >>> 0 < b >>> 0) {
  e = c[a >> 2] | 0;
  h = d - e >> 2;
  f = h + b | 0;
  if (f >>> 0 > 1073741823) Ec(a);
  d = g - e | 0;
  if (d >> 2 >>> 0 < 536870911) {
   d = d >> 1;
   d = d >>> 0 < f >>> 0 ? f : d;
  } else d = 1073741823;
  Pn(j, d, h, a + 16 | 0);
  h = j + 8 | 0;
  g = c[h >> 2] | 0;
  ho(g | 0, 0, b << 2 | 0) | 0;
  c[h >> 2] = g + (b << 2);
  Qn(a, j);
  Rn(j);
 } else On(a, b);
 i = k;
 return;
}

function hc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 64 | 0;
 g = h;
 if ((a | 0) != (b | 0)) if ((b | 0) != 0 ? (f = nc(b, 40, 56, 0) | 0, (f | 0) != 0) : 0) {
  b = g;
  e = b + 56 | 0;
  do {
   c[b >> 2] = 0;
   b = b + 4 | 0;
  } while ((b | 0) < (e | 0));
  c[g >> 2] = f;
  c[g + 8 >> 2] = a;
  c[g + 12 >> 2] = -1;
  c[g + 48 >> 2] = 1;
  Bb[c[(c[f >> 2] | 0) + 28 >> 2] & 7](f, g, c[d >> 2] | 0, 1);
  if ((c[g + 24 >> 2] | 0) == 1) {
   c[d >> 2] = c[g + 16 >> 2];
   b = 1;
  } else b = 0;
 } else b = 0; else b = 1;
 i = h;
 return b | 0;
}

function td(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 16 | 0;
 l = m;
 k = e & 255;
 a[l >> 0] = k;
 g = b + 16 | 0;
 h = c[g >> 2] | 0;
 if (!h) if (!(Bd(b) | 0)) {
  h = c[g >> 2] | 0;
  j = 4;
 } else f = -1; else j = 4;
 do if ((j | 0) == 4) {
  g = b + 20 | 0;
  j = c[g >> 2] | 0;
  if (j >>> 0 < h >>> 0 ? (f = e & 255, (f | 0) != (a[b + 75 >> 0] | 0)) : 0) {
   c[g >> 2] = j + 1;
   a[j >> 0] = k;
   break;
  }
  if ((mb[c[b + 36 >> 2] & 31](b, l, 1) | 0) == 1) f = d[l >> 0] | 0; else f = -1;
 } while (0);
 i = m;
 return f | 0;
}

function $e(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 if (d) {
  f = a[b >> 0] | 0;
  if (!(f & 1)) g = 10; else {
   f = c[b >> 2] | 0;
   g = (f & -2) + -1 | 0;
   f = f & 255;
  }
  if (!(f & 1)) h = (f & 255) >>> 1; else h = c[b + 4 >> 2] | 0;
  if ((g - h | 0) >>> 0 < d >>> 0) {
   df(b, g, d - g + h | 0, h, h, 0, 0);
   f = a[b >> 0] | 0;
  }
  if (!(f & 1)) g = b + 1 | 0; else g = c[b + 8 >> 2] | 0;
  ho(g + h | 0, e | 0, d | 0) | 0;
  f = h + d | 0;
  if (!(a[b >> 0] & 1)) a[b >> 0] = f << 1; else c[b + 4 >> 2] = f;
  a[g + f >> 0] = 0;
 }
 return b | 0;
}

function lf(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = a[b >> 0] | 0;
 f = (e & 1) != 0;
 if (f) {
  g = (c[b >> 2] & -2) + -1 | 0;
  h = c[b + 4 >> 2] | 0;
 } else {
  g = 1;
  h = (e & 255) >>> 1;
 }
 if ((h | 0) == (g | 0)) {
  nf(b, g, 1, g, g, 0, 0);
  if (!(a[b >> 0] & 1)) g = 7; else g = 8;
 } else if (f) g = 8; else g = 7;
 if ((g | 0) == 7) {
  a[b >> 0] = (h << 1) + 2;
  e = b + 4 | 0;
  f = h + 1 | 0;
 } else if ((g | 0) == 8) {
  e = c[b + 8 >> 2] | 0;
  f = h + 1 | 0;
  c[b + 4 >> 2] = f;
 }
 c[e + (h << 2) >> 2] = d;
 c[e + (f << 2) >> 2] = 0;
 return;
}

function Uh(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 j = i;
 i = i + 16 | 0;
 k = j + 12 | 0;
 l = j + 8 | 0;
 n = j + 4 | 0;
 m = j;
 o = b + 8 | 0;
 o = tb[c[(c[o >> 2] | 0) + 20 >> 2] & 63](o) | 0;
 c[n >> 2] = c[d >> 2];
 c[m >> 2] = c[e >> 2];
 e = a[o >> 0] | 0;
 p = (e & 1) == 0;
 d = p ? o + 1 | 0 : c[o + 8 >> 2] | 0;
 e = d + (p ? (e & 255) >>> 1 : c[o + 4 >> 2] | 0) | 0;
 c[l >> 2] = c[n >> 2];
 c[k >> 2] = c[m >> 2];
 b = Ph(b, l, k, f, g, h, d, e) | 0;
 i = j;
 return b | 0;
}

function fd(a, b) {
 a = +a;
 b = b | 0;
 var d = 0;
 if ((b | 0) > 1023) {
  a = a * 8988465674311579538646525.0e283;
  d = b + -1023 | 0;
  if ((d | 0) > 1023) {
   d = b + -2046 | 0;
   d = (d | 0) > 1023 ? 1023 : d;
   a = a * 8988465674311579538646525.0e283;
  }
 } else if ((b | 0) < -1022) {
  a = a * 2.2250738585072014e-308;
  d = b + 1022 | 0;
  if ((d | 0) < -1022) {
   d = b + 2044 | 0;
   d = (d | 0) < -1022 ? -1022 : d;
   a = a * 2.2250738585072014e-308;
  }
 } else d = b;
 d = lo(d + 1023 | 0, 0, 52) | 0;
 b = D;
 c[k >> 2] = d;
 c[k + 4 >> 2] = b;
 return +(a * +h[k >> 3]);
}

function Ze(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = a[b >> 0] | 0;
 if (!(f & 1)) h = 10; else {
  f = c[b >> 2] | 0;
  h = (f & -2) + -1 | 0;
  f = f & 255;
 }
 g = (f & 1) == 0;
 do if (h >>> 0 >= e >>> 0) {
  if (g) f = b + 1 | 0; else f = c[b + 8 >> 2] | 0;
  mo(f | 0, d | 0, e | 0) | 0;
  a[f + e >> 0] = 0;
  if (!(a[b >> 0] & 1)) {
   a[b >> 0] = e << 1;
   break;
  } else {
   c[b + 4 >> 2] = e;
   break;
  }
 } else {
  if (g) f = (f & 255) >>> 1; else f = c[b + 4 >> 2] | 0;
  cf(b, h, e - h | 0, f, 0, f, e, d);
 } while (0);
 return b | 0;
}

function th(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 a : do switch (c[e + 4 >> 2] & 176 | 0) {
 case 16:
  {
   e = a[b >> 0] | 0;
   switch (e << 24 >> 24) {
   case 43:
   case 45:
    {
     b = b + 1 | 0;
     break a;
    }
   default:
    {}
   }
   if ((d - b | 0) > 1 & e << 24 >> 24 == 48) {
    switch (a[b + 1 >> 0] | 0) {
    case 88:
    case 120:
     break;
    default:
     {
      f = 7;
      break a;
     }
    }
    b = b + 2 | 0;
   } else f = 7;
   break;
  }
 case 32:
  {
   b = d;
   break;
  }
 default:
  f = 7;
 } while (0);
 return b | 0;
}

function jf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = a[b >> 0] | 0;
 if (!(f & 1)) h = 1; else {
  f = c[b >> 2] | 0;
  h = (f & -2) + -1 | 0;
  f = f & 255;
 }
 g = (f & 1) == 0;
 do if (h >>> 0 >= e >>> 0) {
  if (g) f = b + 4 | 0; else f = c[b + 8 >> 2] | 0;
  Yd(f, d, e) | 0;
  c[f + (e << 2) >> 2] = 0;
  if (!(a[b >> 0] & 1)) {
   a[b >> 0] = e << 1;
   break;
  } else {
   c[b + 4 >> 2] = e;
   break;
  }
 } else {
  if (g) f = (f & 255) >>> 1; else f = c[b + 4 >> 2] | 0;
  mf(b, h, e - h | 0, f, 0, f, e, d);
 } while (0);
 return b | 0;
}

function bf(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = a[b >> 0] | 0;
 f = (e & 1) != 0;
 if (f) {
  g = (c[b >> 2] & -2) + -1 | 0;
  h = c[b + 4 >> 2] | 0;
 } else {
  g = 10;
  h = (e & 255) >>> 1;
 }
 if ((h | 0) == (g | 0)) {
  df(b, g, 1, g, g, 0, 0);
  if (!(a[b >> 0] & 1)) g = 7; else g = 8;
 } else if (f) g = 8; else g = 7;
 if ((g | 0) == 7) {
  a[b >> 0] = (h << 1) + 2;
  e = b + 1 | 0;
  f = h + 1 | 0;
 } else if ((g | 0) == 8) {
  e = c[b + 8 >> 2] | 0;
  f = h + 1 | 0;
  c[b + 4 >> 2] = f;
 }
 a[e + h >> 0] = d;
 a[e + f >> 0] = 0;
 return;
}

function pf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 h = d;
 f = e - h | 0;
 g = f >> 2;
 if (g >>> 0 > 1073741807) Dc(b);
 if (g >>> 0 < 2) {
  a[b >> 0] = f >>> 1;
  b = b + 4 | 0;
 } else {
  i = g + 4 & -4;
  f = Rb(i << 2) | 0;
  c[b + 8 >> 2] = f;
  c[b >> 2] = i | 1;
  c[b + 4 >> 2] = g;
  b = f;
 }
 g = (e - h | 0) >>> 2;
 if ((d | 0) != (e | 0)) {
  f = b;
  while (1) {
   c[f >> 2] = c[d >> 2];
   d = d + 4 | 0;
   if ((d | 0) == (e | 0)) break; else f = f + 4 | 0;
  }
 }
 c[b + (g << 2) >> 2] = 0;
 return;
}

function ro(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 f = i;
 i = i + 16 | 0;
 j = f | 0;
 h = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 g = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 l = e >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 k = ((e | 0) < 0 ? -1 : 0) >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 a = go(h ^ a, g ^ b, h, g) | 0;
 b = D;
 vo(a, b, go(l ^ d, k ^ e, l, k) | 0, D, j) | 0;
 e = go(c[j >> 2] ^ h, c[j + 4 >> 2] ^ g, h, g) | 0;
 d = D;
 i = f;
 return (D = d, e) | 0;
}

function Kd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 do if ((b | 0) != -1) {
  if ((c[d + 76 >> 2] | 0) > -1) g = rd(d) | 0; else g = 0;
  if (!((c[d + 8 >> 2] | 0) == 0 ? (Ad(d) | 0) != 0 : 0)) h = 6;
  if ((h | 0) == 6 ? (e = d + 4 | 0, f = c[e >> 2] | 0, f >>> 0 > ((c[d + 44 >> 2] | 0) + -8 | 0) >>> 0) : 0) {
   h = f + -1 | 0;
   c[e >> 2] = h;
   a[h >> 0] = b;
   c[d >> 2] = c[d >> 2] & -17;
   if (!g) break;
   sd(d);
   break;
  }
  if (g) {
   sd(d);
   b = -1;
  } else b = -1;
 } else b = -1; while (0);
 return b | 0;
}

function zg(b, c, d, e, f) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 a : do if ((e | 0) == (f | 0)) h = 6; else while (1) {
  if ((c | 0) == (d | 0)) {
   c = -1;
   break a;
  }
  b = a[c >> 0] | 0;
  g = a[e >> 0] | 0;
  if (b << 24 >> 24 < g << 24 >> 24) {
   c = -1;
   break a;
  }
  if (g << 24 >> 24 < b << 24 >> 24) {
   c = 1;
   break a;
  }
  c = c + 1 | 0;
  e = e + 1 | 0;
  if ((e | 0) == (f | 0)) {
   h = 6;
   break;
  }
 } while (0);
 if ((h | 0) == 6) c = (c | 0) != (d | 0) & 1;
 return c | 0;
}

function Dd(a) {
 a = a | 0;
 var b = 0, d = 0;
 do if (a) {
  if ((c[a + 76 >> 2] | 0) <= -1) {
   b = be(a) | 0;
   break;
  }
  d = (rd(a) | 0) == 0;
  b = be(a) | 0;
  if (!d) sd(a);
 } else {
  if (!(c[639] | 0)) b = 0; else b = Dd(c[639] | 0) | 0;
  bb(2324);
  a = c[580] | 0;
  if (a) do {
   if ((c[a + 76 >> 2] | 0) > -1) d = rd(a) | 0; else d = 0;
   if ((c[a + 20 >> 2] | 0) >>> 0 > (c[a + 28 >> 2] | 0) >>> 0) b = be(a) | 0 | b;
   if (d) sd(a);
   a = c[a + 56 >> 2] | 0;
  } while ((a | 0) != 0);
  Wa(2324);
 } while (0);
 return b | 0;
}

function Um(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 h = a + 4 | 0;
 f = (c[h >> 2] | 0) != 98;
 e = c[a >> 2] | 0;
 i = e;
 g = (c[d >> 2] | 0) - i | 0;
 g = g >>> 0 < 2147483647 ? g << 1 : -1;
 i = (c[b >> 2] | 0) - i >> 2;
 e = ne(f ? e : 0, g) | 0;
 if (!e) zc();
 if (!f) {
  f = c[a >> 2] | 0;
  c[a >> 2] = e;
  if (f) {
   pb[c[h >> 2] & 127](f);
   e = c[a >> 2] | 0;
  }
 } else c[a >> 2] = e;
 c[h >> 2] = 109;
 c[b >> 2] = e + (i << 2);
 c[d >> 2] = (c[a >> 2] | 0) + (g >>> 2 << 2);
 return;
}

function Sm(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 h = a + 4 | 0;
 f = (c[h >> 2] | 0) != 98;
 e = c[a >> 2] | 0;
 i = e;
 g = (c[d >> 2] | 0) - i | 0;
 g = g >>> 0 < 2147483647 ? g << 1 : -1;
 i = (c[b >> 2] | 0) - i >> 2;
 e = ne(f ? e : 0, g) | 0;
 if (!e) zc();
 if (!f) {
  f = c[a >> 2] | 0;
  c[a >> 2] = e;
  if (f) {
   pb[c[h >> 2] & 127](f);
   e = c[a >> 2] | 0;
  }
 } else c[a >> 2] = e;
 c[h >> 2] = 109;
 c[b >> 2] = e + (i << 2);
 c[d >> 2] = (c[a >> 2] | 0) + (g >>> 2 << 2);
 return;
}

function Ef(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 h = b + 12 | 0;
 i = b + 16 | 0;
 a : do if ((e | 0) > 0) {
  g = d;
  d = 0;
  while (1) {
   f = c[h >> 2] | 0;
   if (f >>> 0 < (c[i >> 2] | 0) >>> 0) {
    c[h >> 2] = f + 1;
    f = a[f >> 0] | 0;
   } else {
    f = tb[c[(c[b >> 2] | 0) + 40 >> 2] & 63](b) | 0;
    if ((f | 0) == -1) break a;
    f = f & 255;
   }
   a[g >> 0] = f;
   d = d + 1 | 0;
   if ((d | 0) < (e | 0)) g = g + 1 | 0; else break;
  }
 } else d = 0; while (0);
 return d | 0;
}

function Xf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 g = a + 24 | 0;
 h = a + 28 | 0;
 a : do if ((d | 0) > 0) {
  f = b;
  b = 0;
  while (1) {
   e = c[g >> 2] | 0;
   if (e >>> 0 >= (c[h >> 2] | 0) >>> 0) {
    if ((zb[c[(c[a >> 2] | 0) + 52 >> 2] & 15](a, c[f >> 2] | 0) | 0) == -1) break a;
   } else {
    i = c[f >> 2] | 0;
    c[g >> 2] = e + 4;
    c[e >> 2] = i;
   }
   b = b + 1 | 0;
   if ((b | 0) < (d | 0)) f = f + 4 | 0; else break;
  }
 } else b = 0; while (0);
 return b | 0;
}

function If(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0;
 i = b + 24 | 0;
 j = b + 28 | 0;
 a : do if ((f | 0) > 0) {
  h = e;
  e = 0;
  while (1) {
   g = c[i >> 2] | 0;
   if (g >>> 0 >= (c[j >> 2] | 0) >>> 0) {
    if ((zb[c[(c[b >> 2] | 0) + 52 >> 2] & 15](b, d[h >> 0] | 0) | 0) == -1) break a;
   } else {
    k = a[h >> 0] | 0;
    c[i >> 2] = g + 1;
    a[g >> 0] = k;
   }
   e = e + 1 | 0;
   if ((e | 0) < (f | 0)) h = h + 1 | 0; else break;
  }
 } else e = 0; while (0);
 return e | 0;
}

function tg(a) {
 a = a | 0;
 var b = 0, d = 0;
 a = a + 4 | 0;
 d = c[a >> 2] | 0;
 b = c[(c[d >> 2] | 0) + -12 >> 2] | 0;
 if (((((c[d + (b + 24) >> 2] | 0) != 0 ? (c[d + (b + 16) >> 2] | 0) == 0 : 0) ? (c[d + (b + 4) >> 2] & 8192 | 0) != 0 : 0) ? !(Ea() | 0) : 0) ? (d = c[a >> 2] | 0, d = c[d + ((c[(c[d >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0, (tb[c[(c[d >> 2] | 0) + 24 >> 2] & 63](d) | 0) == -1) : 0) {
  d = c[a >> 2] | 0;
  d = d + ((c[(c[d >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
  c[d >> 2] = c[d >> 2] | 1;
 }
 return;
}

function mg(a) {
 a = a | 0;
 var b = 0, d = 0;
 a = a + 4 | 0;
 d = c[a >> 2] | 0;
 b = c[(c[d >> 2] | 0) + -12 >> 2] | 0;
 if (((((c[d + (b + 24) >> 2] | 0) != 0 ? (c[d + (b + 16) >> 2] | 0) == 0 : 0) ? (c[d + (b + 4) >> 2] & 8192 | 0) != 0 : 0) ? !(Ea() | 0) : 0) ? (d = c[a >> 2] | 0, d = c[d + ((c[(c[d >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0, (tb[c[(c[d >> 2] | 0) + 24 >> 2] & 63](d) | 0) == -1) : 0) {
  d = c[a >> 2] | 0;
  d = d + ((c[(c[d >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
  c[d >> 2] = c[d >> 2] | 1;
 }
 return;
}

function Tf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 g = a + 12 | 0;
 h = a + 16 | 0;
 a : do if ((d | 0) > 0) {
  f = b;
  b = 0;
  while (1) {
   e = c[g >> 2] | 0;
   if (e >>> 0 >= (c[h >> 2] | 0) >>> 0) {
    e = tb[c[(c[a >> 2] | 0) + 40 >> 2] & 63](a) | 0;
    if ((e | 0) == -1) break a;
   } else {
    c[g >> 2] = e + 4;
    e = c[e >> 2] | 0;
   }
   c[f >> 2] = e;
   b = b + 1 | 0;
   if ((b | 0) < (d | 0)) f = f + 4 | 0; else break;
  }
 } else b = 0; while (0);
 return b | 0;
}

function ko(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return Ma(b | 0, d | 0, e | 0) | 0;
 f = b | 0;
 if ((b & 3) == (d & 3)) {
  while (b & 3) {
   if (!e) return f | 0;
   a[b >> 0] = a[d >> 0] | 0;
   b = b + 1 | 0;
   d = d + 1 | 0;
   e = e - 1 | 0;
  }
  while ((e | 0) >= 4) {
   c[b >> 2] = c[d >> 2];
   b = b + 4 | 0;
   d = d + 4 | 0;
   e = e - 4 | 0;
  }
 }
 while ((e | 0) > 0) {
  a[b >> 0] = a[d >> 0] | 0;
  b = b + 1 | 0;
  d = d + 1 | 0;
  e = e - 1 | 0;
 }
 return f | 0;
}

function Rm(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 h = a + 4 | 0;
 f = (c[h >> 2] | 0) != 98;
 e = c[a >> 2] | 0;
 i = e;
 g = (c[d >> 2] | 0) - i | 0;
 g = g >>> 0 < 2147483647 ? g << 1 : -1;
 i = (c[b >> 2] | 0) - i | 0;
 e = ne(f ? e : 0, g) | 0;
 if (!e) zc();
 if (!f) {
  f = c[a >> 2] | 0;
  c[a >> 2] = e;
  if (f) {
   pb[c[h >> 2] & 127](f);
   e = c[a >> 2] | 0;
  }
 } else c[a >> 2] = e;
 c[h >> 2] = 109;
 c[b >> 2] = e + i;
 c[d >> 2] = (c[a >> 2] | 0) + g;
 return;
}

function Eg(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 a : do if ((e | 0) == (f | 0)) h = 6; else while (1) {
  if ((b | 0) == (d | 0)) {
   b = -1;
   break a;
  }
  a = c[b >> 2] | 0;
  g = c[e >> 2] | 0;
  if ((a | 0) < (g | 0)) {
   b = -1;
   break a;
  }
  if ((g | 0) < (a | 0)) {
   b = 1;
   break a;
  }
  b = b + 4 | 0;
  e = e + 4 | 0;
  if ((e | 0) == (f | 0)) {
   h = 6;
   break;
  }
 } while (0);
 if ((h | 0) == 6) b = (b | 0) != (d | 0) & 1;
 return b | 0;
}

function of(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 g = d;
 f = e - g | 0;
 if (f >>> 0 > 4294967279) Dc(b);
 if (f >>> 0 < 11) {
  a[b >> 0] = f << 1;
  h = b + 1 | 0;
 } else {
  i = f + 16 & -16;
  h = Rb(i) | 0;
  c[b + 8 >> 2] = h;
  c[b >> 2] = i | 1;
  c[b + 4 >> 2] = f;
 }
 b = e - g | 0;
 if ((d | 0) != (e | 0)) {
  f = h;
  while (1) {
   a[f >> 0] = a[d >> 0] | 0;
   d = d + 1 | 0;
   if ((d | 0) == (e | 0)) break; else f = f + 1 | 0;
  }
 }
 a[h + b >> 0] = 0;
 return;
}

function Qn(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 e = c[a >> 2] | 0;
 g = a + 4 | 0;
 d = b + 4 | 0;
 f = (c[g >> 2] | 0) - e | 0;
 h = (c[d >> 2] | 0) + (0 - (f >> 2) << 2) | 0;
 c[d >> 2] = h;
 ko(h | 0, e | 0, f | 0) | 0;
 f = c[a >> 2] | 0;
 c[a >> 2] = c[d >> 2];
 c[d >> 2] = f;
 f = b + 8 | 0;
 e = c[g >> 2] | 0;
 c[g >> 2] = c[f >> 2];
 c[f >> 2] = e;
 f = a + 8 | 0;
 a = b + 12 | 0;
 e = c[f >> 2] | 0;
 c[f >> 2] = c[a >> 2];
 c[a >> 2] = e;
 c[b >> 2] = c[d >> 2];
 return;
}

function ie(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) while (1) {
  e = uo(b | 0, c | 0, 10, 0) | 0;
  d = d + -1 | 0;
  a[d >> 0] = e | 48;
  e = to(b | 0, c | 0, 10, 0) | 0;
  if (c >>> 0 > 9 | (c | 0) == 9 & b >>> 0 > 4294967295) {
   b = e;
   c = D;
  } else {
   b = e;
   break;
  }
 }
 if (b) while (1) {
  d = d + -1 | 0;
  a[d >> 0] = (b >>> 0) % 10 | 0 | 48;
  if (b >>> 0 < 10) break; else b = (b >>> 0) / 10 | 0;
 }
 return d | 0;
}

function dd(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 f = jo(d | 0, e | 0, 52) | 0;
 f = f & 2047;
 switch (f | 0) {
 case 0:
  {
   if (a != 0.0) {
    a = +dd(a * 18446744073709551616.0, b);
    d = (c[b >> 2] | 0) + -64 | 0;
   } else d = 0;
   c[b >> 2] = d;
   break;
  }
 case 2047:
  break;
 default:
  {
   c[b >> 2] = f + -1022;
   c[k >> 2] = d;
   c[k + 4 >> 2] = e & -2146435073 | 1071644672;
   a = +h[k >> 3];
  }
 }
 return +a;
}

function Vd(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = b;
 a : do if (!(f & 3)) e = 4; else {
  d = b;
  b = f;
  while (1) {
   if (!(a[d >> 0] | 0)) break a;
   d = d + 1 | 0;
   b = d;
   if (!(b & 3)) {
    b = d;
    e = 4;
    break;
   }
  }
 } while (0);
 if ((e | 0) == 4) {
  while (1) {
   d = c[b >> 2] | 0;
   if (!((d & -2139062144 ^ -2139062144) & d + -16843009)) b = b + 4 | 0; else break;
  }
  if ((d & 255) << 24 >> 24) do b = b + 1 | 0; while ((a[b >> 0] | 0) != 0);
 }
 return b - f | 0;
}

function ne(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 if (!a) {
  a = ke(b) | 0;
  return a | 0;
 }
 if (b >>> 0 > 4294967231) {
  c[(Mc() | 0) >> 2] = 12;
  a = 0;
  return a | 0;
 }
 d = oe(a + -8 | 0, b >>> 0 < 11 ? 16 : b + 11 & -8) | 0;
 if (d) {
  a = d + 8 | 0;
  return a | 0;
 }
 d = ke(b) | 0;
 if (!d) {
  a = 0;
  return a | 0;
 }
 e = c[a + -4 >> 2] | 0;
 e = (e & -8) - ((e & 3 | 0) == 0 ? 8 : 4) | 0;
 ko(d | 0, a | 0, (e >>> 0 < b >>> 0 ? e : b) | 0) | 0;
 le(a);
 a = d;
 return a | 0;
}

function Hd(a) {
 a = a | 0;
 var b = 0, e = 0, f = 0;
 if ((c[a + 76 >> 2] | 0) >= 0 ? (rd(a) | 0) != 0 : 0) {
  b = a + 4 | 0;
  e = c[b >> 2] | 0;
  if (e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0) {
   c[b >> 2] = e + 1;
   b = d[e >> 0] | 0;
  } else b = Cd(a) | 0;
 } else f = 3;
 do if ((f | 0) == 3) {
  b = a + 4 | 0;
  e = c[b >> 2] | 0;
  if (e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0) {
   c[b >> 2] = e + 1;
   b = d[e >> 0] | 0;
   break;
  } else {
   b = Cd(a) | 0;
   break;
  }
 } while (0);
 return b | 0;
}

function be(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 b = a + 20 | 0;
 g = a + 28 | 0;
 if ((c[b >> 2] | 0) >>> 0 > (c[g >> 2] | 0) >>> 0 ? (mb[c[a + 36 >> 2] & 31](a, 0, 0) | 0, (c[b >> 2] | 0) == 0) : 0) b = -1; else {
  h = a + 4 | 0;
  d = c[h >> 2] | 0;
  e = a + 8 | 0;
  f = c[e >> 2] | 0;
  if (d >>> 0 < f >>> 0) mb[c[a + 40 >> 2] & 31](a, d - f | 0, 1) | 0;
  c[a + 16 >> 2] = 0;
  c[g >> 2] = 0;
  c[b >> 2] = 0;
  c[e >> 2] = 0;
  c[h >> 2] = 0;
  b = 0;
 }
 return b | 0;
}

function ee(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0.0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 112 | 0;
 h = j;
 f = h;
 g = f + 112 | 0;
 do {
  c[f >> 2] = 0;
  f = f + 4 | 0;
 } while ((f | 0) < (g | 0));
 f = h + 4 | 0;
 c[f >> 2] = a;
 g = h + 8 | 0;
 c[g >> 2] = -1;
 c[h + 44 >> 2] = a;
 c[h + 76 >> 2] = -1;
 Qc(h, 0);
 e = +Oc(h, d, 1);
 d = (c[f >> 2] | 0) - (c[g >> 2] | 0) + (c[h + 108 >> 2] | 0) | 0;
 if (b) c[b >> 2] = (d | 0) != 0 ? a + d | 0 : a;
 i = j;
 return +e;
}

function Ld(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 e = j;
 f = ke(240) | 0;
 do if (f) {
  c[e >> 2] = c[d >> 2];
  e = Od(f, 240, b, e) | 0;
  if (e >>> 0 < 240) {
   b = ne(f, e + 1 | 0) | 0;
   c[a >> 2] = (b | 0) != 0 ? b : f;
   break;
  }
  le(f);
  if ((e | 0) >= 0 ? (h = e + 1 | 0, g = ke(h) | 0, c[a >> 2] = g, (g | 0) != 0) : 0) e = Od(g, h, b, d) | 0; else e = -1;
 } else e = -1; while (0);
 i = j;
 return e | 0;
}

function qo(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 j = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 i = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 f = d >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 e = ((d | 0) < 0 ? -1 : 0) >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 h = go(j ^ a, i ^ b, j, i) | 0;
 g = D;
 a = f ^ j;
 b = e ^ i;
 return go((vo(h, g, go(f ^ c, e ^ d, f, e) | 0, D, 0) | 0) ^ a, D ^ b, a, b) | 0;
}

function Ad(b) {
 b = b | 0;
 var d = 0, e = 0;
 d = b + 74 | 0;
 e = a[d >> 0] | 0;
 a[d >> 0] = e + 255 | e;
 d = b + 20 | 0;
 e = b + 44 | 0;
 if ((c[d >> 2] | 0) >>> 0 > (c[e >> 2] | 0) >>> 0) mb[c[b + 36 >> 2] & 31](b, 0, 0) | 0;
 c[b + 16 >> 2] = 0;
 c[b + 28 >> 2] = 0;
 c[d >> 2] = 0;
 d = c[b >> 2] | 0;
 if (d & 20) if (!(d & 4)) d = -1; else {
  c[b >> 2] = d | 32;
  d = -1;
 } else {
  d = c[e >> 2] | 0;
  c[b + 8 >> 2] = d;
  c[b + 4 >> 2] = d;
  d = 0;
 }
 return d | 0;
}

function Nc(b) {
 b = b | 0;
 var c = 0, e = 0;
 c = 0;
 while (1) {
  if ((d[14536 + c >> 0] | 0) == (b | 0)) {
   e = 2;
   break;
  }
  c = c + 1 | 0;
  if ((c | 0) == 87) {
   c = 87;
   b = 14624;
   e = 5;
   break;
  }
 }
 if ((e | 0) == 2) if (!c) b = 14624; else {
  b = 14624;
  e = 5;
 }
 if ((e | 0) == 5) while (1) {
  e = b;
  while (1) {
   b = e + 1 | 0;
   if (!(a[e >> 0] | 0)) break; else e = b;
  }
  c = c + -1 | 0;
  if (!c) break; else e = 5;
 }
 return b | 0;
}

function mh(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0;
 g = i;
 i = i + 16 | 0;
 h = g;
 b = tf(b) | 0;
 c[h >> 2] = b;
 j = Fk(h, 9320) | 0;
 xb[c[(c[j >> 2] | 0) + 48 >> 2] & 7](j, 19840, 19872, d) | 0;
 d = Fk(h, 9476) | 0;
 c[e >> 2] = tb[c[(c[d >> 2] | 0) + 12 >> 2] & 63](d) | 0;
 c[f >> 2] = tb[c[(c[d >> 2] | 0) + 16 >> 2] & 63](d) | 0;
 qb[c[(c[d >> 2] | 0) + 20 >> 2] & 63](a, d);
 co(b) | 0;
 i = g;
 return;
}

function jh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 h = i;
 i = i + 16 | 0;
 j = h;
 d = tf(d) | 0;
 c[j >> 2] = d;
 k = Fk(j, 9328) | 0;
 xb[c[(c[k >> 2] | 0) + 32 >> 2] & 7](k, 19840, 19872, e) | 0;
 e = Fk(j, 9468) | 0;
 a[f >> 0] = tb[c[(c[e >> 2] | 0) + 12 >> 2] & 63](e) | 0;
 a[g >> 0] = tb[c[(c[e >> 2] | 0) + 16 >> 2] & 63](e) | 0;
 qb[c[(c[e >> 2] | 0) + 20 >> 2] & 63](b, e);
 co(d) | 0;
 i = h;
 return;
}

function Ti(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 128 | 0;
 l = h + 16 | 0;
 m = h + 12 | 0;
 j = h;
 k = h + 8 | 0;
 c[m >> 2] = l + 100;
 Pi(a, l, m, e, f, g);
 g = j;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[k >> 2] = l;
 g = (c[d >> 2] | 0) - b >> 2;
 f = _c(c[a >> 2] | 0) | 0;
 g = ld(b, k, g, j) | 0;
 if (f) _c(f) | 0;
 c[d >> 2] = b + (g << 2);
 i = h;
 return;
}

function ho(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = b + e | 0;
 if ((e | 0) >= 20) {
  d = d & 255;
  h = b & 3;
  i = d | d << 8 | d << 16 | d << 24;
  g = f & ~3;
  if (h) {
   h = b + 4 - h | 0;
   while ((b | 0) < (h | 0)) {
    a[b >> 0] = d;
    b = b + 1 | 0;
   }
  }
  while ((b | 0) < (g | 0)) {
   c[b >> 2] = i;
   b = b + 4 | 0;
  }
 }
 while ((b | 0) < (f | 0)) {
  a[b >> 0] = d;
  b = b + 1 | 0;
 }
 return b - e | 0;
}

function Vn(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0.0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 do if ((a | 0) == (b | 0)) {
  c[d >> 2] = 4;
  e = 0.0;
 } else {
  f = Mc() | 0;
  g = c[f >> 2] | 0;
  c[f >> 2] = 0;
  e = +Qd(a, h, Vg() | 0);
  a = c[f >> 2] | 0;
  if (!a) c[f >> 2] = g;
  if ((c[h >> 2] | 0) != (b | 0)) {
   c[d >> 2] = 4;
   e = 0.0;
   break;
  }
  if ((a | 0) == 34) c[d >> 2] = 4;
 } while (0);
 i = j;
 return +e;
}

function Un(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0.0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 do if ((a | 0) != (b | 0)) {
  f = Mc() | 0;
  g = c[f >> 2] | 0;
  c[f >> 2] = 0;
  e = +Qd(a, h, Vg() | 0);
  a = c[f >> 2] | 0;
  if (!a) c[f >> 2] = g;
  if ((c[h >> 2] | 0) != (b | 0)) {
   c[d >> 2] = 4;
   e = 0.0;
   break;
  }
  if ((a | 0) == 34) c[d >> 2] = 4;
 } else {
  c[d >> 2] = 4;
  e = 0.0;
 } while (0);
 i = j;
 return +e;
}

function Tn(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0.0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 do if ((a | 0) != (b | 0)) {
  f = Mc() | 0;
  g = c[f >> 2] | 0;
  c[f >> 2] = 0;
  e = +Qd(a, h, Vg() | 0);
  a = c[f >> 2] | 0;
  if (!a) c[f >> 2] = g;
  if ((c[h >> 2] | 0) != (b | 0)) {
   c[d >> 2] = 4;
   e = 0.0;
   break;
  }
  if ((a | 0) == 34) c[d >> 2] = 4;
 } else {
  c[d >> 2] = 4;
  e = 0.0;
 } while (0);
 i = j;
 return +e;
}

function fe(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 112 | 0;
 j = k;
 c[j >> 2] = 0;
 g = j + 4 | 0;
 c[g >> 2] = a;
 c[j + 44 >> 2] = a;
 h = j + 8 | 0;
 c[h >> 2] = (a | 0) < 0 ? -1 : a + 2147483647 | 0;
 c[j + 76 >> 2] = -1;
 Qc(j, 0);
 e = Pc(j, d, 1, e, f) | 0;
 if (b) c[b >> 2] = a + ((c[g >> 2] | 0) + (c[j + 108 >> 2] | 0) - (c[h >> 2] | 0));
 i = k;
 return e | 0;
}

function gg(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 if (c[b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0) {
  sg(d, b);
  if ((a[d >> 0] | 0) != 0 ? (f = c[b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0, (tb[c[(c[f >> 2] | 0) + 24 >> 2] & 63](f) | 0) == -1) : 0) {
   f = b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
   c[f >> 2] = c[f >> 2] | 1;
  }
  tg(d);
 }
 i = e;
 return b | 0;
}

function bg(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 if (c[b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0) {
  lg(d, b);
  if ((a[d >> 0] | 0) != 0 ? (f = c[b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 24) >> 2] | 0, (tb[c[(c[f >> 2] | 0) + 24 >> 2] & 63](f) | 0) == -1) : 0) {
   f = b + ((c[(c[b >> 2] | 0) + -12 >> 2] | 0) + 16) | 0;
   c[f >> 2] = c[f >> 2] | 1;
  }
  mg(d);
 }
 i = e;
 return b | 0;
}

function mc(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 a : do if ((b | 0) != (c[d + 8 >> 2] | 0)) {
  h = c[b + 12 >> 2] | 0;
  g = b + 16 + (h << 3) | 0;
  lc(b + 16 | 0, d, e, f);
  if ((h | 0) > 1) {
   h = d + 54 | 0;
   b = b + 24 | 0;
   do {
    lc(b, d, e, f);
    if (a[h >> 0] | 0) break a;
    b = b + 8 | 0;
   } while (b >>> 0 < g >>> 0);
  }
 } else ic(0, d, e, f); while (0);
 return;
}

function Pi(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 16 | 0;
 l = m;
 a[l >> 0] = 37;
 j = l + 1 | 0;
 a[j >> 0] = g;
 k = l + 2 | 0;
 a[k >> 0] = h;
 a[l + 3 >> 0] = 0;
 if (h << 24 >> 24) {
  a[j >> 0] = h;
  a[k >> 0] = g;
 }
 c[e >> 2] = d + (Ia(d | 0, (c[e >> 2] | 0) - d | 0, l | 0, f | 0, c[b >> 2] | 0) | 0);
 i = m;
 return;
}

function ic(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0;
 b = d + 16 | 0;
 g = c[b >> 2] | 0;
 do if (g) {
  if ((g | 0) != (e | 0)) {
   f = d + 36 | 0;
   c[f >> 2] = (c[f >> 2] | 0) + 1;
   c[d + 24 >> 2] = 2;
   a[d + 54 >> 0] = 1;
   break;
  }
  b = d + 24 | 0;
  if ((c[b >> 2] | 0) == 2) c[b >> 2] = f;
 } else {
  c[b >> 2] = e;
  c[d + 24 >> 2] = f;
  c[d + 36 >> 2] = 1;
 } while (0);
 return;
}

function vi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 4 | 0;
 k = h;
 a = a + 8 | 0;
 a = tb[c[(c[a >> 2] | 0) + 4 >> 2] & 63](a) | 0;
 c[k >> 2] = c[e >> 2];
 c[j >> 2] = c[k >> 2];
 d = (Cm(d, j, a, a + 288 | 0, g, f, 0) | 0) - a | 0;
 if ((d | 0) < 288) c[b >> 2] = ((d | 0) / 12 | 0 | 0) % 12 | 0;
 i = h;
 return;
}

function Yh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 4 | 0;
 k = h;
 a = a + 8 | 0;
 a = tb[c[(c[a >> 2] | 0) + 4 >> 2] & 63](a) | 0;
 c[k >> 2] = c[e >> 2];
 c[j >> 2] = c[k >> 2];
 d = (rm(d, j, a, a + 288 | 0, g, f, 0) | 0) - a | 0;
 if ((d | 0) < 288) c[b >> 2] = ((d | 0) / 12 | 0 | 0) % 12 | 0;
 i = h;
 return;
}

function Pn(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0;
 c[b + 12 >> 2] = 0;
 c[b + 16 >> 2] = f;
 do if (d) {
  g = f + 112 | 0;
  if (d >>> 0 < 29 & (a[g >> 0] | 0) == 0) {
   a[g >> 0] = 1;
   break;
  } else {
   f = Rb(d << 2) | 0;
   break;
  }
 } else f = 0; while (0);
 c[b >> 2] = f;
 e = f + (e << 2) | 0;
 c[b + 8 >> 2] = e;
 c[b + 4 >> 2] = e;
 c[b + 12 >> 2] = f + (d << 2);
 return;
}

function hm(b) {
 b = b | 0;
 if ((a[1840] | 0) == 0 ? (Aa(1840) | 0) != 0 : 0) {
  if ((a[1848] | 0) == 0 ? (Aa(1848) | 0) != 0 : 0) {
   b = 12228;
   do {
    c[b >> 2] = 0;
    c[b + 4 >> 2] = 0;
    c[b + 8 >> 2] = 0;
    b = b + 12 | 0;
   } while ((b | 0) != 12516);
   $a(106, 0, n | 0) | 0;
   Ga(1848);
  }
  hf(12228, 12516) | 0;
  hf(12240, 12528) | 0;
  c[3135] = 12228;
  Ga(1840);
 }
 return c[3135] | 0;
}

function gm(b) {
 b = b | 0;
 if ((a[1824] | 0) == 0 ? (Aa(1824) | 0) != 0 : 0) {
  if ((a[1832] | 0) == 0 ? (Aa(1832) | 0) != 0 : 0) {
   b = 11936;
   do {
    c[b >> 2] = 0;
    c[b + 4 >> 2] = 0;
    c[b + 8 >> 2] = 0;
    b = b + 12 | 0;
   } while ((b | 0) != 12224);
   $a(105, 0, n | 0) | 0;
   Ga(1832);
  }
  Ye(11936, 21555) | 0;
  Ye(11948, 21558) | 0;
  c[3056] = 11936;
  Ga(1824);
 }
 return c[3056] | 0;
}

function ti(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 4 | 0;
 k = h;
 a = a + 8 | 0;
 a = tb[c[c[a >> 2] >> 2] & 63](a) | 0;
 c[k >> 2] = c[e >> 2];
 c[j >> 2] = c[k >> 2];
 d = (Cm(d, j, a, a + 168 | 0, g, f, 0) | 0) - a | 0;
 if ((d | 0) < 168) c[b >> 2] = ((d | 0) / 12 | 0 | 0) % 7 | 0;
 i = h;
 return;
}

function Yd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 e = (d | 0) == 0;
 if (a - b >> 2 >>> 0 < d >>> 0) {
  if (!e) do {
   d = d + -1 | 0;
   c[a + (d << 2) >> 2] = c[b + (d << 2) >> 2];
  } while ((d | 0) != 0);
 } else if (!e) {
  e = b;
  b = a;
  while (1) {
   d = d + -1 | 0;
   c[b >> 2] = c[e >> 2];
   if (!d) break; else {
    e = e + 4 | 0;
    b = b + 4 | 0;
   }
  }
 }
 return a | 0;
}

function Wh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 4 | 0;
 k = h;
 a = a + 8 | 0;
 a = tb[c[c[a >> 2] >> 2] & 63](a) | 0;
 c[k >> 2] = c[e >> 2];
 c[j >> 2] = c[k >> 2];
 d = (rm(d, j, a, a + 168 | 0, g, f, 0) | 0) - a | 0;
 if ((d | 0) < 168) c[b >> 2] = ((d | 0) / 12 | 0 | 0) % 7 | 0;
 i = h;
 return;
}

function xi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Qm(d, a, f, g, 4) | 0;
 if (!(c[f >> 2] & 4)) {
  if ((a | 0) < 69) a = a + 2e3 | 0; else a = (a + -69 | 0) >>> 0 < 31 ? a + 1900 | 0 : a;
  c[b >> 2] = a + -1900;
 }
 i = h;
 return;
}

function _h(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Pm(d, a, f, g, 4) | 0;
 if (!(c[f >> 2] & 4)) {
  if ((a | 0) < 69) a = a + 2e3 | 0; else a = (a + -69 | 0) >>> 0 < 31 ? a + 1900 | 0 : a;
  c[b >> 2] = a + -1900;
 }
 i = h;
 return;
}

function lh(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 b = tf(b) | 0;
 c[g >> 2] = b;
 h = Fk(g, 9320) | 0;
 xb[c[(c[h >> 2] | 0) + 48 >> 2] & 7](h, 19840, 19866, d) | 0;
 d = Fk(g, 9476) | 0;
 c[e >> 2] = tb[c[(c[d >> 2] | 0) + 16 >> 2] & 63](d) | 0;
 qb[c[(c[d >> 2] | 0) + 20 >> 2] & 63](a, d);
 co(b) | 0;
 i = f;
 return;
}

function ih(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0;
 g = i;
 i = i + 16 | 0;
 h = g;
 d = tf(d) | 0;
 c[h >> 2] = d;
 j = Fk(h, 9328) | 0;
 xb[c[(c[j >> 2] | 0) + 32 >> 2] & 7](j, 19840, 19866, e) | 0;
 e = Fk(h, 9468) | 0;
 a[f >> 0] = tb[c[(c[e >> 2] | 0) + 16 >> 2] & 63](e) | 0;
 qb[c[(c[e >> 2] | 0) + 20 >> 2] & 63](b, e);
 co(d) | 0;
 i = g;
 return;
}

function Me(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0;
 a : do if (!(a[b + 44 >> 0] | 0)) if ((f | 0) > 0) {
  g = e;
  e = 0;
  while (1) {
   if ((zb[c[(c[b >> 2] | 0) + 52 >> 2] & 15](b, d[g >> 0] | 0) | 0) == -1) break a;
   e = e + 1 | 0;
   if ((e | 0) < (f | 0)) g = g + 1 | 0; else break;
  }
 } else e = 0; else e = Gd(e, 1, f, c[b + 32 >> 2] | 0) | 0; while (0);
 return e | 0;
}

function Be(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 a : do if (!(a[b + 44 >> 0] | 0)) if ((e | 0) > 0) {
  f = d;
  d = 0;
  while (1) {
   if ((zb[c[(c[b >> 2] | 0) + 52 >> 2] & 15](b, c[f >> 2] | 0) | 0) == -1) break a;
   d = d + 1 | 0;
   if ((d | 0) < (e | 0)) f = f + 4 | 0; else break;
  }
 } else d = 0; else d = Gd(d, 4, e, c[b + 32 >> 2] | 0) | 0; while (0);
 return d | 0;
}

function _e(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = a[b >> 0] | 0;
 g = (f & 1) == 0;
 if (g) f = (f & 255) >>> 1; else f = c[b + 4 >> 2] | 0;
 do if (f >>> 0 >= d >>> 0) if (g) {
  a[b + 1 + d >> 0] = 0;
  a[b >> 0] = d << 1;
  break;
 } else {
  a[(c[b + 8 >> 2] | 0) + d >> 0] = 0;
  c[b + 4 >> 2] = d;
  break;
 } else $e(b, d - f | 0, e) | 0; while (0);
 return;
}

function Lk(a, d, f, g) {
 a = a | 0;
 d = d | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0;
 i = (f - d | 0) >>> 2;
 if ((d | 0) != (f | 0)) {
  h = d;
  while (1) {
   a = c[h >> 2] | 0;
   if (a >>> 0 < 128) a = e[(c[(Hc() | 0) >> 2] | 0) + (a << 1) >> 1] | 0; else a = 0;
   b[g >> 1] = a;
   h = h + 4 | 0;
   if ((h | 0) == (f | 0)) break; else g = g + 2 | 0;
  }
 }
 return d + (i << 2) | 0;
}

function Th(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Ph(a, k, j, e, f, g, 21249, 21257) | 0;
 i = h;
 return a | 0;
}

function Rn(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 e = c[b + 4 >> 2] | 0;
 f = b + 8 | 0;
 d = c[f >> 2] | 0;
 if ((d | 0) != (e | 0)) {
  do d = d + -4 | 0; while ((d | 0) != (e | 0));
  c[f >> 2] = d;
 }
 e = c[b >> 2] | 0;
 do if (e) {
  d = c[b + 16 >> 2] | 0;
  if ((d | 0) == (e | 0)) {
   a[d + 112 >> 0] = 0;
   break;
  } else {
   Sb(e);
   break;
  }
 } while (0);
 return;
}

function qi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = mi(a, k, j, e, f, g, 9896, 9928) | 0;
 i = h;
 return a | 0;
}

function wi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 8 | 0;
 m = h + 4 | 0;
 k = h;
 l = tf(e) | 0;
 c[m >> 2] = l;
 e = Fk(m, 9320) | 0;
 co(l) | 0;
 c[k >> 2] = c[d >> 2];
 c[j >> 2] = c[k >> 2];
 xi(a, g + 20 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
}

function ui(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 8 | 0;
 m = h + 4 | 0;
 k = h;
 l = tf(e) | 0;
 c[m >> 2] = l;
 e = Fk(m, 9320) | 0;
 co(l) | 0;
 c[k >> 2] = c[d >> 2];
 c[j >> 2] = c[k >> 2];
 vi(a, g + 16 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
}

function si(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 8 | 0;
 m = h + 4 | 0;
 k = h;
 l = tf(e) | 0;
 c[m >> 2] = l;
 e = Fk(m, 9320) | 0;
 co(l) | 0;
 c[k >> 2] = c[d >> 2];
 c[j >> 2] = c[k >> 2];
 ti(a, g + 24 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
}

function Zh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 8 | 0;
 m = h + 4 | 0;
 k = h;
 l = tf(e) | 0;
 c[m >> 2] = l;
 e = Fk(m, 9328) | 0;
 co(l) | 0;
 c[k >> 2] = c[d >> 2];
 c[j >> 2] = c[k >> 2];
 _h(a, g + 20 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
}

function Xh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 8 | 0;
 m = h + 4 | 0;
 k = h;
 l = tf(e) | 0;
 c[m >> 2] = l;
 e = Fk(m, 9328) | 0;
 co(l) | 0;
 c[k >> 2] = c[d >> 2];
 c[j >> 2] = c[k >> 2];
 Yh(a, g + 16 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
}

function Vh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 8 | 0;
 m = h + 4 | 0;
 k = h;
 l = tf(e) | 0;
 c[m >> 2] = l;
 e = Fk(m, 9328) | 0;
 co(l) | 0;
 c[k >> 2] = c[d >> 2];
 c[j >> 2] = c[k >> 2];
 Wh(a, g + 24 | 0, b, j, f, e);
 i = h;
 return c[b >> 2] | 0;
}

function Ud(b, c) {
 b = b | 0;
 c = c | 0;
 var d = 0, e = 0;
 e = a[b >> 0] | 0;
 d = a[c >> 0] | 0;
 if (e << 24 >> 24 == 0 ? 1 : e << 24 >> 24 != d << 24 >> 24) c = e; else {
  do {
   b = b + 1 | 0;
   c = c + 1 | 0;
   e = a[b >> 0] | 0;
   d = a[c >> 0] | 0;
  } while (!(e << 24 >> 24 == 0 ? 1 : e << 24 >> 24 != d << 24 >> 24));
  c = e;
 }
 return (c & 255) - (d & 255) | 0;
}

function ve(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 h = f + 4 | 0;
 g = f;
 Mf(b);
 c[b >> 2] = 7672;
 c[b + 32 >> 2] = d;
 Ck(h, b + 4 | 0);
 c[g >> 2] = c[h >> 2];
 d = Fk(g, 9396) | 0;
 Dk(g);
 c[b + 36 >> 2] = d;
 c[b + 40 >> 2] = e;
 a[b + 44 >> 0] = (tb[c[(c[d >> 2] | 0) + 28 >> 2] & 63](d) | 0) & 1;
 i = f;
 return;
}

function te(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 h = f + 4 | 0;
 g = f;
 xf(b);
 c[b >> 2] = 7800;
 c[b + 32 >> 2] = d;
 Ck(h, b + 4 | 0);
 c[g >> 2] = c[h >> 2];
 d = Fk(g, 9388) | 0;
 Dk(g);
 c[b + 36 >> 2] = d;
 c[b + 40 >> 2] = e;
 a[b + 44 >> 0] = (tb[c[(c[d >> 2] | 0) + 28 >> 2] & 63](d) | 0) & 1;
 i = f;
 return;
}

function fh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Lm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function eh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Km(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function dh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Jm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function ch(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Im(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function bh(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Hm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function ah(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Gm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function _g(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Em(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Zg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Dm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Sg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Am(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Rg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = zm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Qg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = ym(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Pg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = xm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Og(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = wm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Ng(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = vm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Mg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = um(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Lg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = tm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Kg(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = sm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function $g(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0;
 h = i;
 i = i + 16 | 0;
 j = h + 12 | 0;
 k = h + 8 | 0;
 m = h + 4 | 0;
 l = h;
 c[m >> 2] = c[b >> 2];
 c[l >> 2] = c[d >> 2];
 c[k >> 2] = c[m >> 2];
 c[j >> 2] = c[l >> 2];
 a = Fm(a, k, j, e, f, g) | 0;
 i = h;
 return a | 0;
}

function Bd(b) {
 b = b | 0;
 var d = 0, e = 0;
 d = b + 74 | 0;
 e = a[d >> 0] | 0;
 a[d >> 0] = e + 255 | e;
 d = c[b >> 2] | 0;
 if (!(d & 8)) {
  c[b + 8 >> 2] = 0;
  c[b + 4 >> 2] = 0;
  d = c[b + 44 >> 2] | 0;
  c[b + 28 >> 2] = d;
  c[b + 20 >> 2] = d;
  c[b + 16 >> 2] = d + (c[b + 48 >> 2] | 0);
  d = 0;
 } else {
  c[b >> 2] = d | 32;
  d = -1;
 }
 return d | 0;
}

function zi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Qm(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a + -1 | 0) >>> 0 < 31 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function ci(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Pm(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a + -1 | 0) >>> 0 < 12 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function ai(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Pm(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a + -1 | 0) >>> 0 < 31 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Bi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Qm(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a + -1 | 0) >>> 0 < 12 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function wk(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0;
 c[a >> 2] = 9304;
 e = a + 8 | 0;
 f = a + 12 | 0;
 b = c[e >> 2] | 0;
 if ((c[f >> 2] | 0) != (b | 0)) {
  d = 0;
  do {
   b = c[b + (d << 2) >> 2] | 0;
   if (b) co(b) | 0;
   d = d + 1 | 0;
   b = c[e >> 2] | 0;
  } while (d >>> 0 < (c[f >> 2] | 0) - b >> 2 >>> 0);
 }
 Xe(a + 144 | 0);
 zn(e);
 return;
}

function yn(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 h = a + 4 | 0;
 d = c[h >> 2] | 0;
 e = c[a >> 2] | 0;
 f = d - e >> 2;
 if (f >>> 0 >= b >>> 0) {
  if (f >>> 0 > b >>> 0 ? (g = e + (b << 2) | 0, (d | 0) != (g | 0)) : 0) {
   do d = d + -4 | 0; while ((d | 0) != (g | 0));
   c[h >> 2] = d;
  }
 } else Nn(a, b - f | 0);
 return;
}

function ei(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Pm(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 13 & (d & 4 | 0) == 0) c[b >> 2] = a + -1; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Di(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Qm(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 13 & (d & 4 | 0) == 0) c[b >> 2] = a + -1; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function wd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = i;
 i = i + 32 | 0;
 g = f;
 e = f + 20 | 0;
 c[g >> 2] = c[a + 60 >> 2];
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = b;
 c[g + 12 >> 2] = e;
 c[g + 16 >> 2] = d;
 if ((Sc(hb(140, g | 0) | 0) | 0) < 0) {
  c[e >> 2] = -1;
  a = -1;
 } else a = c[e >> 2] | 0;
 i = f;
 return a | 0;
}

function di(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Pm(d, a, f, g, 3) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 366 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Ci(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Qm(d, a, f, g, 3) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 366 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function ii(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Pm(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 61 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function fi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Pm(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 60 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function bi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Pm(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 24 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Vk(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0;
 i = (e - d | 0) >>> 2;
 if ((d | 0) != (e | 0)) {
  h = d;
  b = g;
  while (1) {
   g = c[h >> 2] | 0;
   a[b >> 0] = g >>> 0 < 128 ? g & 255 : f;
   h = h + 4 | 0;
   if ((h | 0) == (e | 0)) break; else b = b + 1 | 0;
  }
 }
 return d + (i << 2) | 0;
}

function Hi(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Qm(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 61 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Ei(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Qm(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 60 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Ai(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Qm(d, a, f, g, 2) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 24 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function ji(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Pm(d, a, f, g, 1) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 7 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function Nk(a, d, e, f) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 a : do if ((e | 0) == (f | 0)) e = f; else while (1) {
  a = c[e >> 2] | 0;
  if (a >>> 0 >= 128) break a;
  if (!((b[(c[(Hc() | 0) >> 2] | 0) + (a << 1) >> 1] & d) << 16 >> 16)) break a;
  e = e + 4 | 0;
  if ((e | 0) == (f | 0)) {
   e = f;
   break;
  }
 } while (0);
 return e | 0;
}

function Ii(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Qm(d, a, f, g, 1) | 0;
 d = c[f >> 2] | 0;
 if ((a | 0) < 7 & (d & 4 | 0) == 0) c[b >> 2] = a; else c[f >> 2] = d | 4;
 i = h;
 return;
}

function zd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = a + 84 | 0;
 g = c[e >> 2] | 0;
 h = d + 256 | 0;
 f = Td(g, 0, h) | 0;
 f = (f | 0) == 0 ? h : f - g | 0;
 d = f >>> 0 < d >>> 0 ? f : d;
 ko(b | 0, g | 0, d | 0) | 0;
 c[a + 4 >> 2] = g + d;
 b = g + f | 0;
 c[a + 8 >> 2] = b;
 c[e >> 2] = b;
 return d | 0;
}

function We(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 if (d >>> 0 > 4294967279) Dc(b);
 if (d >>> 0 < 11) {
  a[b >> 0] = d << 1;
  b = b + 1 | 0;
 } else {
  g = d + 16 & -16;
  f = Rb(g) | 0;
  c[b + 8 >> 2] = f;
  c[b >> 2] = g | 1;
  c[b + 4 >> 2] = d;
  b = f;
 }
 ho(b | 0, e | 0, d | 0) | 0;
 a[b + d >> 0] = 0;
 return;
}

function Ve(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 if (e >>> 0 > 4294967279) Dc(b);
 if (e >>> 0 < 11) {
  a[b >> 0] = e << 1;
  b = b + 1 | 0;
 } else {
  g = e + 16 & -16;
  f = Rb(g) | 0;
  c[b + 8 >> 2] = f;
  c[b >> 2] = g | 1;
  c[b + 4 >> 2] = e;
  b = f;
 }
 ko(b | 0, d | 0, e | 0) | 0;
 a[b + e >> 0] = 0;
 return;
}

function Pd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 112 | 0;
 e = g;
 f = e;
 h = f + 112 | 0;
 do {
  c[f >> 2] = 0;
  f = f + 4 | 0;
 } while ((f | 0) < (h | 0));
 c[e + 32 >> 2] = 26;
 c[e + 44 >> 2] = a;
 c[e + 76 >> 2] = -1;
 c[e + 84 >> 2] = a;
 h = Nd(e, b, d) | 0;
 i = g;
 return h | 0;
}

function Mk(a, d, e, f) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 a : do if ((e | 0) == (f | 0)) e = f; else while (1) {
  a = c[e >> 2] | 0;
  if (a >>> 0 < 128 ? (b[(c[(Hc() | 0) >> 2] | 0) + (a << 1) >> 1] & d) << 16 >> 16 != 0 : 0) break a;
  e = e + 4 | 0;
  if ((e | 0) == (f | 0)) {
   e = f;
   break;
  }
 } while (0);
 return e | 0;
}

function zn(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 e = c[b >> 2] | 0;
 do if (e) {
  f = b + 4 | 0;
  d = c[f >> 2] | 0;
  if ((d | 0) != (e | 0)) {
   do d = d + -4 | 0; while ((d | 0) != (e | 0));
   c[f >> 2] = d;
  }
  if ((b + 16 | 0) == (e | 0)) {
   a[b + 128 >> 0] = 0;
   break;
  } else {
   Sb(e);
   break;
  }
 } while (0);
 return;
}

function ff(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 if (d >>> 0 > 1073741807) Dc(b);
 if (d >>> 0 < 2) {
  a[b >> 0] = d << 1;
  b = b + 4 | 0;
 } else {
  g = d + 4 & -4;
  f = Rb(g << 2) | 0;
  c[b + 8 >> 2] = f;
  c[b >> 2] = g | 1;
  c[b + 4 >> 2] = d;
  b = f;
 }
 Zd(b, e, d) | 0;
 c[b + (d << 2) >> 2] = 0;
 return;
}

function ef(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 if (e >>> 0 > 1073741807) Dc(b);
 if (e >>> 0 < 2) {
  a[b >> 0] = e << 1;
  b = b + 4 | 0;
 } else {
  g = e + 4 & -4;
  f = Rb(g << 2) | 0;
  c[b + 8 >> 2] = f;
  c[b >> 2] = g | 1;
  c[b + 4 >> 2] = e;
  b = f;
 }
 Xd(b, d, e) | 0;
 c[b + (e << 2) >> 2] = 0;
 return;
}

function xl(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0;
 a = i;
 i = i + 16 | 0;
 k = a + 4 | 0;
 b = a;
 c[k >> 2] = d;
 c[b >> 2] = g;
 h = Cn(d, e, k, g, h, b, 1114111, 0) | 0;
 c[f >> 2] = c[k >> 2];
 c[j >> 2] = c[b >> 2];
 i = a;
 return h | 0;
}

function wl(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0;
 a = i;
 i = i + 16 | 0;
 k = a + 4 | 0;
 b = a;
 c[k >> 2] = d;
 c[b >> 2] = g;
 h = Bn(d, e, k, g, h, b, 1114111, 0) | 0;
 c[f >> 2] = c[k >> 2];
 c[j >> 2] = c[b >> 2];
 i = a;
 return h | 0;
}

function Fl(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0;
 a = i;
 i = i + 16 | 0;
 k = a + 4 | 0;
 b = a;
 c[k >> 2] = d;
 c[b >> 2] = g;
 h = Fn(d, e, k, g, h, b, 1114111, 0) | 0;
 c[f >> 2] = c[k >> 2];
 c[j >> 2] = c[b >> 2];
 i = a;
 return h | 0;
}

function El(a, b, d, e, f, g, h, j) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0;
 a = i;
 i = i + 16 | 0;
 k = a + 4 | 0;
 b = a;
 c[k >> 2] = d;
 c[b >> 2] = g;
 h = En(d, e, k, g, h, b, 1114111, 0) | 0;
 c[f >> 2] = c[k >> 2];
 c[j >> 2] = c[b >> 2];
 i = a;
 return h | 0;
}

function Rk(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = (d - b | 0) >>> 2;
 if ((b | 0) != (d | 0)) {
  e = b;
  do {
   a = c[e >> 2] | 0;
   if (a >>> 0 < 128) a = c[(c[(Ic() | 0) >> 2] | 0) + (a << 2) >> 2] | 0;
   c[e >> 2] = a;
   e = e + 4 | 0;
  } while ((e | 0) != (d | 0));
 }
 return b + (f << 2) | 0;
}

function Pk(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = (d - b | 0) >>> 2;
 if ((b | 0) != (d | 0)) {
  e = b;
  do {
   a = c[e >> 2] | 0;
   if (a >>> 0 < 128) a = c[(c[(Jc() | 0) >> 2] | 0) + (a << 2) >> 2] | 0;
   c[e >> 2] = a;
   e = e + 4 | 0;
  } while ((e | 0) != (d | 0));
 }
 return b + (f << 2) | 0;
}

function yd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 80 | 0;
 f = g;
 c[b + 36 >> 2] = 3;
 if ((c[b >> 2] & 64 | 0) == 0 ? (c[f >> 2] = c[b + 60 >> 2], c[f + 4 >> 2] = 21505, c[f + 8 >> 2] = g + 12, (Va(54, f | 0) | 0) != 0) : 0) a[b + 75 >> 0] = -1;
 f = xd(b, d, e) | 0;
 i = g;
 return f | 0;
}

function uf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 c[a + 24 >> 2] = b;
 c[a + 16 >> 2] = (b | 0) == 0 & 1;
 c[a + 20 >> 2] = 0;
 c[a + 4 >> 2] = 4098;
 c[a + 12 >> 2] = 0;
 c[a + 8 >> 2] = 6;
 d = a + 28 | 0;
 b = a + 32 | 0;
 a = b + 40 | 0;
 do {
  c[b >> 2] = 0;
  b = b + 4 | 0;
 } while ((b | 0) < (a | 0));
 Bk(d);
 return;
}

function vk(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 bo(b);
 f = a + 8 | 0;
 e = c[f >> 2] | 0;
 if ((c[a + 12 >> 2] | 0) - e >> 2 >>> 0 <= d >>> 0) {
  yn(f, d + 1 | 0);
  e = c[f >> 2] | 0;
 }
 a = c[e + (d << 2) >> 2] | 0;
 if (a) {
  co(a) | 0;
  e = c[f >> 2] | 0;
 }
 c[e + (d << 2) >> 2] = b;
 return;
}

function eo(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 fb(12844) | 0;
 if ((c[a >> 2] | 0) == 1) do xa(12872, 12844) | 0; while ((c[a >> 2] | 0) == 1);
 if (!(c[a >> 2] | 0)) {
  c[a >> 2] = 1;
  Ta(12844) | 0;
  pb[d & 127](b);
  fb(12844) | 0;
  c[a >> 2] = -1;
  Ta(12844) | 0;
  Ya(12872) | 0;
 } else Ta(12844) | 0;
 return;
}

function qc(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0;
 i = c[a + 4 >> 2] | 0;
 h = i >> 8;
 if (i & 1) h = c[(c[e >> 2] | 0) + h >> 2] | 0;
 a = c[a >> 2] | 0;
 yb[c[(c[a >> 2] | 0) + 20 >> 2] & 7](a, b, d, e + h | 0, (i & 2 | 0) != 0 ? f : 2, g);
 return;
}

function Mn(a) {
 a = a | 0;
 gf(12504);
 gf(12492);
 gf(12480);
 gf(12468);
 gf(12456);
 gf(12444);
 gf(12432);
 gf(12420);
 gf(12408);
 gf(12396);
 gf(12384);
 gf(12372);
 gf(12360);
 gf(12348);
 gf(12336);
 gf(12324);
 gf(12312);
 gf(12300);
 gf(12288);
 gf(12276);
 gf(12264);
 gf(12252);
 gf(12240);
 gf(12228);
 return;
}

function Ln(a) {
 a = a | 0;
 Xe(12212);
 Xe(12200);
 Xe(12188);
 Xe(12176);
 Xe(12164);
 Xe(12152);
 Xe(12140);
 Xe(12128);
 Xe(12116);
 Xe(12104);
 Xe(12092);
 Xe(12080);
 Xe(12068);
 Xe(12056);
 Xe(12044);
 Xe(12032);
 Xe(12020);
 Xe(12008);
 Xe(11996);
 Xe(11984);
 Xe(11972);
 Xe(11960);
 Xe(11948);
 Xe(11936);
 return;
}

function Kn(a) {
 a = a | 0;
 gf(11400);
 gf(11388);
 gf(11376);
 gf(11364);
 gf(11352);
 gf(11340);
 gf(11328);
 gf(11316);
 gf(11304);
 gf(11292);
 gf(11280);
 gf(11268);
 gf(11256);
 gf(11244);
 gf(11232);
 gf(11220);
 gf(11208);
 gf(11196);
 gf(11184);
 gf(11172);
 gf(11160);
 gf(11148);
 gf(11136);
 gf(11124);
 return;
}

function ue(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 h = f + 4 | 0;
 g = f;
 Mf(b);
 c[b >> 2] = 7736;
 c[b + 32 >> 2] = d;
 c[b + 40 >> 2] = e;
 c[b + 48 >> 2] = -1;
 a[b + 52 >> 0] = 0;
 Ck(h, b + 4 | 0);
 c[g >> 2] = c[h >> 2];
 De(b, g);
 Dk(g);
 i = f;
 return;
}

function se(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 h = f + 4 | 0;
 g = f;
 xf(b);
 c[b >> 2] = 7864;
 c[b + 32 >> 2] = d;
 c[b + 40 >> 2] = e;
 c[b + 48 >> 2] = -1;
 a[b + 52 >> 0] = 0;
 Ck(h, b + 4 | 0);
 c[g >> 2] = c[h >> 2];
 Oe(b, g);
 Dk(g);
 i = f;
 return;
}

function mo(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if ((c | 0) < (b | 0) & (b | 0) < (c + d | 0)) {
  e = b;
  c = c + d | 0;
  b = b + d | 0;
  while ((d | 0) > 0) {
   b = b - 1 | 0;
   c = c - 1 | 0;
   d = d - 1 | 0;
   a[b >> 0] = a[c >> 0] | 0;
  }
  b = e;
 } else ko(b, c, d) | 0;
 return b | 0;
}

function Jn(a) {
 a = a | 0;
 Xe(11108);
 Xe(11096);
 Xe(11084);
 Xe(11072);
 Xe(11060);
 Xe(11048);
 Xe(11036);
 Xe(11024);
 Xe(11012);
 Xe(11e3);
 Xe(10988);
 Xe(10976);
 Xe(10964);
 Xe(10952);
 Xe(10940);
 Xe(10928);
 Xe(10916);
 Xe(10904);
 Xe(10892);
 Xe(10880);
 Xe(10868);
 Xe(10856);
 Xe(10844);
 Xe(10832);
 return;
}

function po(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0;
 f = a & 65535;
 e = b & 65535;
 c = $(e, f) | 0;
 d = a >>> 16;
 a = (c >>> 16) + ($(e, d) | 0) | 0;
 e = b >>> 16;
 b = $(e, f) | 0;
 return (D = (a >>> 16) + ($(e, d) | 0) + (((a & 65535) + b | 0) >>> 16) | 0, a + b << 16 | c & 65535 | 0) | 0;
}

function ki(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Pm(d, a, f, g, 4) | 0;
 if (!(c[f >> 2] & 4)) c[b >> 2] = a + -1900;
 i = h;
 return;
}

function Lb() {
 var a = 0, b = 0, d = 0, e = 0;
 a = i;
 i = i + 16 | 0;
 e = a;
 b = Mb(6720, 13688, 13) | 0;
 c[e >> 2] = tf(b + (c[(c[b >> 2] | 0) + -12 >> 2] | 0) | 0) | 0;
 d = Fk(e, 9328) | 0;
 d = zb[c[(c[d >> 2] | 0) + 28 >> 2] & 15](d, 10) | 0;
 Dk(e);
 ng(b, d) | 0;
 bg(b) | 0;
 i = a;
 return 237;
}

function Ji(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 a = h + 4 | 0;
 j = h;
 c[j >> 2] = c[e >> 2];
 c[a >> 2] = c[j >> 2];
 a = Qm(d, a, f, g, 4) | 0;
 if (!(c[f >> 2] & 4)) c[b >> 2] = a + -1900;
 i = h;
 return;
}

function Gd(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = $(d, b) | 0;
 if ((c[e + 76 >> 2] | 0) > -1) {
  g = (rd(e) | 0) == 0;
  a = Fd(a, f, e) | 0;
  if (!g) sd(e);
 } else a = Fd(a, f, e) | 0;
 if ((a | 0) != (f | 0)) d = (a >>> 0) / (b >>> 0) | 0;
 return d | 0;
}

function rc(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 h = c[a + 4 >> 2] | 0;
 g = h >> 8;
 if (h & 1) g = c[(c[d >> 2] | 0) + g >> 2] | 0;
 a = c[a >> 2] | 0;
 nb[c[(c[a >> 2] | 0) + 24 >> 2] & 3](a, b, d + g | 0, (h & 2 | 0) != 0 ? e : 2, f);
 return;
}

function me(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 if (a) {
  d = $(b, a) | 0;
  if ((b | a) >>> 0 > 65535) d = ((d >>> 0) / (a >>> 0) | 0 | 0) == (b | 0) ? d : -1;
 } else d = 0;
 b = ke(d) | 0;
 if (!b) return b | 0;
 if (!(c[b + -4 >> 2] & 3)) return b | 0;
 ho(b | 0, 0, d | 0) | 0;
 return b | 0;
}

function al(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 if ((d | 0) != (e | 0)) {
  b = d;
  do {
   d = a[b >> 0] | 0;
   if (d << 24 >> 24 > -1) d = c[(c[(Ic() | 0) >> 2] | 0) + (d << 24 >> 24 << 2) >> 2] & 255;
   a[b >> 0] = d;
   b = b + 1 | 0;
  } while ((b | 0) != (e | 0));
 }
 return e | 0;
}

function _k(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 if ((d | 0) != (e | 0)) {
  b = d;
  do {
   d = a[b >> 0] | 0;
   if (d << 24 >> 24 > -1) d = c[(c[(Jc() | 0) >> 2] | 0) + (d << 24 >> 24 << 2) >> 2] & 255;
   a[b >> 0] = d;
   b = b + 1 | 0;
  } while ((b | 0) != (e | 0));
 }
 return e | 0;
}

function oo(b) {
 b = b | 0;
 var c = 0;
 c = a[m + (b & 255) >> 0] | 0;
 if ((c | 0) < 8) return c | 0;
 c = a[m + (b >> 8 & 255) >> 0] | 0;
 if ((c | 0) < 8) return c + 8 | 0;
 c = a[m + (b >> 16 & 255) >> 0] | 0;
 if ((c | 0) < 8) return c + 16 | 0;
 return (a[m + (b >>> 24) >> 0] | 0) + 24 | 0;
}

function rl(a) {
 a = a | 0;
 var b = 0, d = 0;
 a = a + 8 | 0;
 b = _c(c[a >> 2] | 0) | 0;
 d = md(0, 0, 4) | 0;
 if (b) _c(b) | 0;
 if (!d) {
  a = c[a >> 2] | 0;
  if (a) {
   a = _c(a) | 0;
   if (!a) a = 0; else {
    _c(a) | 0;
    a = 0;
   }
  } else a = 1;
 } else a = -1;
 return a | 0;
}

function Rb(a) {
 a = a | 0;
 var b = 0;
 b = (a | 0) == 0 ? 1 : a;
 a = ke(b) | 0;
 a : do if (!a) {
  while (1) {
   a = _b() | 0;
   if (!a) break;
   vb[a & 3]();
   a = ke(b) | 0;
   if (a) break a;
  }
  b = Da(4) | 0;
  c[b >> 2] = 2148;
  ab(b | 0, 8, 1);
 } while (0);
 return a | 0;
}

function Oe(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = Fk(d, 9388) | 0;
 e = b + 36 | 0;
 c[e >> 2] = f;
 d = b + 44 | 0;
 c[d >> 2] = tb[c[(c[f >> 2] | 0) + 24 >> 2] & 63](f) | 0;
 e = c[e >> 2] | 0;
 a[b + 53 >> 0] = (tb[c[(c[e >> 2] | 0) + 28 >> 2] & 63](e) | 0) & 1;
 return;
}

function De(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = Fk(d, 9396) | 0;
 e = b + 36 | 0;
 c[e >> 2] = f;
 d = b + 44 | 0;
 c[d >> 2] = tb[c[(c[f >> 2] | 0) + 24 >> 2] & 63](f) | 0;
 e = c[e >> 2] | 0;
 a[b + 53 >> 0] = (tb[c[(c[e >> 2] | 0) + 28 >> 2] & 63](e) | 0) & 1;
 return;
}

function Sn(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0;
 if (d >>> 0 > 1073741823) Ec(b);
 e = b + 128 | 0;
 if (d >>> 0 < 29 & (a[e >> 0] | 0) == 0) {
  a[e >> 0] = 1;
  e = b + 16 | 0;
 } else e = Rb(d << 2) | 0;
 c[b + 4 >> 2] = e;
 c[b >> 2] = e;
 c[b + 8 >> 2] = e + (d << 2);
 return;
}

function lc(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = c[a + 4 >> 2] | 0;
 f = g >> 8;
 if (g & 1) f = c[(c[d >> 2] | 0) + f >> 2] | 0;
 a = c[a >> 2] | 0;
 Bb[c[(c[a >> 2] | 0) + 28 >> 2] & 7](a, b, d + f | 0, (g & 2 | 0) != 0 ? e : 2);
 return;
}

function sf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 d = c[a + 40 >> 2] | 0;
 e = a + 32 | 0;
 f = a + 36 | 0;
 if (d) do {
  d = d + -1 | 0;
  ub[c[(c[e >> 2] | 0) + (d << 2) >> 2] & 0](b, a, c[(c[f >> 2] | 0) + (d << 2) >> 2] | 0);
 } while ((d | 0) != 0);
 return;
}

function Gg(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 if ((b | 0) == (d | 0)) a = 0; else {
  a = 0;
  do {
   a = (c[b >> 2] | 0) + (a << 4) | 0;
   e = a & -268435456;
   a = (e >>> 24 | e) ^ a;
   b = b + 4 | 0;
  } while ((b | 0) != (d | 0));
 }
 return a | 0;
}

function Bg(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if ((c | 0) == (d | 0)) b = 0; else {
  b = 0;
  do {
   b = (a[c >> 0] | 0) + (b << 4) | 0;
   e = b & -268435456;
   b = (e >>> 24 | e) ^ b;
   c = c + 1 | 0;
  } while ((c | 0) != (d | 0));
 }
 return b | 0;
}

function Zb() {
 var a = 0, b = 0;
 a = Qb() | 0;
 if (((a | 0) != 0 ? (b = c[a >> 2] | 0, (b | 0) != 0) : 0) ? (a = b + 48 | 0, (c[a >> 2] & -256 | 0) == 1126902528 ? (c[a + 4 >> 2] | 0) == 1129074247 : 0) : 0) Yb(c[b + 12 >> 2] | 0);
 b = c[534] | 0;
 c[534] = b + 0;
 Yb(b);
}

function el(b, c, d, e, f) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 if ((c | 0) != (d | 0)) while (1) {
  b = a[c >> 0] | 0;
  a[f >> 0] = b << 24 >> 24 > -1 ? b : e;
  c = c + 1 | 0;
  if ((c | 0) == (d | 0)) break; else f = f + 1 | 0;
 }
 return d | 0;
}

function Qc(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 c[a + 104 >> 2] = b;
 d = c[a + 4 >> 2] | 0;
 e = c[a + 8 >> 2] | 0;
 f = e - d | 0;
 c[a + 108 >> 2] = f;
 if ((b | 0) != 0 & (f | 0) > (b | 0)) c[a + 100 >> 2] = d + b; else c[a + 100 >> 2] = e;
 return;
}

function Ib(b) {
 b = b | 0;
 a[k >> 0] = a[b >> 0];
 a[k + 1 >> 0] = a[b + 1 >> 0];
 a[k + 2 >> 0] = a[b + 2 >> 0];
 a[k + 3 >> 0] = a[b + 3 >> 0];
 a[k + 4 >> 0] = a[b + 4 >> 0];
 a[k + 5 >> 0] = a[b + 5 >> 0];
 a[k + 6 >> 0] = a[b + 6 >> 0];
 a[k + 7 >> 0] = a[b + 7 >> 0];
}

function vc(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) oc(0, b, d, e, f); else {
  a = c[a + 8 >> 2] | 0;
  yb[c[(c[a >> 2] | 0) + 20 >> 2] & 7](a, b, d, e, f, g);
 }
 return;
}

function ge(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a + 20 | 0;
 f = c[e >> 2] | 0;
 a = (c[a + 16 >> 2] | 0) - f | 0;
 a = a >>> 0 > d >>> 0 ? d : a;
 ko(f | 0, b | 0, a | 0) | 0;
 c[e >> 2] = (c[e >> 2] | 0) + a;
 return d | 0;
}

function Cd(a) {
 a = a | 0;
 var b = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 b = e;
 if ((c[a + 8 >> 2] | 0) == 0 ? (Ad(a) | 0) != 0 : 0) b = -1; else if ((mb[c[a + 32 >> 2] & 31](a, b, 1) | 0) == 1) b = d[b >> 0] | 0; else b = -1;
 i = e;
 return b | 0;
}

function xc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 c[e >> 2] = c[d >> 2];
 a = mb[c[(c[a >> 2] | 0) + 16 >> 2] & 31](a, b, e) | 0;
 if (a) c[d >> 2] = c[e >> 2];
 i = f;
 return a & 1 | 0;
}

function sg(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0;
 a[b >> 0] = 0;
 c[b + 4 >> 2] = d;
 e = c[(c[d >> 2] | 0) + -12 >> 2] | 0;
 if (!(c[d + (e + 16) >> 2] | 0)) {
  e = c[d + (e + 72) >> 2] | 0;
  if (e) gg(e) | 0;
  a[b >> 0] = 1;
 }
 return;
}

function lg(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0;
 a[b >> 0] = 0;
 c[b + 4 >> 2] = d;
 e = c[(c[d >> 2] | 0) + -12 >> 2] | 0;
 if (!(c[d + (e + 16) >> 2] | 0)) {
  e = c[d + (e + 72) >> 2] | 0;
  if (e) bg(e) | 0;
  a[b >> 0] = 1;
 }
 return;
}

function $c(a, b) {
 a = +a;
 b = +b;
 var d = 0, e = 0;
 h[k >> 3] = a;
 e = c[k >> 2] | 0;
 d = c[k + 4 >> 2] | 0;
 h[k >> 3] = b;
 d = c[k + 4 >> 2] & -2147483648 | d & 2147483647;
 c[k >> 2] = e;
 c[k + 4 >> 2] = d;
 return +(+h[k >> 3]);
}

function Mm(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 g = i;
 i = i + 16 | 0;
 h = g;
 c[h >> 2] = f;
 f = _c(d) | 0;
 d = Od(a, b, e, h) | 0;
 if (f) _c(f) | 0;
 i = g;
 return d | 0;
}

function Xd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 if (d) {
  e = a;
  while (1) {
   d = d + -1 | 0;
   c[e >> 2] = c[b >> 2];
   if (!d) break; else {
    b = b + 4 | 0;
    e = e + 4 | 0;
   }
  }
 }
 return a | 0;
}

function Ek(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = d;
 if ((c[a >> 2] | 0) != -1) {
  c[b >> 2] = a;
  c[b + 4 >> 2] = 99;
  c[b + 8 >> 2] = 0;
  eo(a, b, 100);
 }
 i = d;
 return (c[a + 4 >> 2] | 0) + -1 | 0;
}

function Ho(a, b, c, d, e, f, g, h, i) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 return wb[a & 15](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0, h | 0, i | 0) | 0;
}

function cl(b, c, d, e) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 if ((c | 0) != (d | 0)) while (1) {
  a[e >> 0] = a[c >> 0] | 0;
  c = c + 1 | 0;
  if ((c | 0) == (d | 0)) break; else e = e + 1 | 0;
 }
 return d | 0;
}

function Wk(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 c[b + 4 >> 2] = f + -1;
 c[b >> 2] = 9344;
 f = b + 8 | 0;
 c[f >> 2] = d;
 a[b + 12 >> 0] = e & 1;
 if (!d) c[f >> 2] = c[(Hc() | 0) >> 2];
 return;
}

function Tk(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 if ((d | 0) != (e | 0)) while (1) {
  c[f >> 2] = a[d >> 0];
  d = d + 1 | 0;
  if ((d | 0) == (e | 0)) break; else f = f + 4 | 0;
 }
 return e | 0;
}

function kc(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) ic(0, b, d, e); else {
  a = c[a + 8 >> 2] | 0;
  Bb[c[(c[a >> 2] | 0) + 28 >> 2] & 7](a, b, d, e);
 }
 return;
}

function On(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = a + 4 | 0;
 a = b;
 b = c[d >> 2] | 0;
 do {
  c[b >> 2] = 0;
  b = (c[d >> 2] | 0) + 4 | 0;
  c[d >> 2] = b;
  a = a + -1 | 0;
 } while ((a | 0) != 0);
 return;
}

function Ue(b, d) {
 b = b | 0;
 d = d | 0;
 if (!(a[d >> 0] & 1)) {
  c[b >> 2] = c[d >> 2];
  c[b + 4 >> 2] = c[d + 4 >> 2];
  c[b + 8 >> 2] = c[d + 8 >> 2];
 } else Ve(b, c[d + 8 >> 2] | 0, c[d + 4 >> 2] | 0);
 return;
}

function Nm(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 c[g >> 2] = e;
 e = _c(b) | 0;
 b = Ld(a, d, g) | 0;
 if (e) _c(e) | 0;
 i = f;
 return b | 0;
}

function Bm(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 c[g >> 2] = e;
 e = _c(b) | 0;
 b = Pd(a, d, g) | 0;
 if (e) _c(e) | 0;
 i = f;
 return b | 0;
}

function An(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = a + 4 | 0;
 b = c[d >> 2] | 0;
 d = c[d + 4 >> 2] | 0;
 a = (c[a >> 2] | 0) + (d >> 1) | 0;
 if (d & 1) b = c[(c[a >> 2] | 0) + b >> 2] | 0;
 pb[b & 127](a);
 return;
}

function bm(a) {
 a = a | 0;
 switch (c[a + 4 >> 2] & 74 | 0) {
 case 64:
  {
   a = 8;
   break;
  }
 case 8:
  {
   a = 16;
   break;
  }
 case 0:
  {
   a = 0;
   break;
  }
 default:
  a = 10;
 }
 return a | 0;
}

function uo(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 vo(a, b, d, e, f) | 0;
 i = g;
 return (D = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function Vf(a) {
 a = a | 0;
 var b = 0;
 if ((tb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1) a = -1; else {
  b = a + 12 | 0;
  a = c[b >> 2] | 0;
  c[b >> 2] = a + 4;
  a = c[a >> 2] | 0;
 }
 return a | 0;
}

function Gf(a) {
 a = a | 0;
 var b = 0;
 if ((tb[c[(c[a >> 2] | 0) + 36 >> 2] & 63](a) | 0) == -1) a = -1; else {
  b = a + 12 | 0;
  a = c[b >> 2] | 0;
  c[b >> 2] = a + 1;
  a = d[a >> 0] | 0;
 }
 return a | 0;
}

function ze(b, d) {
 b = b | 0;
 d = d | 0;
 tb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](b) | 0;
 d = Fk(d, 9396) | 0;
 c[b + 36 >> 2] = d;
 a[b + 44 >> 0] = (tb[c[(c[d >> 2] | 0) + 28 >> 2] & 63](d) | 0) & 1;
 return;
}

function Ol(a, b) {
 a = a | 0;
 b = b | 0;
 c[a + 4 >> 2] = b + -1;
 c[a >> 2] = 9532;
 c[a + 8 >> 2] = 46;
 c[a + 12 >> 2] = 44;
 a = a + 16 | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function Ke(b, d) {
 b = b | 0;
 d = d | 0;
 tb[c[(c[b >> 2] | 0) + 24 >> 2] & 63](b) | 0;
 d = Fk(d, 9388) | 0;
 c[b + 36 >> 2] = d;
 a[b + 44 >> 0] = (tb[c[(c[d >> 2] | 0) + 28 >> 2] & 63](d) | 0) & 1;
 return;
}

function Nl(b, d) {
 b = b | 0;
 d = d | 0;
 c[b + 4 >> 2] = d + -1;
 c[b >> 2] = 9492;
 a[b + 8 >> 0] = 46;
 a[b + 9 >> 0] = 44;
 b = b + 12 | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 return;
}

function Pf(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 b = a;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 b = a + 8 | 0;
 c[b >> 2] = -1;
 c[b + 4 >> 2] = -1;
 return;
}

function Af(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 b = a;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 b = a + 8 | 0;
 c[b >> 2] = -1;
 c[b + 4 >> 2] = -1;
 return;
}

function xf(a) {
 a = a | 0;
 c[a >> 2] = 7928;
 Bk(a + 4 | 0);
 a = a + 8 | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 c[a + 12 >> 2] = 0;
 c[a + 16 >> 2] = 0;
 c[a + 20 >> 2] = 0;
 return;
}

function so(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 f = c;
 c = po(e, f) | 0;
 a = D;
 return (D = ($(b, f) | 0) + ($(d, e) | 0) + a | a & 0, c | 0 | 0) | 0;
}

function Mf(a) {
 a = a | 0;
 c[a >> 2] = 7992;
 Bk(a + 4 | 0);
 a = a + 8 | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 c[a + 12 >> 2] = 0;
 c[a + 16 >> 2] = 0;
 c[a + 20 >> 2] = 0;
 return;
}

function wo(a, b, c, d, e, f, g, h) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 return lb[a & 7](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0, h | 0) | 0;
}

function In(a) {
 a = a | 0;
 gf(10476);
 gf(10464);
 gf(10452);
 gf(10440);
 gf(10428);
 gf(10416);
 gf(10404);
 gf(10392);
 gf(10380);
 gf(10368);
 gf(10356);
 gf(10344);
 gf(10332);
 gf(10320);
 return;
}

function Hn(a) {
 a = a | 0;
 Xe(10304);
 Xe(10292);
 Xe(10280);
 Xe(10268);
 Xe(10256);
 Xe(10244);
 Xe(10232);
 Xe(10220);
 Xe(10208);
 Xe(10196);
 Xe(10184);
 Xe(10172);
 Xe(10160);
 Xe(10148);
 return;
}

function Zd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 if (d) {
  e = a;
  while (1) {
   d = d + -1 | 0;
   c[e >> 2] = b;
   if (!d) break; else e = e + 4 | 0;
  }
 }
 return a | 0;
}

function Zc(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 if (((a[c >> 0] | 0) != 0 ? (Ud(c, 21227) | 0) != 0 : 0) ? (Ud(c, 16703) | 0) != 0 : 0) d = 0; else if (!d) d = me(1, 4) | 0;
 return d | 0;
}

function co(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = a + 4 | 0;
 b = c[d >> 2] | 0;
 c[d >> 2] = b + -1;
 if (!b) {
  pb[c[(c[a >> 2] | 0) + 8 >> 2] & 127](a);
  a = 1;
 } else a = 0;
 return a | 0;
}

function no(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  D = b >> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 D = (b | 0) < 0 ? -1 : 0;
 return b >> c - 32 | 0;
}

function Id(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 c[g >> 2] = e;
 e = Od(a, b, d, g) | 0;
 i = f;
 return e | 0;
}

function rf(a) {
 a = a | 0;
 c[a >> 2] = 8216;
 sf(a, 0);
 Dk(a + 28 | 0);
 le(c[a + 32 >> 2] | 0);
 le(c[a + 36 >> 2] | 0);
 le(c[a + 48 >> 2] | 0);
 le(c[a + 60 >> 2] | 0);
 return;
}

function lo(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  D = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;
  return a << c;
 }
 D = a << c - 32;
 return 0;
}

function Co(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 return rb[a & 63](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0) | 0;
}

function jo(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  D = b >>> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 D = 0;
 return b >>> c - 32 | 0;
}

function Qf(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 b = a;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 b = a + 8 | 0;
 c[b >> 2] = -1;
 c[b + 4 >> 2] = -1;
 return;
}

function Bf(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 b = a;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 b = a + 8 | 0;
 c[b >> 2] = -1;
 c[b + 4 >> 2] = -1;
 return;
}

function zo(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = +g;
 return ob[a & 3](b | 0, c | 0, d | 0, e | 0, f | 0, +g) | 0;
}

function Kk(a, d, e) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 if (e >>> 0 < 128) e = (b[(c[(Hc() | 0) >> 2] | 0) + (e << 1) >> 1] & d) << 16 >> 16 != 0; else e = 0;
 return e | 0;
}

function hl(a, b, d, e, f, g, h, i) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 c[f >> 2] = d;
 c[i >> 2] = g;
 return 3;
}

function gl(a, b, d, e, f, g, h, i) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 c[f >> 2] = d;
 c[i >> 2] = g;
 return 3;
}

function pm(b) {
 b = b | 0;
 if ((a[1912] | 0) == 0 ? (Aa(1912) | 0) != 0 : 0) {
  ef(12832, 12784, Wd(12784) | 0);
  $a(108, 12832, n | 0) | 0;
  Ga(1912);
 }
 return 12832;
}

function nm(b) {
 b = b | 0;
 if ((a[1896] | 0) == 0 ? (Aa(1896) | 0) != 0 : 0) {
  ef(12760, 12676, Wd(12676) | 0);
  $a(108, 12760, n | 0) | 0;
  Ga(1896);
 }
 return 12760;
}

function lm(b) {
 b = b | 0;
 if ((a[1880] | 0) == 0 ? (Aa(1880) | 0) != 0 : 0) {
  ef(12652, 12616, Wd(12616) | 0);
  $a(108, 12652, n | 0) | 0;
  Ga(1880);
 }
 return 12652;
}

function jm(b) {
 b = b | 0;
 if ((a[1864] | 0) == 0 ? (Aa(1864) | 0) != 0 : 0) {
  ef(12592, 12556, Wd(12556) | 0);
  $a(108, 12592, n | 0) | 0;
  Ga(1864);
 }
 return 12592;
}

function qk(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 b = Vc((a[d >> 0] & 1) == 0 ? d + 1 | 0 : c[d + 8 >> 2] | 0, 1) | 0;
 return b >>> ((b | 0) != (-1 | 0) & 1) | 0;
}

function lk(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 b = Vc((a[d >> 0] & 1) == 0 ? d + 1 | 0 : c[d + 8 >> 2] | 0, 1) | 0;
 return b >>> ((b | 0) != (-1 | 0) & 1) | 0;
}

function fo() {}
function go(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (D = d, a - c >>> 0 | 0) | 0;
}

function Jo(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 yb[a & 7](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0);
}

function Jd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 c[f >> 2] = d;
 d = Pd(a, b, f) | 0;
 i = e;
 return d | 0;
}

function Qb() {
 var a = 0, b = 0;
 a = i;
 i = i + 16 | 0;
 if (!(Ua(2288, 2) | 0)) {
  b = Qa(c[571] | 0) | 0;
  i = a;
  return b | 0;
 } else Pb(13953, a);
 return 0;
}

function wc(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) oc(0, b, d, e, f);
 return;
}

function Wm(b, d) {
 b = b | 0;
 d = d | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 a[b + 128 >> 0] = 0;
 if (d) {
  Sn(b, d);
  On(b, d);
 }
 return;
}

function om(b) {
 b = b | 0;
 if ((a[1904] | 0) == 0 ? (Aa(1904) | 0) != 0 : 0) {
  Ve(12772, 21600, 11);
  $a(107, 12772, n | 0) | 0;
  Ga(1904);
 }
 return 12772;
}

function mm(b) {
 b = b | 0;
 if ((a[1888] | 0) == 0 ? (Aa(1888) | 0) != 0 : 0) {
  Ve(12664, 21579, 20);
  $a(107, 12664, n | 0) | 0;
  Ga(1888);
 }
 return 12664;
}

function ud(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 c[d >> 2] = c[a + 60 >> 2];
 a = Sc(cb(6, d | 0) | 0) | 0;
 i = b;
 return a | 0;
}

function km(b) {
 b = b | 0;
 if ((a[1872] | 0) == 0 ? (Aa(1872) | 0) != 0 : 0) {
  Ve(12604, 21570, 8);
  $a(107, 12604, n | 0) | 0;
  Ga(1872);
 }
 return 12604;
}

function im(b) {
 b = b | 0;
 if ((a[1856] | 0) == 0 ? (Aa(1856) | 0) != 0 : 0) {
  Ve(12544, 21561, 8);
  $a(107, 12544, n | 0) | 0;
  Ga(1856);
 }
 return 12544;
}

function Lo(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 return Ab[a & 31](b | 0, c | 0, d | 0, e | 0, f | 0) | 0;
}

function ul(a) {
 a = a | 0;
 a = c[a + 8 >> 2] | 0;
 if (a) {
  a = _c(a) | 0;
  if (!a) a = 4; else {
   _c(a) | 0;
   a = 4;
  }
 } else a = 1;
 return a | 0;
}

function io(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (D = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function Do(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 return sb[a & 7](b | 0, c | 0, d | 0, e | 0, +f) | 0;
}

function Pb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = i;
 i = i + 16 | 0;
 c[d >> 2] = b;
 b = c[636] | 0;
 Md(b, a, d) | 0;
 Ed(10, b) | 0;
 za();
}

function Yo(a, b, c, d, e, f, g, h) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 ca(11);
 return 0;
}

function qm(a) {
 a = a | 0;
 var b = 0;
 c[a >> 2] = 9412;
 a = a + 8 | 0;
 b = c[a >> 2] | 0;
 if ((b | 0) != (Vg() | 0)) Wc(c[a >> 2] | 0);
 return;
}

function yo(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 nb[a & 3](b | 0, c | 0, d | 0, e | 0, f | 0);
}

function Xk(b) {
 b = b | 0;
 var d = 0;
 c[b >> 2] = 9344;
 d = c[b + 8 >> 2] | 0;
 if ((d | 0) != 0 ? (a[b + 12 >> 0] | 0) != 0 : 0) Tb(d);
 return;
}

function $k(a, b) {
 a = a | 0;
 b = b | 0;
 if (b << 24 >> 24 > -1) b = c[(c[(Ic() | 0) >> 2] | 0) + (b << 24 >> 24 << 2) >> 2] & 255;
 return b | 0;
}

function Hb(b) {
 b = b | 0;
 a[k >> 0] = a[b >> 0];
 a[k + 1 >> 0] = a[b + 1 >> 0];
 a[k + 2 >> 0] = a[b + 2 >> 0];
 a[k + 3 >> 0] = a[b + 3 >> 0];
}

function Cc(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + 16 | 0;
 le(a);
 if (!(_a(c[571] | 0, 0) | 0)) {
  i = b;
  return;
 } else Pb(14107, b);
}

function Zk(a, b) {
 a = a | 0;
 b = b | 0;
 if (b << 24 >> 24 > -1) b = c[(c[(Jc() | 0) >> 2] | 0) + ((b & 255) << 2) >> 2] & 255;
 return b | 0;
}

function Vg() {
 if ((a[1264] | 0) == 0 ? (Aa(1264) | 0) != 0 : 0) {
  c[2473] = Zc(2147483647, 21227, 0) | 0;
  Ga(1264);
 }
 return c[2473] | 0;
}

function ll(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 a = d - c | 0;
 return (a >>> 0 < e >>> 0 ? a : e) | 0;
}

function Io(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return xb[a & 7](b | 0, c | 0, d | 0, e | 0) | 0;
}

function No(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 ca(0);
 return 0;
}

function uk() {
 if ((a[1584] | 0) == 0 ? (Aa(1584) | 0) != 0 : 0) {
  yk() | 0;
  c[2523] = 10088;
  Ga(1584);
 }
 return c[2523] | 0;
}

function jc(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) ic(0, b, d, e);
 return;
}

function Ak() {
 if ((a[1752] | 0) == 0 ? (Aa(1752) | 0) != 0 : 0) {
  zk() | 0;
  c[2525] = 10096;
  Ga(1752);
 }
 return c[2525] | 0;
}

function _c(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = (Sa() | 0) + 176 | 0;
 d = c[b >> 2] | 0;
 if (a) c[b >> 2] = a;
 return d | 0;
}

function Wd(a) {
 a = a | 0;
 var b = 0;
 b = a;
 while (1) if (!(c[b >> 2] | 0)) break; else b = b + 4 | 0;
 return b - a >> 2 | 0;
}

function tf(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = d;
 Ck(b, a + 28 | 0);
 i = d;
 return c[b >> 2] | 0;
}

function Qk(a, b) {
 a = a | 0;
 b = b | 0;
 if (b >>> 0 < 128) b = c[(c[(Ic() | 0) >> 2] | 0) + (b << 2) >> 2] | 0;
 return b | 0;
}

function Ok(a, b) {
 a = a | 0;
 b = b | 0;
 if (b >>> 0 < 128) b = c[(c[(Jc() | 0) >> 2] | 0) + (b << 2) >> 2] | 0;
 return b | 0;
}

function Fk(a, b) {
 a = a | 0;
 b = b | 0;
 a = c[a >> 2] | 0;
 b = Ek(b) | 0;
 return c[(c[a + 8 >> 2] | 0) + (b << 2) >> 2] | 0;
}

function yj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function xj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function nj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function mj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function cj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function bj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function Mo(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 Bb[a & 7](b | 0, c | 0, d | 0, e | 0);
}

function Jj(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function Ij(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = 2;
 a[b + 1 >> 0] = 3;
 a[b + 2 >> 0] = 0;
 a[b + 3 >> 0] = 4;
 return;
}

function Lc(a) {
 a = a | 0;
 if ((a + -48 | 0) >>> 0 < 10) a = 1; else a = ((a | 32) + -97 | 0) >>> 0 < 6;
 return a & 1 | 0;
}

function Jl(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return Gn(c, d, e, 1114111, 0) | 0;
}

function Bl(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return Dn(c, d, e, 1114111, 0) | 0;
}

function To(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 ca(6);
 return 0;
}

function Bc() {
 var a = 0;
 a = i;
 i = i + 16 | 0;
 if (!(ya(2284, 94) | 0)) {
  i = a;
  return;
 } else Pb(14057, a);
}

function Qo(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 ca(3);
 return 0;
}

function xo(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return mb[a & 31](b | 0, c | 0, d | 0) | 0;
}

function Mi(a) {
 a = a | 0;
 var b = 0;
 b = c[a >> 2] | 0;
 if ((b | 0) != (Vg() | 0)) Wc(c[a >> 2] | 0);
 return;
}

function yl(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 c[f >> 2] = d;
 return 3;
}

function il(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 c[f >> 2] = d;
 return 3;
}

function Sc(a) {
 a = a | 0;
 if (a >>> 0 > 4294963200) {
  c[(Mc() | 0) >> 2] = 0 - a;
  a = -1;
 }
 return a | 0;
}

function Gl(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 c[f >> 2] = d;
 return 3;
}

function _o(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 ca(13);
}

function Sd(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 a = fe(a, b, c, 0, -2147483648) | 0;
 return a | 0;
}

function Mc() {
 var a = 0;
 if (!(c[574] | 0)) a = 2572; else a = c[(Sa() | 0) + 60 >> 2] | 0;
 return a | 0;
}

function Gc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 a = Sd(a, b, c) | 0;
 return a | 0;
}

function Fc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 a = Rd(a, b, c) | 0;
 return a | 0;
}

function Ik(a) {
 a = a | 0;
 var b = 0;
 b = c[2329] | 0;
 c[2329] = b + 1;
 c[a + 4 >> 2] = b + 1;
 return;
}

function uj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function tj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function sj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function jj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function ij(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function hj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function hd(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return id(0, a, b, (c | 0) != 0 ? c : 2608) | 0;
}

function ap(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 ca(15);
 return 0;
}

function _i(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function Zi(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function Yi(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function Fj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function Ej(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function Dj(a, b) {
 a = a | 0;
 b = b | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return;
}

function Fo(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 ub[a & 0](b | 0, c | 0, d | 0);
}

function to(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return vo(a, b, c, d, 0) | 0;
}

function Uo(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = +e;
 ca(7);
 return 0;
}

function Rd(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 a = fe(a, b, c, -1, -1) | 0;
 return a | 0;
}

function Bk(a) {
 a = a | 0;
 var b = 0;
 b = c[(Ak() | 0) >> 2] | 0;
 c[a >> 2] = b;
 bo(b);
 return;
}

function yc(a) {
 a = a | 0;
 if (!a) a = 0; else a = (nc(a, 40, 88, 0) | 0) != 0;
 return a & 1 | 0;
}

function qf(a, b) {
 a = a | 0;
 b = b | 0;
 c[a + 16 >> 2] = (c[a + 24 >> 2] | 0) == 0 | b;
 return;
}

function Uk(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return (b >>> 0 < 128 ? b & 255 : c) | 0;
}

function qd(a, b) {
 a = a | 0;
 b = b | 0;
 if (!a) a = 0; else a = nd(a, b, 0) | 0;
 return a | 0;
}

function dl(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return (b << 24 >> 24 > -1 ? b : c) | 0;
}

function re(a) {
 a = a | 0;
 bg(6720) | 0;
 bg(6888) | 0;
 gg(7060) | 0;
 gg(7228) | 0;
 return;
}
function Cb(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function Po(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 ca(2);
}

function Ko(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return zb[a & 15](b | 0, c | 0) | 0;
}

function Fg(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 pf(a, c, d);
 return;
}

function Ck(a, b) {
 a = a | 0;
 b = b | 0;
 b = c[b >> 2] | 0;
 c[a >> 2] = b;
 bo(b);
 return;
}

function Ag(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 of(a, c, d);
 return;
}

function jd(a) {
 a = a | 0;
 if (!a) a = 1; else a = (c[a >> 2] | 0) == 0;
 return a & 1 | 0;
}

function Yb(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + 16 | 0;
 vb[a & 3]();
 Pb(14017, b);
}

function zk() {
 var a = 0;
 a = c[(uk() | 0) >> 2] | 0;
 c[2524] = a;
 bo(a);
 return 10096;
}

function pg(a) {
 a = a | 0;
 rf(a + ((c[(c[a >> 2] | 0) + -12 >> 2] | 0) + 4) | 0);
 return;
}

function ig(a) {
 a = a | 0;
 rf(a + ((c[(c[a >> 2] | 0) + -12 >> 2] | 0) + 4) | 0);
 return;
}

function dg(a) {
 a = a | 0;
 rf(a + ((c[(c[a >> 2] | 0) + -12 >> 2] | 0) + 8) | 0);
 return;
}

function _f(a) {
 a = a | 0;
 rf(a + ((c[(c[a >> 2] | 0) + -12 >> 2] | 0) + 8) | 0);
 return;
}

function Zo(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 ca(12);
 return 0;
}

function Uc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return d | 0;
}

function rg(a) {
 a = a | 0;
 qg(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) | 0);
 return;
}

function kg(a) {
 a = a | 0;
 jg(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) | 0);
 return;
}

function fg(a) {
 a = a | 0;
 eg(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) | 0);
 return;
}

function bo(a) {
 a = a | 0;
 a = a + 4 | 0;
 c[a >> 2] = (c[a >> 2] | 0) + 1;
 return;
}

function ag(a) {
 a = a | 0;
 $f(a + (c[(c[a >> 2] | 0) + -12 >> 2] | 0) | 0);
 return;
}

function Hk(a) {
 a = a | 0;
 if (a) pb[c[(c[a >> 2] | 0) + 4 >> 2] & 127](a);
 return;
}

function Kc(a) {
 a = a | 0;
 return ((a | 0) == 32 | (a + -9 | 0) >>> 0 < 5) & 1 | 0;
}

function Bo(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 qb[a & 63](b | 0, c | 0);
}

function de(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return zd(a, b, c) | 0;
}

function Qd(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return +(+ee(a, b, 2));
}

function vg(a) {
 a = a | 0;
 a = a + 16 | 0;
 c[a >> 2] = c[a >> 2] | 1;
 return;
}

function bp(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 ca(16);
}

function am(a, b) {
 a = a | 0;
 b = b | 0;
 ef(a, 10124, Wd(10124) | 0);
 return;
}

function _l(a, b) {
 a = a | 0;
 b = b | 0;
 ef(a, 10104, Wd(10104) | 0);
 return;
}

function Xc(a, b) {
 a = a | 0;
 b = b | 0;
 return (a + -48 | 0) >>> 0 < 10 | 0;
}

function wf(a) {
 a = a | 0;
 c[a >> 2] = 7928;
 Dk(a + 4 | 0);
 Sb(a);
 return;
}

function gf(b) {
 b = b | 0;
 if (a[b >> 0] & 1) Sb(c[b + 8 >> 2] | 0);
 return;
}

function Xe(b) {
 b = b | 0;
 if (a[b >> 0] & 1) Sb(c[b + 8 >> 2] | 0);
 return;
}

function Lf(a) {
 a = a | 0;
 c[a >> 2] = 7992;
 Dk(a + 4 | 0);
 Sb(a);
 return;
}

function xn(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(9288) | 0);
 return;
}

function wn(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(9248) | 0);
 return;
}

function vn(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(8808) | 0);
 return;
}

function un(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(8776) | 0);
 return;
}

function tn(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(8744) | 0);
 return;
}

function sn(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(8652) | 0);
 return;
}

function rn(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(9208) | 0);
 return;
}

function qn(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(9172) | 0);
 return;
}

function pn(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(9136) | 0);
 return;
}

function on(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(9100) | 0);
 return;
}

function nn(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(9064) | 0);
 return;
}

function ln(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(8936) | 0);
 return;
}

function kn(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(8872) | 0);
 return;
}

function jn(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(8560) | 0);
 return;
}

function hn(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(8500) | 0);
 return;
}

function gn(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(8440) | 0);
 return;
}

function fn(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(8368) | 0);
 return;
}

function en(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(9476) | 0);
 return;
}

function dn(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(9468) | 0);
 return;
}

function cn(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(9460) | 0);
 return;
}

function bn(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(9452) | 0);
 return;
}

function an(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(9396) | 0);
 return;
}

function _m(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(9320) | 0);
 return;
}

function Zm(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(9328) | 0);
 return;
}

function Ym(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(8296) | 0);
 return;
}

function Xm(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(8256) | 0);
 return;
}

function Oo(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ca(1);
 return 0;
}

function $m(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(9388) | 0);
 return;
}

function mn(a, b) {
 a = a | 0;
 b = b | 0;
 vk(a, b, Ek(9e3) | 0);
 return;
}

function hf(a, b) {
 a = a | 0;
 b = b | 0;
 return jf(a, b, Wd(b) | 0) | 0;
}

function _b() {
 var a = 0;
 a = c[540] | 0;
 c[540] = a + 0;
 return a | 0;
}

function Ye(a, b) {
 a = a | 0;
 b = b | 0;
 return Ze(a, b, Vd(b) | 0) | 0;
}

function Gb(a, b) {
 a = a | 0;
 b = b | 0;
 if (!o) {
  o = a;
  p = b;
 }
}

function Eo(a, b) {
 a = a | 0;
 b = b | 0;
 return tb[a & 63](b | 0) | 0;
}

function zf(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return a | 0;
}

function Rl(a) {
 a = a | 0;
 c[a >> 2] = 9532;
 Xe(a + 16 | 0);
 return;
}

function Pl(a) {
 a = a | 0;
 c[a >> 2] = 9492;
 Xe(a + 12 | 0);
 return;
}

function Of(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return a | 0;
}

function vf(a) {
 a = a | 0;
 c[a >> 2] = 7928;
 Dk(a + 4 | 0);
 return;
}

function ae(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) sd(a);
 return;
}

function Yl(a, b) {
 a = a | 0;
 b = b | 0;
 Ue(a, b + 16 | 0);
 return;
}

function Xl(a, b) {
 a = a | 0;
 b = b | 0;
 Ue(a, b + 12 | 0);
 return;
}

function Kf(a) {
 a = a | 0;
 c[a >> 2] = 7992;
 Dk(a + 4 | 0);
 return;
}

function $d(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) sd(a);
 return;
}

function Zl(a, b) {
 a = a | 0;
 b = b | 0;
 Ve(a, 21329, 4);
 return;
}

function Sk(a, b) {
 a = a | 0;
 b = b | 0;
 return b << 24 >> 24 | 0;
}

function $l(a, b) {
 a = a | 0;
 b = b | 0;
 Ve(a, 21334, 5);
 return;
}

function zc() {
 var a = 0;
 a = Da(4) | 0;
 Ub(a);
 ab(a | 0, 8, 1);
}

function vj(a, b) {
 a = a | 0;
 b = b | 0;
 ff(a, 1, 45);
 return;
}

function kj(a, b) {
 a = a | 0;
 b = b | 0;
 We(a, 1, 45);
 return;
}

function Gj(a, b) {
 a = a | 0;
 b = b | 0;
 ff(a, 1, 45);
 return;
}

function $i(a, b) {
 a = a | 0;
 b = b | 0;
 We(a, 1, 45);
 return;
}

function Wo(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ca(9);
}

function Ao(a, b) {
 a = a | 0;
 b = b | 0;
 pb[a & 127](b | 0);
}

function $o(a, b) {
 a = a | 0;
 b = b | 0;
 ca(14);
 return 0;
}

function gd(a, b) {
 a = +a;
 b = b | 0;
 return +(+fd(a, b));
}

function ed(a, b) {
 a = +a;
 b = b | 0;
 return +(+dd(a, b));
}

function Yc(a, b) {
 a = a | 0;
 b = b | 0;
 return Lc(a) | 0;
}

function yk() {
 tk(1592, 1);
 c[2522] = 1592;
 return 10088;
}

function qg(a) {
 a = a | 0;
 rf(a + 4 | 0);
 Sb(a);
 return;
}

function jg(a) {
 a = a | 0;
 rf(a + 4 | 0);
 Sb(a);
 return;
}

function eg(a) {
 a = a | 0;
 rf(a + 8 | 0);
 Sb(a);
 return;
}

function Ri(a) {
 a = a | 0;
 Mi(a + 8 | 0);
 Sb(a);
 return;
}

function Ni(a) {
 a = a | 0;
 Mi(a + 8 | 0);
 Sb(a);
 return;
}

function Dk(a) {
 a = a | 0;
 co(c[a >> 2] | 0) | 0;
 return;
}

function $f(a) {
 a = a | 0;
 rf(a + 8 | 0);
 Sb(a);
 return;
}

function Dc(a) {
 a = a | 0;
 Ca(14160, 14189, 1164, 14268);
}

function we() {
 qe(0);
 $a(97, 19315, n | 0) | 0;
 return;
}

function cd(a, b) {
 a = +a;
 b = +b;
 return +(+bd(a, b));
}

function ad(a, b) {
 a = +a;
 b = +b;
 return +(+$c(a, b));
}

function Vc(a, b) {
 a = a | 0;
 b = b | 0;
 return -1 | 0;
}

function Fb(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function Ec(a) {
 a = a | 0;
 Ca(14289, 14312, 303, 14268);
}

function bl(a, b) {
 a = a | 0;
 b = b | 0;
 return b | 0;
}

function Wl(a) {
 a = a | 0;
 return c[a + 12 >> 2] | 0;
}

function Ub(a) {
 a = a | 0;
 c[a >> 2] = 2148;
 return;
}

function Yf(a, b) {
 a = a | 0;
 b = b | 0;
 return -1;
}

function Wf(a, b) {
 a = a | 0;
 b = b | 0;
 return -1;
}

function Vl(b) {
 b = b | 0;
 return a[b + 9 >> 0] | 0;
}

function Ul(a) {
 a = a | 0;
 return c[a + 8 >> 2] | 0;
}

function Tl(b) {
 b = b | 0;
 return a[b + 8 >> 0] | 0;
}

function Jf(a, b) {
 a = a | 0;
 b = b | 0;
 return -1;
}

function Hf(a, b) {
 a = a | 0;
 b = b | 0;
 return -1;
}

function ye(a) {
 a = a | 0;
 Kf(a);
 Sb(a);
 return;
}

function xk(a) {
 a = a | 0;
 wk(a);
 Sb(a);
 return;
}

function ug(a) {
 a = a | 0;
 rf(a);
 Sb(a);
 return;
}

function og(a) {
 a = a | 0;
 rf(a + 4 | 0);
 return;
}

function nl(a) {
 a = a | 0;
 qm(a);
 Sb(a);
 return;
}

function hg(a) {
 a = a | 0;
 rf(a + 4 | 0);
 return;
}

function cg(a) {
 a = a | 0;
 rf(a + 8 | 0);
 return;
}

function Zf(a) {
 a = a | 0;
 rf(a + 8 | 0);
 return;
}

function Yk(a) {
 a = a | 0;
 Xk(a);
 Sb(a);
 return;
}

function Sl(a) {
 a = a | 0;
 Rl(a);
 Sb(a);
 return;
}

function Ql(a) {
 a = a | 0;
 Pl(a);
 Sb(a);
 return;
}

function Qi(a) {
 a = a | 0;
 Mi(a + 8 | 0);
 return;
}

function Pe(a) {
 a = a | 0;
 vf(a);
 Sb(a);
 return;
}

function Li(a) {
 a = a | 0;
 Mi(a + 8 | 0);
 return;
}

function Je(a) {
 a = a | 0;
 vf(a);
 Sb(a);
 return;
}

function Ee(a) {
 a = a | 0;
 Kf(a);
 Sb(a);
 return;
}

function yf(a, b) {
 a = a | 0;
 b = b | 0;
 return;
}

function sk(a, b) {
 a = a | 0;
 b = b | 0;
 return;
}

function nk(a, b) {
 a = a | 0;
 b = b | 0;
 return;
}

function Nf(a, b) {
 a = a | 0;
 b = b | 0;
 return;
}

function So(a, b) {
 a = a | 0;
 b = b | 0;
 ca(5);
}

function Ob(a) {
 a = a | 0;
 La(a | 0) | 0;
 Zb();
}

function Re(a) {
 a = a | 0;
 return Te(a, 1) | 0;
}

function Qe(a) {
 a = a | 0;
 return Te(a, 0) | 0;
}

function Ge(a) {
 a = a | 0;
 return Ie(a, 1) | 0;
}

function Fe(a) {
 a = a | 0;
 return Ie(a, 0) | 0;
}

function rj(a) {
 a = a | 0;
 return 2147483647;
}

function qj(a) {
 a = a | 0;
 return 2147483647;
}

function Cj(a) {
 a = a | 0;
 return 2147483647;
}

function Bj(a) {
 a = a | 0;
 return 2147483647;
}

function Vo(a) {
 a = a | 0;
 ca(8);
 return 0;
}

function yg(a) {
 a = a | 0;
 Sb(a);
 return;
}

function vl(a) {
 a = a | 0;
 Sb(a);
 return;
}

function pk(a) {
 a = a | 0;
 Sb(a);
 return;
}

function pj(a) {
 a = a | 0;
 Sb(a);
 return;
}

function ph(a) {
 a = a | 0;
 Sb(a);
 return;
}

function oi(a) {
 a = a | 0;
 Sb(a);
 return;
}

function kk(a) {
 a = a | 0;
 Sb(a);
 return;
}

function gc(a) {
 a = a | 0;
 Sb(a);
 return;
}

function fl(a) {
 a = a | 0;
 Sb(a);
 return;
}

function fc(a) {
 a = a | 0;
 Sb(a);
 return;
}

function ek(a) {
 a = a | 0;
 Sb(a);
 return;
}

function ej(a) {
 a = a | 0;
 Sb(a);
 return;
}

function ec(a) {
 a = a | 0;
 Sb(a);
 return;
}

function _j(a) {
 a = a | 0;
 Sb(a);
 return;
}

function Xg(a) {
 a = a | 0;
 Sb(a);
 return;
}

function Wc(a) {
 a = a | 0;
 le(a);
 return;
}

function Wb(a) {
 a = a | 0;
 Sb(a);
 return;
}

function Vi(a) {
 a = a | 0;
 Sb(a);
 return;
}

function Uj(a) {
 a = a | 0;
 Sb(a);
 return;
}

function Tb(a) {
 a = a | 0;
 Sb(a);
 return;
}

function Sb(a) {
 a = a | 0;
 le(a);
 return;
}

function Rh(a) {
 a = a | 0;
 Sb(a);
 return;
}

function Ml(a) {
 a = a | 0;
 Sb(a);
 return;
}

function Ll(a) {
 a = a | 0;
 Sb(a);
 return;
}

function Lj(a) {
 a = a | 0;
 Sb(a);
 return;
}

function Jk(a) {
 a = a | 0;
 Sb(a);
 return;
}

function Ig(a) {
 a = a | 0;
 Sb(a);
 return;
}

function Gk(a) {
 a = a | 0;
 Sb(a);
 return;
}

function Eh(a) {
 a = a | 0;
 Sb(a);
 return;
}

function Dl(a) {
 a = a | 0;
 Sb(a);
 return;
}

function Dg(a) {
 a = a | 0;
 Sb(a);
 return;
}

function Aj(a) {
 a = a | 0;
 Sb(a);
 return;
}

function Xb(a) {
 a = a | 0;
 return 14002;
}

function Go(a) {
 a = a | 0;
 vb[a & 3]();
}

function gj(a) {
 a = a | 0;
 return 127;
}

function fj(a) {
 a = a | 0;
 return 127;
}

function Xi(a) {
 a = a | 0;
 return 127;
}

function Wi(a) {
 a = a | 0;
 return 127;
}

function Uf(a) {
 a = a | 0;
 return -1;
}

function Ff(a) {
 a = a | 0;
 return -1;
}

function zl(a) {
 a = a | 0;
 return 0;
}

function wj(a) {
 a = a | 0;
 return 0;
}

function sl(a) {
 a = a | 0;
 return 0;
}

function rd(a) {
 a = a | 0;
 return 0;
}

function pi(a) {
 a = a | 0;
 return 2;
}

function ml(a) {
 a = a | 0;
 return 1;
}

function lj(a) {
 a = a | 0;
 return 0;
}

function kl(a) {
 a = a | 0;
 return 1;
}

function jl(a) {
 a = a | 0;
 return 1;
}

function aj(a) {
 a = a | 0;
 return 0;
}

function Tc(a) {
 a = a | 0;
 return 0;
}

function Sh(a) {
 a = a | 0;
 return 2;
}

function Sf(a) {
 a = a | 0;
 return 0;
}

function Rf(a) {
 a = a | 0;
 return 0;
}

function Kl(a) {
 a = a | 0;
 return 4;
}

function Il(a) {
 a = a | 0;
 return 0;
}

function Hl(a) {
 a = a | 0;
 return 0;
}

function Hj(a) {
 a = a | 0;
 return 0;
}

function Df(a) {
 a = a | 0;
 return 0;
}

function Cl(a) {
 a = a | 0;
 return 4;
}

function Cf(a) {
 a = a | 0;
 return 0;
}

function Al(a) {
 a = a | 0;
 return 0;
}

function zj(a) {
 a = a | 0;
 return;
}

function xg(a) {
 a = a | 0;
 return;
}

function wg(a) {
 a = a | 0;
 return;
}

function sd(a) {
 a = a | 0;
 return;
}

function ok(a) {
 a = a | 0;
 return;
}

function oj(a) {
 a = a | 0;
 return;
}

function oh(a) {
 a = a | 0;
 return;
}

function ni(a) {
 a = a | 0;
 return;
}

function jk(a) {
 a = a | 0;
 return;
}

function dk(a) {
 a = a | 0;
 return;
}

function dj(a) {
 a = a | 0;
 return;
}

function dc(a) {
 a = a | 0;
 return;
}

function cc(a) {
 a = a | 0;
 return;
}

function bc(a) {
 a = a | 0;
 return;
}

function ao(a) {
 a = a | 0;
 return;
}

function ac(a) {
 a = a | 0;
 return;
}

function Zj(a) {
 a = a | 0;
 return;
}

function Wg(a) {
 a = a | 0;
 return;
}

function Vb(a) {
 a = a | 0;
 return;
}

function Ui(a) {
 a = a | 0;
 return;
}

function Tj(a) {
 a = a | 0;
 return;
}

function Qh(a) {
 a = a | 0;
 return;
}

function Pj(a) {
 a = a | 0;
 return;
}

function Nj(a) {
 a = a | 0;
 return;
}

function Kj(a) {
 a = a | 0;
 return;
}

function Hg(a) {
 a = a | 0;
 return;
}

function Dh(a) {
 a = a | 0;
 return;
}

function Cg(a) {
 a = a | 0;
 return;
}

function $b(a) {
 a = a | 0;
 return;
}

function Ro(a) {
 a = a | 0;
 ca(4);
}

function Jb(a) {
 a = a | 0;
 D = a;
}

function Eb(a) {
 a = a | 0;
 i = a;
}

function Kb() {
 return D | 0;
}

function Db() {
 return i | 0;
}

function Jc() {
 return 2568;
}

function Ic() {
 return 2564;
}

function Hc() {
 return 2560;
}

function xe() {
 return;
}

function Xo() {
 ca(10);
}

// EMSCRIPTEN_END_FUNCS
var lb=[No,Oi,Si,Mj,Qj,Vj,Xj,No];var mb=[Oo,hc,ge,xd,wd,vd,yd,Of,Tf,Be,Xf,zf,Ef,Me,If,Bg,Gg,lk,qk,_k,al,dl,Kk,Pk,Rk,Uk,de,Oo,Oo,Oo,Oo,Oo];var nb=[Po,tc,sc,pc];var ob=[Qo,$j,fk,Qo];var pb=[Ro,Vb,Wb,bc,ec,cc,dc,fc,gc,Kf,ye,Ee,vf,Je,Pe,wf,Lf,Zf,$f,_f,ag,cg,eg,dg,fg,hg,jg,ig,kg,og,qg,pg,rg,rf,ug,wg,yg,Hk,Cg,Dg,Hg,Ig,Wg,Xg,oh,ph,Dh,Eh,Qh,Rh,ni,oi,Li,Ni,Qi,Ri,Ui,Vi,dj,ej,oj,pj,zj,Aj,Kj,Lj,Tj,Uj,Zj,_j,dk,ek,jk,kk,ok,pk,wk,xk,Xk,Yk,qm,nl,Pl,Ql,Rl,Sl,xg,Gk,Jk,fl,vl,Dl,Ll,Ml,Cc,$d,ae,re,Nj,Ik,An,Hn,In,Jn,Kn,Ln,Mn,Xe,gf,le,Ro,Ro,Ro,Ro,Ro,Ro,Ro,Ro,Ro,Ro,Ro,Ro,Ro,Ro,Ro,Ro,Ro,Ro];var qb=[So,ze,De,Ke,Oe,yf,Nf,Yi,Zi,_i,$i,bj,cj,hj,ij,jj,kj,mj,nj,sj,tj,uj,vj,xj,yj,Dj,Ej,Fj,Gj,Ij,Jj,nk,sk,Xl,Zl,$l,Yl,_l,am,So,So,So,So,So,So,So,So,So,So,So,So,So,So,So,So,So,So,So,So,So,So,So,So,So];var rb=[To,Jg,Kg,Lg,Mg,Ng,Og,Pg,Qg,Rg,Sg,Tg,Yg,Zg,_g,$g,ah,bh,ch,dh,eh,fh,gh,vh,xh,Ih,Kh,Th,Uh,Vh,Xh,Zh,qi,ri,si,ui,wi,ck,ik,To,To,To,To,To,To,To,To,To,To,To,To,To,To,To,To,To,To,To,To,To,To,To,To,To];var sb=[Uo,yh,Bh,Lh,Nh,Uo,Uo,Uo];var tb=[Vo,Xb,ud,Ae,Sf,Uf,Vf,Rf,Fe,Ge,Le,Df,Ff,Gf,Cf,Qe,Re,Sh,cm,em,gm,mm,om,im,km,pi,dm,fm,hm,nm,pm,jm,lm,Wi,Xi,aj,fj,gj,lj,qj,rj,wj,Bj,Cj,Hj,rl,sl,ul,Tl,Vl,Ul,Wl,jl,kl,ml,zl,Al,Cl,Hl,Il,Kl,Vo,Vo,Vo];var ub=[Wo];var vb=[Xo,Ac,Bc,Xo];var wb=[Yo,$h,yi,ol,pl,gl,hl,wl,xl,El,Fl,Yo,Yo,Yo,Yo,Yo];var xb=[Zo,cl,Lk,Mk,Nk,Tk,Zo,Zo];var yb=[_o,wc,vc,uc,Pf,Af,mk,rk];var zb=[$o,Wf,Ce,He,Yf,Hf,Ne,Se,Jf,Zk,$k,bl,Ok,Qk,Sk,$o];var Ab=[ap,zg,Eg,qh,rh,wh,Ch,Fh,Gh,Jh,Oh,el,ql,tl,Vk,il,ll,yl,Bl,Gl,Jl,ap,ap,ap,ap,ap,ap,ap,ap,ap,ap,ap];var Bb=[bp,jc,kc,mc,Qf,Bf,Ag,Fg];return{___cxa_can_catch:xc,_fflush:Dd,_main:Lb,___cxa_is_pointer_type:yc,_i64Add:io,_memmove:mo,_i64Subtract:go,_memset:ho,_malloc:ke,_memcpy:ko,_bitshift64Lshr:jo,_free:le,___errno_location:Mc,_bitshift64Shl:lo,__GLOBAL__I_000101:we,__GLOBAL__sub_I_iostream_cpp:xe,runPostSets:fo,stackAlloc:Cb,stackSave:Db,stackRestore:Eb,establishStackSpace:Fb,setThrew:Gb,setTempRet0:Jb,getTempRet0:Kb,dynCall_iiiiiiii:wo,dynCall_iiii:xo,dynCall_viiiii:yo,dynCall_iiiiiid:zo,dynCall_vi:Ao,dynCall_vii:Bo,dynCall_iiiiiii:Co,dynCall_iiiiid:Do,dynCall_ii:Eo,dynCall_viii:Fo,dynCall_v:Go,dynCall_iiiiiiiii:Ho,dynCall_iiiii:Io,dynCall_viiiiii:Jo,dynCall_iii:Ko,dynCall_iiiiii:Lo,dynCall_viiii:Mo}})


;