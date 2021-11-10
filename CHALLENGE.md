### Objective

~~redacted~~ is branching into the music business and needs a new React Native app.

### Brief

In a fictional world, ~~redacted~~ is branching into the music business and we need a new a app. This React Native app needs to display the top 100 songs based on the iTunes API. This code challenge allows you to choose your own path and lets you flaunt your creative panache and technical skills along the way.

### Tasks

-   Show top 100 albums based on the json feed here: `https://itunes.apple.com/us/rss/topalbums/limit=100/json`
-   A clean modern look
-   A good user experience
-   Allow the top 100 to be searchable
-   Surprise us! Add a feature that you think would work well here (for instance, advanced search, integration with other API, a "Favorite" functionality)
    -   Describe the feature in separate markdown file

### Deliverables

Make sure to include all code in this repository.

For iOS, include a assignment.zip file containing your compressed .app bundle **in the root of the repository**.
Your .app bundle must represent a simulator build of your app. After running in iOS Simulator via Xcode, look in ~/Library/Developer/Xcode/DerivedData/<project-name>/Build/Products/Debug-iphonesimulator/.
Alternatively, you may run xcodebuild -sdk iphonesimulator (if you use .xcodeproj) or xcodebuild -sdk iphonesimulator -workspace Sample.xcworkspace/ -scheme <your-scheme> -configuration Debug (if you use .xcworkspace) in your project directory, then zip the .app bundle in build/Debug-iphonesimulator/.

For Android, include assignment.apk containing your app **in the root of the repository**.
After your app is built, either via Android Studio or by running the command ./gradlew assembleDebug in your project directory, look in <project-name>/<module-name>/build/outputs/apk/.

### Evaluation Criteria

-   **React Native** best practices
-   Show us your work through your commit history
-   Completeness: did you complete the features?
-   Correctness: does the functionality act in sensible, thought-out ways?
-   Maintainability: is it written in a clean, maintainable way?
-   Testing: is the system adequately tested?

### CodeSubmit

Please organize, design, test and document your code as if it were going into production - then push your changes to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.

All the best and happy coding,

The ~~redacted~~ Team