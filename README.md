<div align="center">

# johnmulapi

An API for John Mulaney quotes.

[johnmulapi.givensuman.com](https://johnmulapi.givensuman.com)

[api.johnmulapi.givensuman.com](https://api.johnmulapi.givensuman.com)

</div>

### How do I use this?

```shell
# shell
$ curl https://api.johnmulapi.givensuman.com
```

```javascript
// javascript
fetch('https://api.johnmulapi.givensuman.com')
   .then(res => res.json())
   .then(data => console.log(data);
```

```python
# python
import requests
quote = (requests
  .get('https://api.johnmulapi.givensuman.com')
  .json())
print(quote)
```

☟

```json
{
  "data": "I don't look older, I just look worse.",
  "status": 200,
  "message": null
}
```

### Parameters

| name     | type    | default | description                                              |
| -------- | ------- | ------- | -------------------------------------------------------- |
| quantity | number  | 1       | Number of quotes to return                               |
| unique   | boolean | false   | Whether the returned quotes (if multiple) must be unique |

```
# example usage
curl https://johnmulapi.givensuman.com/api?quantity=5&unique=true
```

### Can I use this in a project?

Please do. Let me know how it goes.

<p align="center">
<img alt="John Mulaney's Head" src='./assets/mulaney_head.png' />
</p>

##### Shamelessly inspired by [kanye.rest](https://kanye.rest/)
