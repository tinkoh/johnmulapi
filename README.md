# johnmulapi
An API for John Mulaney quotes.  
  
[api.johnmulapi.com](https://api.johnmulapi.com)

### How do I use this?

```shell
$ curl api.johnmulapi.com
```
```javascript
fetch('https://api.johnmulapi.com')
   .then(res => res.json())
   .then(data => console.log(data);
```
```python
import requests
quote = (requests
.get('https://api.johnmulapi.com')
.json())
print(quote['quote'])
```
☟
```json
{"quote":"I don't look older, I just look worse."}
```

### Can I use this in a project?
Please do. Let me know how it goes.
