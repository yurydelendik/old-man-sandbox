#!/usr/bin/env python
"""Utility to generate wasm custom section
"""

import argparse
import sys

def parse_args():
  parser = argparse.ArgumentParser(prog='wasm-section.py')
  parser.add_argument('name', help='section name')
  parser.add_argument('-f', '--input', help='input file/content', default='/dev/stdin')
  parser.add_argument('-s', '--size', action='store_true', help='prefix with content size')
  parser.add_argument('--string', nargs='?', help='use string instead --input or /dev/stdin')
  return parser.parse_args()

def encode_number(n):
  s = ''
  while n >= 128:
    s += chr((n & 127) | 128)
    n >>= 7
  return s + chr(n)

def encode_string(s):
  return encode_number(len(s)) + s

CUSTOM_SECTION_ID = 0

def main():
  args = parse_args()

  section_name  = encode_string(args.name)
  if args.string is None:
    content = open(args.input, 'r').read()
    if args.size:
      content = encode_number(len(content)) + content
  else:
    content = encode_number(len(args.string)) + args.string
  body = section_name + content

  open('/dev/stdout', 'w').write(encode_number(CUSTOM_SECTION_ID) + encode_number(len(body)) + body)

if __name__ == '__main__':
  sys.exit(main())
