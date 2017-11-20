@extends ('layouts.default')

@section ('content')
    @if ($projects)
        <ul>
            @foreach ($projects as $project)
                <li>
                    {{ $project->name }}
                </li>
            @endforeach
        </ul>
    @endif

    <form method="POST" action="/public/projects/store" @submit.prevent="onSubmit" @keydown="errors.clear($event.target.name)">
        <div class="form-group">
            <label for="name">Project Name</label>

            <input type="text" class="form-control" id="name" name="name" v-model="name">

            <div class="alert alert-danger" v-if="errors.has('name')" v-text="errors.get('name')"></div>
        </div>

        <div class="form-group">
            <label for="description">Project Description</label>

            <input type="text" class="form-control" id="description" name="description" v-model="description">

            <div class="alert alert-danger" v-if="errors.has('description')" v-text="errors.get('description')"></div>
        </div>

        <button type="submit" class="btn btn-primary" :disabled="errors.any()">Add new Project</button>
    </form>
@endsection
