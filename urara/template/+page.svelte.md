---
title: placeholder
summary: Placeholder summary.
# image: '/hello-world/urara.webp'
created: 1997-03-20
updated: 1997-03-20
# tags: ['placeholder']
# toc: false
flags:
    - unlisted
---

## Headings

### Heading

#### Heading

##### Heading

###### Heading

---

## Paragraphs

||spoiler||

**_The_** _quick_ <u>brown</u> [fox](https://www.jiwaszki.github.io/) `jumps` ~~over~~ the lazy **dog**.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

> In solitude, where we are least alone.

[scrollToTop](#headings)

---

## Lists

### Definition List (dl)

<dl>
    <dt>Definition List Title</dt>
    <dd>This is a definition list division.</dd>
</dl>

### Ordered List (ol)

1. List Item 1
2. List Item 2
3. List Item 3

### Unordered List (ul)

- List Item 1
- List Item 2
- List Item 3

### Checkbox List (ul)

- [ ] List Item 1 unchecked
- [x] List Item 2 checked
- [x] List Item 3 checked

## Table

| Table Header 1 | Table Header 2 | Table Header 3 |
| -------------- | -------------- | -------------- |
| Division 1     | Division 2     | Division 3     |
| Division 1     | Division 2     | Division 3     |
| Division 1     | Division 2     | Division 3     |

| Table Header 1 | Table Header 2 | Table Header 3 |
| :------------- | :------------: | -------------: |
| Division 1     |   Division 2   |     Division 3 |
| Division 1     |   Division 2   |     Division 3 |
| Division 1     |   Division 2   |     Division 3 |

[scrollToTop](#headings)

## Footnotes

Here is a footnote reference. [^1]

This is a long note. [^longnote]

This is an inline note. ^[You can type footnotes inline, so you don’t have to pick an identifier manually.]

[^1]: Here is the footnote.
[^longnote]: Here's one footnote with longer identifier.

[scrollToTop](#headings)

## Code

```ts twoslash title="examples/index.ts"
for (let x in [0]) console.log(x)
```

```ts twoslash {1-6}
interface IdLabel {
  id: number /* some fields */
}
interface NameLabel {
  name: string /* other fields */
}
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel
// This comment should not be included

// ---cut---
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw 'unimplemented'
}

let a = createLabel('typescript')
```

## Misc

<sup>Lorem</sup> <sub>ipsum</sub> <cite>dolor sit amet</cite>, <acronym title="Consectetur Adipiscing Elit">consectetur adipiscing elit</acronym>, <abbr title="Aliqua">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</abbr>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>

[scrollToTop](#headings)

## Svelte Components

<script>
    import YouTube from '$lib/components/extra/youtube.svelte'
</script>

<YouTube id="eUin_MYbU0k" />
