# Cheatsheet
1. `rails new . -D=postgresql -T --skip-turblolinks`
  1. N.B. installed rails 4.2, tutorial uses 5.0 alpha
  2. Q. Installing latest version of rails via github froze, why?
2. `rails generate controller home`
3. `brew install nvm`
    1. `mkdir ~/.nvm`
    2. `cp $(brew --prefix nvm)/nvm-exec ~/.nvm/`
    3. `atom ~/.bash_profile #restart terminal`
    4. `nvm install node`
    5. `nvm alias default node`
    6. `npm init`
4. `npm install -g webpack`
  1. `npm install --save babel-loader`
  2. `webpack -d -w`
5. `be foreman start -f Procfile.dev`
6. `rails g devise:install`
  1. `rails g devise User`
  2. `rake db:migrate`
7. `rails g migration add_name_to_users`
  1. `rake db:migrate`
8. `rails g resource tweet` #Middle ground between model and scaffold - generates model and controller, and gives route
  1. `rake db:migrate`
  2. In Tweet model, used eager loading with .includes to avoid N+1 problem
    1. http://stackoverflow.com/questions/31149850/rails-includes-method-and-avoiding-n1-query
9. `npm install --save flux events`
10. 



# Questions
1. Prerender does not work for now...
  1. Answer is that webpack and react_component two different approaches - use one or other.
2. Where to put node compenents (e.g. faker, etc.).  Is the package.json file best, where else?
3. Why does 'React.findDOMNode(node)' return a plaintext dom element, rather than a reference to dom element?
4. Does the includes in Tweet really avoid n+1 problem?
b
# Notes
1. For forms, `ref` is way of getting input (can't use name/value etc in forms).  
  1. http://facebook.github.io/react/docs/working-with-the-browser.html#refs-and-getdomnode
2. Using `.bind(this)` to make sure `this` bound to correct object
  1. http://stackoverflow.com/questions/24285581/purpose-of-bindthis-at-end-of-ajax-callback
