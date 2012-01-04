# peeper.js

*peeper.js* is a tiny javascript data-binding library allowing one-way binding of simple text elements
to text inputs.

# Usage

First make sure to include the library:

```
<script src="peeper.js" type="text/javascript"></script>
```

Then simply assign the id of the watched input to the peeper's `data-source` attribute.

```
<input type="text" id="observed_field" />
<span data-source="observed_field">placeholder text</span>
```
