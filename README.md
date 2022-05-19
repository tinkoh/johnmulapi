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
print(quote)
```
☟
```json
{"data":"I don't look older, I just look worse."}
```

### Parameters

|name |type |description
|--- |--- |---
|quantity |number | Number of quotes to return
|maxLength |number |Maximum length of quote(s) 
|minLength |number |Minimum length of quote(s)

```
# example usage
curl https://johnmulapi.com/api?quantity=3&maxLength=50
```

### Can I use this in a project?
Please do. Let me know how it goes.

<p align="center">
<img alt="John Mulaney's Head" src='./assets/mulaney_head.png' />
</p>

##### Shamelessly inspired by [kanye.rest](https://kanye.rest/)