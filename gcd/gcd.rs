
#[no_mangle]
pub extern fn gcd(mut m: u32, mut n: u32) -> u32
{
        while m > 0 {
                let tmp = m;
                m = n % m;
                n = tmp;
        }       
        return n;
}

