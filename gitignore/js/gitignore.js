var gitignores;
var selected = [];

$.get('/gitignore/gitignores.json', function (data) {
    gitignores = data;
});

function getIgnores(str) {
    var ignores = [];

    for (var ignore in gitignores) {
        if (gitignores[ignore].indexOf(str) != -1 && $.inArray(gitignores[ignore], selected)) {
            ignores.push(gitignores[ignore]);
        }
    }

    return ignores;
}

function showIgnores(str) {
    var ignores = getIgnores(str);
    var availableIgnores = $('#available-ignores');

    // clear the current stuff
    availableIgnores.empty();

    for (var ignore in ignores) {
        ignore = ignores[ignore];

        var element = $('<li onclick="selectIgnore(this.value)"></li>').text(ignore);
        availableIgnores.append(element, element);
    }
}

function selectIgnore(ignoreName) {
    if (!$.inArray(ignoreName, selected)) {
        var selectedIgnores = $('#selected-ignores');

        // clear the current stuff
        selectedIgnores.empty();

        for (var ignore in selected) {
            ignore = selected[ignore];

            var element = $('<li></li>').text(ignore);
            selectedIgnores.append(element, element);
        }

        // Add ignore to selected array so it can't be selected again.
        selected.push(ignoreName);
    }
}
