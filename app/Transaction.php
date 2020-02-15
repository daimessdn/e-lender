<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $table = "transaction";

    protected $fillable = ["name", "nim", "id_line", "phone_no", "instances", "goods", "event", "borrowed_date", "finished_date", "approved", "description"];
    
}
