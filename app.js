const app = Sammy('#app')

// manage page route
app.get('#/home', function () {
    this.$element().load('views/1-home.html');
});

app.get('#/about', function () {
    this.$element().load('views/2-about.html');
});

app.get('#/start-set-1', function () {
    this.$element().load('views/3-start_set_1.html');
});

app.get('#/start-delete', function () {
    this.$element().load('views/4-start_delete.html');
});

app.get('#/start-no-delete', function () {
    this.$element().load('views/5-start_no_delete.html');
});

app.get('#/start-set-2', function () {
    this.$element().load('views/6-start_set_2.html');
});

app.get('#/start-law-question', function () {
    this.$element().load('views/7-start_law_question.html');
});

app.get('#/answer', function () {
    this.$element().load('views/8-answer.html');
});

app.get('#/collect', function () {
    this.$element().load('views/9-collect.html');
});

app.get('#/start-set-3', function () {
    this.$element().load('views/10-start_set_3.html');
});

app.get('#/start-law-question-2', function () {
    this.$element().load('views/11-start_law_question_2.html');
});

app.get('#/answer-2', function () {
    this.$element().load('views/12-answer_2.html');
});

app.get('#/collect-2', function () {
    this.$element().load('views/13-collect_2.html');
});

app.notFound = function () {
    this.$element().load('views/1-home.html');
}

app.run();

