<template>
        <b-row class="row-eq-height">
            <b-col md="12">
                <b-row>
                    <b-col md="12">
                        <b-card no-body>
                            <b-card-body>
                                <b-row>
                                    <b-col md="12" class="mb-3">
                                        <h5 class="text-primary card-title"><i class="ri-pencil-fill"></i> Compose
                                            Message
                                        </h5>
                                    </b-col>
                                </b-row>
                                <form class="email-form">
                                    <b-row class="form-group">
                                        <label for="inputEmail3" class="col-sm-2 col-form-label">To:</label>
                                        <div class="col-sm-10 mb-3">
                                            <select id="inputEmail3" class="form-control">
                                                <option value="Petey Cruiser">Petey Cruiser</option>
                                                <option value="Bob Frapples">Bob Frapples</option>
                                                <option value="Barb Ackue">Barb Ackue</option>
                                                <option value="Greta Life">Greta Life</option>
                                            </select>
                                        </div>
                                    </b-row>
                                    <b-row class="form-group">
                                        <label for="cc" class="col-sm-2 col-form-label">Cc:</label>
                                        <div class="col-sm-10 mb-3">
                                            <select id="cc" class="form-control">
                                                <option value="Brock Lee">Brock Lee</option>
                                                <option value="Rick O'Shea">Rick O'Shea</option>
                                                <option value="Cliff Hanger">Cliff Hanger</option>
                                                <option value="Barb Dwyer">Barb Dwyer</option>
                                            </select>
                                        </div>
                                    </b-row>
                                    <b-row class="form-group">
                                        <label for="subject" class="col-sm-2 col-form-label">Subject:</label>
                                        <div class="col-sm-10 mb-3">
                                            <input type="text" id="subject" class="form-control">
                                        </div>
                                    </b-row>
                                    <b-row class="form-group">
                                        <label for="subject" class="col-sm-2 col-form-label">Your Message:</label>
                                        <div class="col-md-10 mb-3">
                                            <div class="form-floating">
                                                <textarea class="form-control" placeholder="Leave a comment here"
                                                    id="floatingTextarea2" style="height: 100px"></textarea>
                                                <label class="iq-active" for="floatingTextarea2">Comments</label>
                                            </div>
                                        </div>
                                    </b-row>
                                    <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                                        <div class="d-flex flex-grow-1 align-items-center gap-2">
                                            <div class="send-btn">
                                                <button type="submit" class="btn btn-primary-subtle">Send</button>
                                            </div>
                                            <div class="send-panel d-flex align-items-center flex-wrap gap-2">
                                                <label class="mb-0 bg-primary-subtle " for="file"> <input type="file"
                                                        id="file" style="display: none"> <a><i
                                                            class="ri-attachment-line"></i> </a> </label>
                                                <label class="mb-0 bg-primary-subtle "> <a href="javascript:void(0);">
                                                        <i class="ri-map-pin-user-line text-primary"></i></a> </label>
                                                <label class="mb-0 bg-primary-subtle "> <a href="javascript:void(0);">
                                                        <i class="ri-drive-line text-primary"></i></a> </label>
                                                <label class="mb-0 bg-primary-subtle "> <a href="javascript:void(0);">
                                                        <i class="ri-camera-line text-primary"></i></a> </label>
                                                <label class="mb-0 bg-primary-subtle "> <a href="javascript:void(0);">
                                                        <i class="ri-user-smile-line text-primary"></i></a> </label>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <div class="send-panel float-end">
                                                <label class="mb-0 bg-primary-subtle "><a href="javascript:void(0);"><i
                                                            class="ri-settings-2-line text-primary"></i></a></label>{{ '' }}
                                                <label class="ms-2 mb-0 bg-primary-subtle "><a
                                                        href="javascript:void(0);"> <i
                                                            class="ri-delete-bin-line text-primary"></i></a> </label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
</template>