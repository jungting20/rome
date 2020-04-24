# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `flow > type-imports > invalid-import-type-as`

```javascript
Program {
  comments: Array []
  corrupt: false
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'module'
  syntax: Array [
    'jsx'
    'flow'
  ]
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 0
      index: 40
      line: 2
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  diagnostics: Array [
    Object {
      origins: Array [Object {category: 'js-parser'}]
      description: Object {
        category: 'parse/js'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Unexpected keyword debugger'}
      }
      location: Object {
        filename: 'input.js'
        mtime: undefined
        sourceType: 'module'
        end: Object {
          column: 25
          index: 25
          line: 1
        }
        start: Object {
          column: 17
          index: 17
          line: 1
        }
      }
    }
  ]
  body: Array [
    ImportDeclaration {
      defaultSpecifier: undefined
      importKind: undefined
      namespaceSpecifier: undefined
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 39
          index: 39
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      source: StringLiteral {
        value: 'foo'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 38
            index: 38
            line: 1
          }
          start: Object {
            column: 33
            index: 33
            line: 1
          }
        }
      }
      namedSpecifiers: Array [
        ImportSpecifier {
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 25
              index: 25
              line: 1
            }
            start: Object {
              column: 9
              index: 9
              line: 1
            }
          }
          imported: Identifier {
            name: 'type'
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 13
                index: 13
                line: 1
              }
              start: Object {
                column: 9
                index: 9
                line: 1
              }
            }
          }
          local: ImportSpecifierLocal {
            name: BindingIdentifier {
              name: 'debugger'
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 25
                  index: 25
                  line: 1
                }
                start: Object {
                  column: 17
                  index: 17
                  line: 1
                }
              }
            }
            importKind: undefined
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 25
                index: 25
                line: 1
              }
              start: Object {
                column: 9
                index: 9
                line: 1
              }
            }
          }
        }
      ]
    }
  ]
}
```