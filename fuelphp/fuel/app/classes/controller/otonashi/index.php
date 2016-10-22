<?php

class Controller_Otonashi_Index extends Controller {
    public function action_index(){
        $view = 'otonashi/index';
        $twig = \View_Twig::forge($view);
        $presenter = \Presenter::Forge($view, 'view', null, $twig);
        return \Response::forge($presenter);
    }
}