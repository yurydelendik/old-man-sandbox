#!/usr/bin/env python3
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
  s = bytearray()
  while n >= 128:
    s.append((n & 127) | 128)
    n >>= 7
  s.append(n)
  return bytes(s)

def encode_string(s):
  return encode_number(len(s)) + s

CUSTOM_SECTION_ID = 0

def main():
  args = parse_args()

  section_name  = encode_string(args.name.encode())
  if args.string is None:
    content = open(args.input, 'rb').read()
    if args.size:
      content = encode_number(len(content)) + content
  else:
    content = encode_string(args.string.encode())
  body = section_name + content

  sys.stdout.buffer.write(encode_number(CUSTOM_SECTION_ID) + encode_number(len(body)) + body)

if __name__ == '__main__':
  sys.exit(main())
