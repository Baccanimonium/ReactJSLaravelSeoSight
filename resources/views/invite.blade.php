<p>Hello! {{ $data['name']}} invites you to join our site.</p>
@if ($data['message'] != '')
    <p>
        He also sends you following message:<br>
        {{ $data['message'] }}
    </p>
@endif
<p>
    You can join our site by clicking the following link:

    <a href="{{ url('/register/'.$data['code']) }}">{{ url('/register/'.$data['code']) }}</a>

    or enter your code manual in form: {{ $data['code'] }}
</p>