<?php

namespace App\Http\Controllers;

use App\StudioCases;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class CasesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $caseItems = StudioCases::with(['categories' => function ($query) {
            $query->select(['name','url']);
        }])->select(['title','img','id'])->get();
        return response()->json($caseItems);
    }
    public function recentCases( $id)
    {
        $caseItems =  DB::table('studio_cases')->select(['img','title','id'])->latest()->take($id)->get();
        return response()->json($caseItems);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $caseItems = StudioCases::with(['testimonials' => function ($query) {
            $query->select('id', 'text', 'testimonialsTable_id','testimonialsTable_type','user_id')->with(['user' => function ($query) {
                $query->select('id', 'name', 'email','clients_company_id','avatar')->with('clientsCompany:id,name,img');
                }]);
            }])
        ->where('id', $id)->select('id','title','img','created_at','text',
                'likesCount','challenge','solution','solutionImg','results','resultsChart','resultsText')->first();

        $prevItem = StudioCases::where('id', '<', $id)->max('id');
        $nextItem = StudioCases::where('id', '>', $id)->select('id')->value('id');
        $caseItems->betwenItems = [$prevItem,$nextItem];
        return response()->json($caseItems);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
}
