<div align="center">

# johnmulapi
An API for John Mulaney quotes.  
  
[johnmulapi.com/api](https://johnmulapi.com/api)

</div>


### How do I use this?

```shell
$ curl https://johnmulapi.com/api
```
```javascript
fetch('https://johnmulapi.com/api')
   .then(res => res.json())
   .then(data => console.log(data);
```
```python
import requests
quote = (requests
.get('https://johnmulapi.com/api')
.json())
print(quote['quote'])
```
☟
```json
{"quote":"I don't look older, I just look worse."}
```

### Can I use this in a project?
Please do. Let me know how it goes.

<p align="center">
<img alt="John Mulaney's Head" src='./assets/mulaney_head.png' />
</p>