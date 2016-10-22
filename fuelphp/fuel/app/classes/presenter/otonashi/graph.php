<?php
class Presenter_Otonashi_Graph extends Presenter {
public function view(){
$this->title = 'おとなしくん｜グラフ';
$this->sub_title = 'グラフ';

$this->mail = Input::post('mail');
}
}
