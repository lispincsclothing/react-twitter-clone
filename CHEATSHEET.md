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

*Questions
1. Prerender does not work for now...
  1. Answer is that webpack and react_component two different approaches - use one or other.
