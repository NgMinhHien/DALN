<?php

if (!function_exists('trans_content')) {
    /**
     * Get translated content from model
     *
     * @param object $model
     * @param string $field
     * @return string
     */
    function trans_content($model, $field)
    {
        $locale = app()->getLocale();
        
        if ($locale === 'vi' && !empty($model->{$field . '_vi'})) {
            return $model->{$field . '_vi'};
        }
        
        return $model->$field;
    }
}
