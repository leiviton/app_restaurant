<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<form id="form">
    <input type="text" name="name" value="Erik's bar">
    <input type="text" name="description" value="Melhor Wiski da região">
    <input type="file" name="photo" id="file">
</form>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script type="text/javascript">

    $('#file').on('change', function () {

        let formData = new FormData();
        formData.append('name', 'Erik\'s bar');
        formData.append('description', 'Melhor Wiski da região');
        formData.append('photo', $('#file')[0].files[0]);

        let headers = {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNiYzFkYjE1ZWQzMDI1NGEwYWNkMzZhZTljNTBhZTRkMjQxZGYzMTE2OTk5MzFhNjI3ZDliYjY0MzcyMThiYWVkNmQzMjI0ZTExMmEzMjYyIn0.eyJhdWQiOiIzIiwianRpIjoiY2JjMWRiMTVlZDMwMjU0YTBhY2QzNmFlOWM1MGFlNGQyNDFkZjMxMTY5OTkzMWE2MjdkOWJiNjQzNzIxOGJhZWQ2ZDMyMjRlMTEyYTMyNjIiLCJpYXQiOjE1MDQxOTMzODcsIm5iZiI6MTUwNDE5MzM4NywiZXhwIjoxNTM1NzI5Mzg2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.bAxfFG1ajVFyUaE6E32KMP3v5_CiA8_-xgkn700KaJ6H9jwygdv6XPPKpiRUs6zJXLowCKnnrF8CXypE11JRwMMD-k42GFIyBqvKLrwQNbJi3Jt-hanZw4abZEueeBfMZzWRFf6G-RARxyrWgIEG4W6qcGLIWcD051TPNq_qc7fLdT5t0sUrd1dMIHm_BeDrwfawNWxRcnVORe_m2C7vr41MxDbQ7cK9KUf2PtixqLSL2uO57Uf50JN1LPXEdH28XF_u5G7YGl5vT1ahkU5IwRNb6rugSxnuk6Co3KRvECR0C3CulVTCFyk9WyBKHJ5hRab6rV3mRAwqE_wXDx_yVdmTsfncgKKiF6YbigIX3SY5cqNw9SQcvrOTrudtw9EqWB0dmO8PnisZPEmpX59uOtEMrw80d2dKfqSE0c7092gWeYpmix9LGuESMazVEqPBQz3zn41rRqyOGyrqYGlZeG26EMq7yNzG6jJR7wZxG7mWthbtqq-ddU8gyQWySHchV-XOiReu8w0TvIQ8japiQee-r26sjGm5ToLqSa1PisxDmlHThTMBy7LxaYioMZ7cU7rbpiMk8OD5f7B0eRMkZ_eSLSAKpRcIsuZckiCQQDp09sx8QL0q7Eb9iMOuHEZBSUpwlBK_aT6jQuemJ5fjvqfptOVeBwDLGqQeGv1tvpo',
            //'content-type': 'multipart/form-data'
            'content-type': 'application/x-www-form-urlencoded'
        }

        axios.post('http://localhost:8810/api/v1/restaurants/2', formData, {headers: headers})
    })
</script>
</body>
</html>