/**
 * Created by jack on 3/8/17.
 */
Meteor.publish('recipes',function(){
   return Recipes.find({author:this.userId});
});