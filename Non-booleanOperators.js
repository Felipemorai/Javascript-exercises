 /* Falsy are all valeus */
 /* undefined */
 /* null */
 /* 0 */
 /* false */
 /* '' */
 /* NaN - not a number */

 /* Truthy are all valeus */
 /* true */
 /* string */
 /* number */
 /* 1 */

 let customColor = 'Red';
 let patternColor = 'Blue';
 let profileColor = customColor || patternColor;

 console.log(profileColor);
