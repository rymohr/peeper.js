# peeper.js

*peeper.js* lets you bind dom elements to text inputs with one simple assignment: `data-source="[input id]"`

# Usage

First make sure to include the library along with jquery:

```
<script src="jquery.js" type="text/javascript"></script>
<script src="peeper.js" type="text/javascript"></script>
```

Then simply assign the `id` of the watched input to the peeper's `data-source` attribute.

```
<input type="text" id="observed_field" />
<span data-source="observed_field">placeholder text</span>
```
