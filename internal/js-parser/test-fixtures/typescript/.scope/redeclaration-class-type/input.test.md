# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > scope > redeclaration-class-type`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.ts"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "input.ts"
		end: Object {
			column: 16
			index: 27
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: Object {
					filename: "input.ts"
					identifierName: "A"
					end: Object {
						column: 7
						index: 7
						line: 1
					}
					start: Object {
						column: 6
						index: 6
						line: 1
					}
				}
			}
			loc: Object {
				filename: "input.ts"
				end: Object {
					column: 10
					index: 10
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			meta: JSClassHead {
				body: Array []
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.ts"
					end: Object {
						column: 10
						index: 10
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
			}
		}
		TSTypeAlias {
			id: JSBindingIdentifier {
				name: "A"
				loc: Object {
					filename: "input.ts"
					identifierName: "A"
					end: Object {
						column: 6
						index: 17
						line: 2
					}
					start: Object {
						column: 5
						index: 16
						line: 2
					}
				}
			}
			typeParameters: undefined
			loc: Object {
				filename: "input.ts"
				end: Object {
					column: 16
					index: 27
					line: 2
				}
				start: Object {
					column: 0
					index: 11
					line: 2
				}
			}
			right: TSNumberKeywordTypeAnnotation {
				loc: Object {
					filename: "input.ts"
					end: Object {
						column: 15
						index: 26
						line: 2
					}
					start: Object {
						column: 9
						index: 20
						line: 2
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
