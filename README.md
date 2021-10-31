# Isabel's website

this is a website for the best new comedian out there.

## note for isabel
- To change out videos that are displayed edit `video-list.js`. you need a title, date, and the youtube url.
- to change out the general info see `/components/info.js` i left some notes. but generally I assume you will want to change out stuff pertaining to upcoming events. just follow the formatting for inserting links 
```html
 <span><a href="THIS IS WHERE THE URL GOES"> this is what will be displayed on the site</a></span>
```
- obviously i can help you with any of this

### TO DEPLOY YOUR EDITS
- save
- in your terminal get into the right folder (`cd path/where/this/repo/is/saved` for me this is `cd Desktop/Desktop/Other/isabel-website`)
- run `yarn build`
- wait for that to complete
- `cd dist`
- `surge`
- it might prompt you to login
- then when it promps for a url type 'isabellevincomedy.com'
- then  it should be deployed
