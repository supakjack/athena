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


app.get('#/second-start-set-1', function () {
    this.$element().load('views/4-second_set_1.html');
});

app.get('#/choose-choice', function () {
    this.$element().load('views/5-choose_choice.html');
});

app.get('#/delete', function () {
    this.$element().load('views/6-delete.html');
});

app.get('#/no-delete', function () {
    this.$element().load('views/7-no_delete.html');
});

app.get('#/third-set-1', function () {
    this.$element().load('views/8-third_set_1.html');
});

app.get('#/four-set-1', function () {
    this.$element().load('views/9-four_set_1.html');
});

app.get('#/fifth-set-1', function () {
    this.$element().load('views/10-fifth_set_1.html');
});

app.get('#/start-law-question-ep1', function () {
    this.$element().load('views/11-start_law_question_ep1.html');
});

app.get('#/answer-ep1', function () {
    this.$element().load('views/12-answer_ep1.html');
});

app.get('#/collect-ep1', function () {
    this.$element().load('views/13-collect_ep1.html');
});


app.get('#/start-set-2', function () {
    this.$element().load('views/14-start_set_2.html');
});

app.get('#/second-set-2', function () {
    this.$element().load('views/15-second_set_2.html');
});

app.get('#/third-set-2', function () {
    this.$element().load('views/16-third_set_2.html');
});

app.get('#/four-set-2', function () {
    this.$element().load('views/17-four_set_2.html');
});

app.get('#/start-law-question-ep2', function () {
    this.$element().load('views/18-start_law_question_ep2.html');
});

app.get('#/answer-ep2', function () {
    this.$element().load('views/19-answer_ep2.html');
});

app.get('#/collect-ep2', function () {
    this.$element().load('views/20-collect_ep2.html');
});

app.notFound = function () {
    this.$element().load('views/1-home.html');
}

app.run();

