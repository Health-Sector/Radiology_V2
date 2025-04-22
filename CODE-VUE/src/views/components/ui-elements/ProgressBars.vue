<template>
        <b-row>
            <!-- Left Column -->
            <b-col sm="12" lg="6">
                <!-- Examples Card -->
                <b-card no-body>
                    <b-card-header class="mb-0 d-flex justify-content-between">
                        <div class="header-title">
                            <b-card-title>Examples</b-card-title>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p>Progress components are built with two HTML elements, some CSS
                            to set the width, and a few attributes. We don’t use
                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress">the HTML5
                                <code>&lt;progress&gt;</code> element</a>, ensuring
                            you can stack progress bars, animate them, and place text labels
                            over them.
                        </p>
                        <ul>
                            <li>We use the
                                <code>.progress</code>
                                as a wrapper to indicate the max value of the progress bar.
                            </li>
                            <li>We use the inner
                                <code>.progress-bar</code>
                                to indicate the progress so far.
                            </li>
                            <li>The
                                <code>.progress-bar</code>
                                requires an inline style, utility class, or custom CSS to set
                                their width.
                            </li>
                            <li>The
                                <code>.progress-bar</code>
                                also requires some
                                <code>role</code>
                                and
                                <code>aria</code>
                                attributes to make it accessible.
                            </li>
                        </ul>
                        <p>Put that all together, and you have the following examples.</p>
                        <b-progress class="mb-3" :value="0"></b-progress>
                        <b-progress class="mb-3" :value="25"></b-progress>
                        <b-progress class="mb-3" :value="50"></b-progress>
                        <b-progress class="mb-3" :value="75"></b-progress>
                        <b-progress :value="100"></b-progress>
                    </b-card-body>
                </b-card>

                <!-- Height Card -->
                <b-card no-body>
                    <b-card-header class="mb-0 d-flex justify-content-between">
                        <div class="header-title">
                            <b-card-title>Height</b-card-title>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p>We only set a
                            <code>height</code>
                            value on the
                            <code>.progress</code>, so if you change that value the inner
                            <code>.progress-bar</code>
                            will automatically resize accordingly.
                        </p>
                        <b-progress class="mb-3" :value="25" style="height: 8px;">
                            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25"
                                aria-valuemin="0" aria-valuemax="100">25%</div>
                        </b-progress>
                        <b-progress class="mb-3" :value="50" style="height: 10px;">
                            <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50"
                                aria-valuemin="0" aria-valuemax="100">50%</div>
                        </b-progress>
                        <b-progress class="mb-3" :value="75" style="height: 15px;">
                            <div class="progress-bar" role="progressbar" style="width: 75%;">75%</div>
                        </b-progress>
                        <b-progress :value="99" style="height: 20px;">
                            <div class="progress-bar" role="progressbar" style="width: 99%;">99%</div>
                        </b-progress>
                    </b-card-body>
                </b-card>

                <!-- Animated Stripes Card -->
                <b-card no-body>
                    <b-card-header class="mb-0 d-flex justify-content-between">
                        <div class="header-title">
                            <b-card-title>Animated Stripes</b-card-title>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p>The striped gradient can also be animated. Add
                            <code>.progress-bar-animated</code>
                            to
                            <code>.progress-bar</code>
                            to animate the stripes right to left via CSS3 animations.
                        </p>
                        <b-progress class="mb-3" striped animated :value="75"></b-progress>
                        <b-progress striped animated variant="success" :value="75"></b-progress>
                    </b-card-body>
                </b-card>
            </b-col>

            <!-- Right Column -->
            <b-col sm="12" lg="6">
                <!-- Labels Card -->
                <b-card no-body>
                    <b-card-header class="mb-0 d-flex justify-content-between">
                        <div class="header-title">
                            <b-card-title>Labels</b-card-title>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p>Add labels to your progress bars by placing text within the
                            <code>.progress-bar</code>.
                        </p>
                        <b-progress class="mb-3" :value="25">
                            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25"
                                aria-valuemin="0" aria-valuemax="100">25%</div>
                        </b-progress>
                        <b-progress class="mb-3" :value="50">
                            <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50"
                                aria-valuemin="0" aria-valuemax="100">50%</div>
                        </b-progress>
                        <b-progress class="mb-3" :value="75">
                            <div class="progress-bar" role="progressbar" style="width: 75%;">75%</div>
                        </b-progress>
                        <b-progress :value="99">
                            <div class="progress-bar" role="progressbar" style="width: 99%;">99%</div>
                        </b-progress>
                    </b-card-body>
                </b-card>

                <!-- Backgrounds Card -->
                <b-card no-body>
                    <b-card-header class="mb-0 d-flex justify-content-between">
                        <div class="header-title">
                            <b-card-title>Backgrounds</b-card-title>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p>Use background utility classes to change the appearance of
                            individual progress bars.</p>
                        <b-progress class="mb-3" variant="success" :value="25"></b-progress>
                        <b-progress class="mb-3" variant="info" :value="50"></b-progress>
                        <b-progress class="mb-3" variant="warning" :value="75"></b-progress>
                        <b-progress variant="danger" :value="100"></b-progress>
                    </b-card-body>
                </b-card>

                <!-- Multiple Bars Card -->
                <b-card no-body>
                    <b-card-header class="mb-0 d-flex justify-content-between">
                        <div class="header-title">
                            <b-card-title>Multiple Bars</b-card-title>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p>Include multiple progress bars in a progress component if you
                            need.</p>
                        <b-progress>
                            <b-progress-bar :value="15"></b-progress-bar>
                            <b-progress-bar variant="success" :value="30"></b-progress-bar>
                            <b-progress-bar variant="info" :value="20"></b-progress-bar>
                        </b-progress>
                    </b-card-body>
                </b-card>

                <!-- Striped Card -->
                <b-card no-body>
                    <b-card-header class="mb-0 d-flex justify-content-between">
                        <div class="header-title">
                            <b-card-title>Striped</b-card-title>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p>Add
                            <code>.progress-bar-striped</code>
                            to any
                            <code>.progress-bar</code>
                            to apply a stripe via CSS gradient over the progress bar’s
                            background color.
                        </p>
                        <b-progress class="mb-3" striped :value="10"></b-progress>
                        <b-progress class="mb-3" striped variant="success" :value="25"></b-progress>
                        <b-progress class="mb-3" striped variant="info" :value="50"></b-progress>
                        <b-progress class="mb-3" striped variant="warning" :value="75"></b-progress>
                        <b-progress striped variant="danger" :value="100"></b-progress>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
</template>