<?php

class Controller_Otonashi_Graph extends Controller {
    public function action_index(){
        $view = 'otonashi/graph';
        $twig = \View_Twig::forge($view);
        $presenter = \Presenter::Forge($view, 'view', null, $twig);
        return \Response::forge($presenter);
}
}
