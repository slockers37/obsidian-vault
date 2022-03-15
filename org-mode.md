---
aliases: []
---

### Timeline of things learned
- 2022-03-15 → Learned about `org-babel-tangle`. It is used for literate programming. 
	- Insert `#+PROPERTY: header-args:{lang} :tangle {path/to/file/to/be/tangled}` in the frontmatter of the `org` file and it will tangle all the code blocks in the document to the specified file after you run the `org-babel-tangle t` command using `M-x`.
	- If `:tangle {path/to/file/to/be/tangled}` is included in a specific code block like `#+begin_src python :tangle {path/to/file/to/be/tangled}` then only that code block will be tangled to the file specified when running `org-babel-tangle t` command.
- 