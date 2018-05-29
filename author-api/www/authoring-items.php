<?php
    /**
     * Authoring Items: Create and edit Items for your Item bank.
     * Each Item can contain one or more Questions,
     * as well as interactive Features like calculators and protractors.
     */

    // Include server side Learnosity SDK.
    require_once __DIR__ . '/../src/vendor/autoload.php';
    use LearnositySdk\Request\Init as LearnosityInit;

    // Author API configuration parameters.
    $request = [
        'mode' => 'item_list', // Display the Item list view on load.
        'title.show' => true,
        'user' => [
            'id' => 'author123456' // Unique author id
        ]
    ];

    // Public & private security keys required to access Learnosity APIs and
    // data. These keys grant access to Learnosity's public demos account.
    // Learnosity will provide keys for your own private account.
    $consumerKey = 'yis0TYCu7U9V4o7M';
    $consumerSecret = '74c5fd430cf1242a527f6223aebd42d30464be22';

    // Parameters used to create security authorisation.
    $security = [
        'domain'       => $_SERVER['SERVER_NAME'],
        'consumer_key' => $consumerKey
    ];

    // Use Learnosity SDK to construct Author API configuration parameters,
    // and sign them securely with the $security and $consumerSecret parameters.
    $init = new LearnositySdk\Request\Init(
        'author',
        $security,
        $consumerSecret,
        $request);
    $initOptions = $init->generate(); // JSON blob of signed config params.
?>

<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet"  href="./style.css" />
    </head>
    <body>
        <h1>Authoring Items Example</h1>

        <!-- Author API will render the author app into this div. -->
        <div id="learnosity-author"></div>

        <!-- Includes Author API on the page and makes the global LearnosityAuthor object available. -->
        <script src="https://authorapi.learnosity.com?v1"></script>

        <!-- Initiate Author API rendering, using the JSON blob of signed params. -->
        <script>
            // The call to init() returns an instance of the AuthorApp,
            // which we can use to programmatically drive authoring using its public methods.
            var authorApp = LearnosityAuthor.init(
                <?php echo $initOptions ?>
            );
        </script>
    </body>
</html>
