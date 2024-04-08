---
title: 'This is a Another Test Title'
date: '2024-03-31'
author: 'Ethan Pollack'
tableOfContents: 'visible'
---

# Heading 1
## Heading 2 really long title, extremely long title
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
####### Heading 7

{/*test*/}

### This is a really long title, it's going to continue for a while


Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Links

[test links](https://epoll31.github.io)

https://epoll31.github.io

# Doc
 
test
1. test
    1. test
2. test
* test
    * test
* test

- [ ] test1
    - [ ] test2
- [x] test3
- [x] test4

| col 1 | col 2 | column 3 |
| ----- | ----- | -------- |
| row 1 | row 1 | these |
| row 2 | row 2 | |
| row 3 | row 3 | have very different |
| row 4 | row 4 | lengths. this one being extremely long. too long. wayyy too long you might say |

| col 1 | col 2 | 
| ----- | ----- | 
| row 1 | row 1 | 
| row 2 | row 2 | 
| row 3 | row 3 | 
| row 4 | row 4 | 

here is an inline code block `Combine("string", 10, variable);`. here is another inline code block `Combine("string", 10, variable);`.

``` text
test
```
```
test
```

## Python
``` python
def generateStaticParams():
    articles = path.resolve(process.cwd(), 'public', 'articles')
    folders = fs.readdirSync(articles)
    return folders.map(folder => { return { slug: folder } });
```

## Text
``` text
def generateStaticParams():
    articles = path.resolve(process.cwd(), 'public', 'articles')
    folders = fs.readdirSync(articles)
    return folders.map(folder => { return { slug: folder } });
```

## Unspecified
```
def generateStaticParams():
    articles = path.resolve(process.cwd(), 'public', 'articles')
    folders = fs.readdirSync(articles)
    return folders.map(folder => { return { slug: folder } });
```

```css
.container{
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
}
 
.child-1{
  background-color: red;
}
 
.child-2{
  background-color: blue;
}
```

~~~javascript
// function that adds "2 numbers" together
const sumTwoNumbers = (num1, num2) => num1 + num2;
 
// call the function
console.log(sumTwoNumbers(1, 2)); // 3
 
// array of users
const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 28 },
  { name: "Bob", age: 25 },
];
 
// print out the users age 
console.log(users.map(user => user.age)); // [30, 28, 25]
~~~

## Heading 2

test

### Heading 3

test

#### Heading 4

test

# Another Heading 1

##### Heading 5

test

###### Heading 6

test

#### Second Heading 4

test

##### Second Heading 5

test

###### Second Heading 6

test

## images

{/*
![public/tutor/headshot.png {className: w-full rounded-3xl}](public/tutor/headshot.png)
![/public/tutor/headshot.png {w: 100} {h:100}](/public/tutor/headshot.png)
![./public/tutor/headshot.png {caption: This is a test caption. this is a really really really really really really really long caption}](./public/tutor/headshot.png)

![./headshot.png {caption: test}](./headshot.png)
![/headshot.png](/headshot.png)
![headshot.png](headshot.png)
*/}
## videos

![./video.mp4](./video.mp4)


![./video.mp4 {nocontrols} {muted} {autoplay} {loop}](./video.mp4)
![./video.webm {nocontrols} {muted} {autoplay} {loop}](./video.webm)

{/* ## comments

![http image](http://help.websiteos.com/websiteos/htmlpage.jpg)
![https image](https://www.columbia.edu/~fdc/picture-of-something.jpg) 
*/}



