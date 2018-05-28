<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
use Mail;
class Invite extends Model {
    //пользователем заполняется только поле email
    protected $fillable = ['email','parent_user_id'];
    protected $table = 'invites';
    /**
     *
     * Метод вернет объект инвайта по коду и только если инвайт не использован
     * Иначе вернет NULL
     *
     * @param string $code
     * @return App\Invite
     */
    public static function getInviteByCode($code) {
        return Invite::where('code', $code)->where('claimed', NULL)->first();
    }

    /**
     * Генератор рандомного кода инвайта
     */
    protected function generateInviteCode() {
        $this->code = bin2hex(openssl_random_pseudo_bytes(16));
    }

    /**
     * Метод отправляет инвайт по почте
     *
     * @param string $message_text - текст сообщения
     */


    /**
     *
     * Связываем модель инвайта с моделью пользователя, отправляющего приглашение
     * Связь через поле parent_user_id
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    public function creator() {
        return $this->belongsTo('App\User', 'parent_user_id');
    }

    /**
     *
     * Связываем модель инвайта с моделью пользователя, получившего приглашение
     * Может пригодиться, если захотим показывать, кто кого пригласил
     * Связь через поле child_user_id
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function childUser() {
        return $this->belongsTo('App\User', 'child_user_id');
    }

    /**
     * Используем метод boot() чтобы подключиться к событию создания модели
     * будем генерировать код инвайта сразу при создании
     */
    protected static function boot() {
        parent::boot();
        static::creating(function ($model) {
            $model->generateInviteCode();
        });
    }
}