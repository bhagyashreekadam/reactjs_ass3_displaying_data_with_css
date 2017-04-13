//classes
var Courses = React.createClass({
   
   render: function() {
    return (
      <p className='course'>
        Display Data with class name
      </p>
      );
   }
});
//var courseElement=<Courses />;
//or
var courseElement=React.createElement(Courses);

React.render(courseElement,document.getElementById('divContainer'));