# johnmul.api
An API for John Mulaney quotes.  
  
[johnmulapi.herokuapp.com](https://johnmulapi.herokuapp.com)

### How do I use this?

```shell
$ curl johnmulapi.herokuapp.com
```
```javascript
fetch('https://johnmulapi.herokuapp.com')
   .then(res => res.json())
   .then(data => console.log(data);
```
```json
{
    "quote": "I don't look older, I just look worse."
}
```

### Can I use this in a project?
Please. Let me know how it goes.
